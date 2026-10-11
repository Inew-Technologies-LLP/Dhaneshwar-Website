import { useState } from "react";
import {
  Plus,
  Minus,
  Download,
  Building2,
  Grid,
  Utensils,
  Bath,
  DoorClosed,
  Zap,
  Paintbrush,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const specCategories = [
  {
    icon: Building2,
    title: "STRUCTURE",
    items: [
      "Earthquake-resistant RCC framed structure",
      "AAC block masonry for internal and external walls",
    ],
  },
  {
    icon: Grid,
    title: "FLOORING & TILING",
    items: [
      "1200 × 600 mm vitrified tiles in living and dining areas",
      "1200 × 600 mm vitrified tiles in kitchen",
      "600 × 600 mm vitrified tiles in bedrooms",
      "Matching tile skirting",
      "Anti-skid tiles in balconies, terraces and dry balcony",
    ],
  },
  {
    icon: Utensils,
    title: "KITCHEN",
    items: [
      "Granite kitchen platform with stainless-steel sink",
      "Designer tile dado up to 600 mm above the platform",
      "Provision for water purifier",
      "Provision for ductless chimney",
      "Convenient electrical points for kitchen appliances",
      "Washing machine provision in utility / dry balcony",
    ],
  },
  {
    icon: Bath,
    title: "BATHROOMS",
    items: [
      "Anti-skid tile flooring",
      "Designer wall tiles up to lintel level",
      "Sanitary ware and CP fittings from reputed brands",
      "Concealed plumbing",
      "Hot & cold water mixer",
      "Geyser provision",
      "Countertop wash basin with granite counter in master bathroom",
    ],
  },
  {
    icon: DoorClosed,
    title: "DOORS & WINDOWS",
    items: [
      "Laminated main entrance door with premium fittings",
      "Digital lock for main entrance door*",
      "Quality internal flush doors",
      "Powder-coated aluminium windows",
      "Mosquito mesh for applicable windows",
      "Granite/stone window sills",
      "Aluminium ventilators in bathrooms",
    ],
  },
  {
    icon: Zap,
    title: "ELECTRICAL & SECURITY",
    items: [
      "Concealed fire-resistant copper wiring",
      "Premium modular switches",
      "ELCB/RCCB electrical protection",
      "AC points in living room and bedrooms",
      "TV points in living room and master bedroom",
      "Exhaust fan points in bathrooms",
      "Adequate electrical points throughout the apartment",
      "Video door phone",
    ],
  },
  {
    icon: Paintbrush,
    title: "WALLS & FINISHES",
    items: [
      "Smooth internal wall finish with premium emulsion paint",
      "POP/gypsum ceiling finish as specified",
    ],
  },
];

const Specification = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState(null); // All accordions closed by default

  const toggleSection = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="specifications" className="py-14 sm:py-20 lg:py-24 bg-[#F2F7FB] border-y border-[#D6E6F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mt-2 mb-4 tracking-tight">
            Considered in Every Detail.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
            Thoughtfully selected materials, finishes and provisions come together to create homes designed for comfort, functionality and lasting everyday use.
          </p>
        </div>

        {/* Accordion List with Framer Motion Smooth Height Animations */}
        <div className="space-y-3 mb-12">
          {specCategories.map((spec, idx) => {
            const isOpen = openIndex === idx;
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                className="border-b border-slate-200 transition-colors duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full py-4.5 px-2 flex items-center justify-between text-left group cursor-pointer transition-colors select-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <Icon size={20} className="text-[#0A5E9D] group-hover:text-[#084B7E] transition-colors shrink-0" />
                    <span className="text-sm sm:text-base font-medium tracking-wider text-slate-800 group-hover:text-[#0A5E9D] transition-colors">
                      {spec.title}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-7 h-7 rounded-full border border-slate-300 group-hover:border-[#0A5E9D] flex items-center justify-center text-slate-500 group-hover:text-[#0A5E9D] transition-colors"
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </motion.div>
                </button>

                {/* Animated Dropdown Height and Opacity */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${spec.num}`}
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
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-12 pb-6 pt-1">
                        <ul className="space-y-2.5">
                          {spec.items.map((item, itemIdx) => (
                            <motion.li
                              key={itemIdx}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: itemIdx * 0.03 }}
                              className="flex items-start gap-3 text-xs sm:text-sm font-light text-slate-600 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0A5E9D] shrink-0 mt-2" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Download Brochure Button */}
        <div className="text-center">
          <button
            onClick={() => onOpenInquiry && onOpenInquiry({ type: "brochure" })}
            className="inline-flex items-center gap-2.5 bg-[#0A5E9D] hover:bg-[#084B7E] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download size={16} />
            DOWNLOAD BROCHURE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specification;
