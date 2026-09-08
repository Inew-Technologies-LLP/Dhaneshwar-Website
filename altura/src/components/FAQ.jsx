import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // 0 corresponds to Project overview

  const faqs = [
    {
      q: "Project overview",
      a: "Altura is a flagship premium residential tower featuring 22 floors of high-end apartments, state-of-the-art solar energy integration, smart security, and luxury lifestyle amenities designed for contemporary urban living.",
    },
    {
      q: "Q1: What are the available apartment configurations?",
      a: "Altura offers luxury 1 BHK, 2 BHK, and 3 BHK apartments with optimized floor plans and maximum natural lighting.",
    },
    {
      q: "Q2: What is the possession date for Altura?",
      a: "The project is on track for completion and handover by December 2026.",
    },
    {
      q: "Q3: What are the key amenities available?",
      a: "Key amenities include a swimming pool, clubhouse, rooftop solar panels, fitness center, badminton court, jogging track, and 24/7 multi-tier security.",
    },
    {
      q: "Q4: Is Altura RERA registered?",
      a: "Yes, Altura is fully RERA registered with RERA numbers P521000xx and P521000yy.",
    },
    {
      q: "Q5: What are the payment plan options?",
      a: "We offer flexible construction-linked payment plans as well as home loan assistance from leading nationalized and private banks.",
    },
    {
      q: "Q6: Are customized interior modifications allowed?",
      a: "Selected non-structural interior layout modifications can be accommodated during the early construction phase upon discussion with our engineering team.",
    },
    {
      q: "Q7: How can I schedule a site visit?",
      a: "You can click on the 'Inquire' or 'Book a Site Visit' button on the website, or contact our sales lounge directly.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Title Column */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] tracking-tight">
              FAQ
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Frequently asked questions about Altura project.
            </p>
          </div>

          {/* FAQ Accordion Pills Column */}
          <div className="lg:col-span-9 space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden transition-all border border-[#C5E1FA] shadow-2xs"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full bg-[#CBE3FB] hover:bg-[#B8D9FA] text-[#1D65AD] px-6 py-3.5 text-left font-semibold text-sm sm:text-base flex items-center justify-between transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[#1D65AD] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="bg-[#F2F8FF] px-6 py-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#D5E8FC]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
