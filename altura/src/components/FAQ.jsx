import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "1. What home configurations are available at Altura?",
    a: "Altura offers 2 BHK and 3 BHK residences, along with select 3.5 BHK duplex homes designed for those looking for a more expansive living experience.",
  },
  {
    q: "2. Where exactly is Altura located?",
    a: "Altura is located in Dudulgaon, with convenient access to Moshi, Alandi, Charholi, Bhosari and key destinations across PCMC and North Pune. Use Get Directions to navigate directly to the project.",
  },
  {
    q: "3. How can I view the floor plans and detailed project information?",
    a: "Select your preferred residence on the website to access the relevant floor plan. You can also download the Altura brochure for detailed information about the project.",
  },
  {
    q: "4. What lifestyle amenities does Altura offer?",
    a: "Altura brings together spaces for fitness, recreation, wellness and community living, including a swimming pool with deck, gymnasium, multipurpose court, indoor games, kids’ play area, Skydeck and more.",
  },
  {
    q: "5. Is Altura registered with MahaRERA?",
    a: "Yes. Altura is registered with MahaRERA. The project registration details and QR code are available on the website for reference and verification.",
  },
  {
    q: "6. How can I know the current pricing and availability?",
    a: "Pricing and inventory may vary depending on the residence and availability. Submit an enquiry or speak with the Altura sales team for the latest pricing and available homes.",
  },
  {
    q: "7. Can I schedule a visit to Altura?",
    a: "Yes. You can request a site visit through the website, and our sales team will get in touch to arrange a convenient time.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mt-2 mb-3 tracking-tight">
            Good to Know.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
            Helpful answers to questions you may have while exploring Altura.
          </p>
        </div>

        {/* FAQ Accordion with Framer Motion Dropdown Animation */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 transition-colors duration-200 shadow-2xs hover:border-[#BADFFB] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown size={18} className="text-[#0A5E9D]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`faq-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.05 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
