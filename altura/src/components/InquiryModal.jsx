import { useState, useEffect } from "react";
import { X, Send, Download, CalendarCheck, CheckCircle2 } from "lucide-react";
import alturaBrochurePdf from "../flat_layouts/Altura_EBrochure.pdf";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const triggerBackgroundDownload = async (url, filename = "Altura_EBrochure.pdf") => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 10000);
  } catch {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  config: "2 BHK",
  date: "",
};

const InquiryModal = ({ isOpen, onClose, initialData = {} }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const modalType = initialData?.type || "enquire"; // 'enquire', 'brochure', 'site_visit'

  useEffect(() => {
    if (initialData?.config) {
      setFormData((prev) => ({ ...prev, config: initialData.config }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const config = formData.config;
    const date = formData.date;

    if (!name || !phone || (modalType === "site_visit" && !date)) {
      setErrorMessage(
        modalType === "site_visit" && !date
          ? "Please select your preferred visit date."
          : "Please fill in your name and mobile number."
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // If brochure download form: open PDF first and automatically download in background
    if (modalType === "brochure") {
      try {
        window.open(alturaBrochurePdf, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.error("Failed to open PDF:", err);
      }
      triggerBackgroundDownload(alturaBrochurePdf, "Altura_EBrochure.pdf");
    }

    try {
      const payload = {
        name,
        fullName: name,
        "full name": name,
        "Full Name": name,

        phone,
        phoneNumber: phone,
        "phone number": phone,
        "Phone Number": phone,

        email: email || "Not Provided",
        emailAddress: email || "Not Provided",
        "email address": email || "Not Provided",

        config,
        configuration: config,
        interestedConfig: config,
        "interested config": config,

        ...(modalType === "site_visit" && {
          date,
          visitDate: date,
          "visit date": date,
          "Visit Date": date,
          "Preferred Date": date,
        }),

        type:
          modalType === "brochure"
            ? "Brochure Download"
            : modalType === "site_visit"
            ? "Site Visit Request"
            : "General Enquiry",
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
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);

      setSubmitted(true);
      setFormData(initialFormData);
      const closeDelay = modalType === "brochure" ? 3500 : 2500;
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, closeDelay);
    } catch (error) {
      console.error("Altura enquiry submission failed:", error);
      setSubmitted(true);
      setFormData(initialFormData);
      const closeDelay = modalType === "brochure" ? 3500 : 2500;
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, closeDelay);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTitle = () => {
    if (modalType === "brochure") return "Download Project Brochure";
    if (modalType === "site_visit") return "Schedule a Site Visit";
    return "Enquire About Altura";
  };

  const getSubtitle = () => {
    if (modalType === "brochure") {
      return "Enter your details to access the complete project brochure, including residences, amenities, specifications and project information.";
    }
    if (modalType === "site_visit") {
      return "Share your contact details and preferred date, and our team will arrange a convenient personalized site walkthrough.";
    }
    return "Share your details and our team will connect with you with complete project details and pricing.";
  };

  const getButtonText = () => {
    if (modalType === "brochure") return "DOWNLOAD BROCHURE →";
    if (modalType === "site_visit") return "REQUEST SITE VISIT →";
    return "SUBMIT ENQUIRY →";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-none max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[92vh] overflow-y-auto my-auto animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-light text-slate-900 tracking-tight">
              {modalType === "brochure"
                ? "Brochure Ready"
                : "Request Received Successfully"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              {modalType === "brochure"
                ? "Your brochure has opened in a new tab and your download will start automatically in the background."
                : "Thank you for your interest in Altura. Our dedicated sales team will get in touch with you shortly."}
            </p>
            {modalType === "brochure" && (
              <div className="pt-2">
                <a
                  href={alturaBrochurePdf}
                  download="Altura_EBrochure.pdf"
                  className="inline-flex items-center gap-1.5 text-xs text-[#0A5E9D] hover:underline font-semibold"
                >
                  <Download size={14} />
                  <span>Click here if the download didn't start automatically</span>
                </a>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A5E9D]">
                ALTURA
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 mt-1 tracking-tight">
                {getTitle()}
              </h3>
              <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                {getSubtitle()}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-none focus:ring-1 focus:ring-[#0A5E9D] focus:border-[#0A5E9D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-none focus:ring-1 focus:ring-[#0A5E9D] focus:border-[#0A5E9D] focus:outline-none"
                />
              </div>

              {modalType === "site_visit" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Visit Date*
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-none focus:ring-1 focus:ring-[#0A5E9D] focus:border-[#0A5E9D] focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Interested In
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "2 BHK",
                    "3 BHK",
                    "3.5 BHK Duplex",
                    "Not Sure Yet",
                  ].map((cfg) => (
                    <button
                      key={cfg}
                      type="button"
                      onClick={() => setFormData({ ...formData, config: cfg })}
                      className={`py-2 px-2 text-xs font-medium border text-center transition-all cursor-pointer ${
                        formData.config === cfg
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
                {modalType === "brochure" ? (
                  <Download size={16} />
                ) : modalType === "site_visit" ? (
                  <CalendarCheck size={16} />
                ) : (
                  <Send size={16} />
                )}
                {isSubmitting ? "Submitting..." : getButtonText()}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;