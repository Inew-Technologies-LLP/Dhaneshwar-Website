import { useState } from "react";
import { X, Send } from "lucide-react";

const InquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    config: "2BHK",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-xl max-w-md w-full p-4 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[92vh] overflow-y-auto my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-slate-800">Inquiry Received!</h3>
            <p className="text-sm text-slate-600">
              Thank you for contacting Altura. Our sales team will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold text-[#1D65AD] mb-1">
              Inquire About Altura
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out your details to receive pricing, floor plans, and site visit schedule.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D65AD] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D65AD] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D65AD] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Configuration</label>
                <select
                  value={formData.config}
                  onChange={(e) => setFormData({ ...formData, config: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D65AD] focus:outline-none bg-white"
                >
                  <option value="1BHK">1 BHK Residence</option>
                  <option value="2BHK">2 BHK Residence</option>
                  <option value="3BHK">3 BHK Residence</option>
                  <option value="Penthouse">Penthouse / Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Any specific query or preferred time for call..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D65AD] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1D65AD] hover:bg-[#154E88] text-white py-3 rounded-md font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Send size={16} />
                Submit Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;