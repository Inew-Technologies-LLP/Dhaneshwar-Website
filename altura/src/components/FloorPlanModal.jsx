import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ShieldAlert } from "lucide-react";

import * as pdfjsLib from "pdfjs-dist";

// Import 4 PDFs from flat_layouts folder
import pdf2BHK from "../flat_layouts/260810_UNIT LAYOUTS-2BHK.pdf";
import pdf3BHK from "../flat_layouts/260810_UNIT LAYOUTS-3BHK.pdf";
import pdfDuplexL1 from "../flat_layouts/260810_UNIT LAYOUTS-DUPLEX L1.pdf";
import pdfDuplexL2 from "../flat_layouts/260810_UNIT LAYOUTS-DUPLEX L2.pdf";

// Configure worker src with unpkg CDN for pdfjs-dist
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version || "6.4.299"}/build/pdf.worker.min.mjs`;

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const floorPlanData = {
  "2 BHK": {
    name: "2 BHK Unit Layout",
    pdfs: [
      { id: "2bhk", title: "2 BHK Unit Layout", levelLabel: "2 BHK Layout", url: pdf2BHK }
    ],
  },
  "3 BHK": {
    name: "3 BHK Unit Layout",
    pdfs: [
      { id: "3bhk", title: "3 BHK Unit Layout", levelLabel: "3 BHK Layout", url: pdf3BHK }
    ],
  },
  "3.5 BHK Duplex": {
    name: "3.5 BHK Duplex Layout",
    pdfs: [
      { id: "duplex_l1", title: "Duplex Level 1 (L1)", levelLabel: "Level 1 (L1)", url: pdfDuplexL1 },
      { id: "duplex_l2", title: "Duplex Level 2 (L2)", levelLabel: "Level 2 (L2)", url: pdfDuplexL2 }
    ],
  },
};

// Canvas page renderer
const PdfPageCanvas = ({ page }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderTask = null;
    const canvas = canvasRef.current;
    if (!canvas || !page) return;

    const context = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio || 1;
    const containerWidth = canvas.parentElement ? canvas.parentElement.clientWidth - 16 : 1000;
    const unscaledViewport = page.getViewport({ scale: 1.0 });
    const scale = Math.min(Math.max((containerWidth / unscaledViewport.width) * pixelRatio, 1.2), 3.5);
    
    const viewport = page.getViewport({ scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;
    canvas.style.width = `${viewport.width / pixelRatio}px`;
    canvas.style.height = `${viewport.height / pixelRatio}px`;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    renderTask = page.render(renderContext);
    renderTask.promise.catch((err) => {
      if (err.name !== "RenderingCancelledException") {
        console.error("Canvas render error:", err);
      }
    });

    return () => {
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [page]);

  return (
    <canvas
      ref={canvasRef}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className="max-w-full h-auto object-contain shadow-xs select-none my-1 pointer-events-none rounded-none border border-slate-200/80"
    />
  );
};

// Protected PDF Viewer Component
const PdfCanvasViewer = ({ pdfUrl }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);
    setErrorMessage("");
    setPages([]);

    const loadPdf = async () => {
      try {
        let loadingTask;
        if (typeof pdfUrl === "string") {
          const res = await fetch(pdfUrl);
          if (!res.ok) throw new Error(`HTTP error ${res.status} fetching PDF file`);
          const arrayBuffer = await res.arrayBuffer();
          loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
        } else {
          loadingTask = pdfjsLib.getDocument(pdfUrl);
        }

        const pdf = await loadingTask.promise;
        if (!isMounted) return;

        const pagePromises = [];
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          pagePromises.push(pdf.getPage(pageNum));
        }
        const loadedPages = await Promise.all(pagePromises);
        if (isMounted) {
          setPages(loadedPages);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error loading PDF layout:", err);
        if (isMounted) {
          setError(true);
          setErrorMessage(err?.message || "Error processing PDF canvas.");
          setLoading(false);
        }
      }
    };

    if (pdfUrl) {
      loadPdf();
    }

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className="relative w-full flex flex-col items-center justify-center min-h-[340px] sm:min-h-[420px] bg-[#F8FAFC] border border-slate-200 select-none overflow-hidden p-2 sm:p-4 rounded-none"
    >
      {loading && (
        <div className="flex flex-col items-center justify-center p-12 text-slate-500 space-y-3">
          <div className="w-8 h-8 border-3 border-[#0A5E9D] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-medium tracking-wide uppercase text-slate-600">
            Rendering Unit Layout PDF...
          </span>
        </div>
      )}

      {error && (
        <div className="text-center p-8 text-slate-500 space-y-2">
          <p className="text-sm font-semibold text-slate-700">Unable to load unit layout PDF.</p>
          <p className="text-xs text-slate-500">{errorMessage || "Please try refreshing or contact our sales team."}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="w-full flex flex-col items-center justify-center overflow-y-auto max-h-[65vh] scrollbar-thin">
          {pages.map((page, index) => (
            <PdfPageCanvas key={index} page={page} />
          ))}
        </div>
      )}

      {/* Security Overlay to prevent right-click / drag / saving */}
      <div
        className="absolute inset-0 z-20 bg-transparent select-none"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
};

const FloorPlanModal = ({ isOpen, onClose, selectedConfig = "2 BHK", isUnlocked = false, onUnlockSuccess }) => {
  const [currentConfig, setCurrentConfig] = useState(selectedConfig);
  const [unlocked, setUnlocked] = useState(isUnlocked);
  const [activePdfIndex, setActivePdfIndex] = useState(0);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState(selectedConfig);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedConfig) {
      if (selectedConfig.includes("Duplex") || selectedConfig === "Duplex") {
        setCurrentConfig("3.5 BHK Duplex");
        setInterestedIn("3.5 BHK Duplex");
      } else if (selectedConfig.includes("3")) {
        setCurrentConfig("3 BHK");
        setInterestedIn("3 BHK");
      } else {
        setCurrentConfig("2 BHK");
        setInterestedIn("2 BHK");
      }
    }
  }, [selectedConfig]);

  useEffect(() => {
    setName("");
    setMobile("");
    setEmail("");
    setErrorMessage("");
    if (!isOpen) {
      setUnlocked(false);
    } else {
      setUnlocked(isUnlocked);
    }
  }, [isOpen, isUnlocked]);

  // Reset active PDF index whenever configuration changes
  useEffect(() => {
    setActivePdfIndex(0);
  }, [currentConfig]);

  // Strict shortcut protection (Disable Print, Save, Inspect, Select All)
  useEffect(() => {
    if (!isOpen || !unlocked) return;

    const handleKeyDown = (e) => {
      // Disable Ctrl+P / Cmd+P
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // Disable Ctrl+S / Cmd+S
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // Disable Ctrl+U / Cmd+U
      if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // Disable Ctrl+Shift+I / Cmd+Option+I / F12
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "i")) ||
        ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === "i" || e.key === "I"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // Disable Ctrl+A / Cmd+A
      if ((e.ctrlKey || e.metaKey) && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen, unlocked]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim()) {
      setErrorMessage("Please enter your name and mobile number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        name: name.trim(),
        fullName: name.trim(),
        phone: mobile.trim(),
        phoneNumber: mobile.trim(),
        email: email.trim(),
        config: interestedIn,
        configuration: interestedIn,
        interestedConfig: interestedIn,
        type: "Floor Plan Request",
        project: "Altura",
      };

      // Set configuration to user selection strictly
      setCurrentConfig(interestedIn);

      const submissionPromise = fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      await Promise.race([
        submissionPromise,
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);

      setUnlocked(true);
      if (onUnlockSuccess) {
        onUnlockSuccess();
      }
    } catch (error) {
      console.error("Floor plan inquiry failed:", error);
      setUnlocked(true);
      if (onUnlockSuccess) {
        onUnlockSuccess();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const activePlan = floorPlanData[currentConfig] || floorPlanData["2 BHK"];
  const currentPdf = activePlan.pdfs[activePdfIndex] || activePlan.pdfs[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Dynamic print blocking CSS */}
      {unlocked && (
        <style>{`
          @media print {
            body { display: none !important; }
          }
        `}</style>
      )}

      <div
        className={`bg-white rounded-none w-full shadow-2xl relative border border-slate-200 overflow-y-auto my-auto animate-fade-in ${
          !unlocked
            ? "max-w-md p-6 sm:p-8 max-h-[92vh]"
            : "max-w-3xl lg:max-w-4xl p-4 sm:p-6 max-h-[90vh]"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5 transition-colors cursor-pointer z-30"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {!unlocked ? (
          /* Lead Gatekeeper Pop-up */
          <div className="w-full">
            <div className="text-center mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A5E9D]">
                Altura Residences
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mt-1 tracking-tight">
                Explore Altura Residences
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Share a few details to access the floor plans and receive complete project information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-none focus:ring-1 focus:ring-[#0A5E9D] focus:border-[#0A5E9D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-none focus:ring-1 focus:ring-[#0A5E9D] focus:border-[#0A5E9D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-none focus:ring-1 focus:ring-[#0A5E9D] focus:border-[#0A5E9D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Interested In:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["2 BHK", "3 BHK", "3.5 BHK Duplex"].map((cfg) => (
                    <button
                      key={cfg}
                      type="button"
                      onClick={() => {
                        setInterestedIn(cfg);
                        setCurrentConfig(cfg);
                      }}
                      className={`py-2 px-2 text-xs font-medium border text-center transition-all cursor-pointer ${
                        interestedIn === cfg
                          ? "border-[#0A5E9D] bg-[#0A5E9D] text-white"
                          : "border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {cfg}
                    </button>
                  ))}
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A5E9D] hover:bg-[#084B7E] text-white py-3 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-2 disabled:opacity-60"
              >
                {isSubmitting ? "UNLOCKING..." : "VIEW FLOOR PLAN →"}
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Protected PDF Floor Plan Viewer Only */
          <div className="space-y-3">
            {/* Header Title */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 pr-8">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A5E9D]">
                  Official Architectural Layout
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-slate-900 tracking-tight">
                  {activePlan.name}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 border border-slate-200">
                <ShieldAlert size={14} className="text-[#0A5E9D]" />
                <span>Protected Viewer</span>
              </div>
            </div>

            {/* Level / PDF Navigation Controls for Duplex (with Arrows) */}
            {activePlan.pdfs.length > 1 && (
              <div className="flex items-center justify-between bg-[#F0F7FD] p-2 border border-[#BADFFB] rounded-none">
                <button
                  onClick={() =>
                    setActivePdfIndex((prev) =>
                      prev > 0 ? prev - 1 : activePlan.pdfs.length - 1
                    )
                  }
                  className="p-1.5 rounded-full bg-white border border-slate-300 hover:bg-[#0A5E9D] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Previous Level"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-2">
                  {activePlan.pdfs.map((pdf, idx) => (
                    <button
                      key={pdf.id}
                      onClick={() => setActivePdfIndex(idx)}
                      className={`px-4 py-1 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        activePdfIndex === idx
                          ? "bg-[#0A5E9D] text-white shadow-xs"
                          : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                      }`}
                    >
                      {pdf.levelLabel || `Level ${idx + 1}`}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActivePdfIndex((prev) =>
                      prev < activePlan.pdfs.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="p-1.5 rounded-full bg-white border border-slate-300 hover:bg-[#0A5E9D] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Next Level"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* Full-width PDF Canvas Renderer */}
            <PdfCanvasViewer pdfUrl={currentPdf.url} />

            <div className="text-center text-[11px] text-slate-400 pt-1">
              *Official architectural unit layout representation for {currentConfig}. Downloading and printing disabled.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloorPlanModal;
