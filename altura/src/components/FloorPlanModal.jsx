import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import apartment1 from "../images/apartment1.png";
import apartment2 from "../images/apartment2.png";
import apartment3 from "../images/apartment3.png";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const floorPlanData = {
  "2 BHK": {
    name: "2 BHK Residence",
    tagline: "Thoughtfully planned. Effortlessly liveable.",
    carpetArea: "710 - 745 sq.ft.",
    features: [
      "Spacious living and dining with attached balcony",
      "Well-ventilated master bedroom with ensuite bath",
      "Functional kitchen with dedicated utility / dry balcony",
      "Optimal privacy with zero wastage layout",
    ],
    image: apartment1,
    rooms: [
      { label: "Living & Dining", dim: "16'0\" × 10'6\"" },
      { label: "Master Bedroom", dim: "12'0\" × 11'0\"" },
      { label: "Bedroom 2", dim: "11'0\" × 10'0\"" },
      { label: "Kitchen", dim: "9'0\" × 7'6\"" },
      { label: "Balcony", dim: "10'6\" × 4'6\"" },
    ],
  },
  "3 BHK": {
    name: "3 BHK Residence",
    tagline: "More room for life.",
    carpetArea: "960 - 1040 sq.ft.",
    features: [
      "Expansive living area with panoramic view balcony",
      "Two master suites with dedicated attached bathrooms",
      "Large modern kitchen layout with separate dry terrace",
      "Cross-ventilation and natural daylight in all corners",
    ],
    image: apartment2,
    rooms: [
      { label: "Living & Dining", dim: "20'0\" × 12'0\"" },
      { label: "Master Bedroom 1", dim: "13'6\" × 11'6\"" },
      { label: "Master Bedroom 2", dim: "12'0\" × 11'0\"" },
      { label: "Bedroom 3", dim: "11'0\" × 10'0\"" },
      { label: "Kitchen & Utility", dim: "11'0\" × 8'0\"" },
    ],
  },
  "3 BHK Duplex": {
    name: "3 BHK Duplex Home",
    tagline: "Two levels. One exceptional sense of home.",
    carpetArea: "1350 - 1480 sq.ft.",
    features: [
      "Double-height living space with grand architectural feel",
      "Private upper-level family lounge & master retreats",
      "Select penthouse units with oversized private terraces",
      "Exclusive low-density layout with 3-side open views",
    ],
    image: apartment3,
    rooms: [
      { label: "Double-Height Living", dim: "22'0\" × 14'0\"" },
      { label: "Lower Guest Suite", dim: "12'6\" × 11'0\"" },
      { label: "Upper Master Suite", dim: "15'0\" × 13'0\"" },
      { label: "Upper Bedroom 2", dim: "12'6\" × 11'6\"" },
      { label: "Private Terrace Deck", dim: "14'0\" × 8'0\"" },
    ],
  },
};

const FloorPlanModal = ({ isOpen, onClose, selectedConfig = "2 BHK", isUnlocked = false, onUnlockSuccess }) => {
  const [currentConfig, setCurrentConfig] = useState(selectedConfig);
  const [unlocked, setUnlocked] = useState(isUnlocked);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState(selectedConfig);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedConfig) {
      if (selectedConfig.includes("Duplex") || selectedConfig === "Duplex") {
        setCurrentConfig("3 BHK Duplex");
        setInterestedIn("3 BHK Duplex");
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
    setUnlocked(isUnlocked);
  }, [isUnlocked]);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-none max-w-4xl w-full p-5 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[94vh] overflow-y-auto my-auto animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {!unlocked ? (
          /* Lead Gatekeeper Pop-up as per Feedback */
          <div className="max-w-lg mx-auto py-2 sm:py-4">
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
                  {["2 BHK", "3 BHK", "3 BHK Duplex"].map((cfg) => (
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

              <p className="text-[11px] text-slate-400 text-center">
                Instant access. We respect your privacy.
              </p>
            </form>
          </div>
        ) : (
          /* Unlocked Instant Floor Plan Viewer */
          <div className="space-y-6">
            {/* Header & Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A5E9D]">
                  Floor Plans &amp; Layouts
                </span>
                <h3 className="text-2xl font-light text-slate-900 tracking-tight">
                  {activePlan.name}
                </h3>
                <p className="text-xs text-slate-500">{activePlan.tagline}</p>
              </div>

              {/* Configuration Switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 border border-slate-200">
                {Object.keys(floorPlanData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setCurrentConfig(key)}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      currentConfig === key
                        ? "bg-[#0A5E9D] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Layout Grid: Image Viewer + Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Floor Plan Image Canvas */}
              <div className="lg:col-span-7 bg-[#F9FBFC] border border-slate-200 p-6 flex flex-col items-center justify-center min-h-[320px] relative group">
                <img
                  src={activePlan.image}
                  alt={`${activePlan.name} Floor Plan`}
                  className="max-h-[320px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-4 text-center">
                  <span className="text-[11px] text-slate-400">
                    *Schematic representation. Dimensions subject to construction tolerances.
                  </span>
                </div>
              </div>

              {/* Plan Specifications & Highlights */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#F0F7FD] p-4 border-l-3 border-[#0A5E9D]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Estimated Carpet Area</p>
                  <p className="text-lg font-bold text-slate-900">{activePlan.carpetArea}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {activePlan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 size={14} className="text-[#0A5E9D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Approximate Dimensions
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {activePlan.rooms.map((room, idx) => (
                      <div key={idx} className="bg-slate-50 p-2 border border-slate-200/60">
                        <p className="text-slate-500 text-[11px]">{room.label}</p>
                        <p className="font-semibold text-slate-800">{room.dim}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="w-full bg-[#0A5E9D] hover:bg-[#084B7E] text-white py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloorPlanModal;
