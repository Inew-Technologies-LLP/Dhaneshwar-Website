import { Download } from "lucide-react";

const Specification = ({ onOpenInquiry }) => {
  const specsList = [
    "Swimming Pool",
    "Turf",
    "Jogging Track",
    "Gym",
    "Badminton court",
  ];

  const quadrants = [
    { id: 1, title: "Doors Grills" },
    { id: 2, title: "Doors Grills" },
    { id: 3, title: "Doors Grills" },
    { id: 4, title: "Doors Grills" },
  ];

  return (
    <section id="specification" className="py-16 bg-white">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] text-center mb-16 tracking-tight">
          Specification
        </h2>

        {/* 2x2 Grid Container */}
        <div className="max-w-[1199px] mx-auto relative mb-16">
          
          {/* PERFECT 4-WAY DISCONNECTED CROSS DIVIDERS (Positioned relative to parent center 50%, 50%) */}
          {/* Top Vertical Line Segment */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-[calc(50%+12px)] w-px bg-slate-300" />
          
          {/* Bottom Vertical Line Segment */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[calc(50%+12px)] bottom-4 w-px bg-slate-300" />
          
          {/* Left Horizontal Line Segment */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 right-[calc(50%+12px)] h-px bg-slate-300" />
          
          {/* Right Horizontal Line Segment */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(50%+12px)] right-4 h-px bg-slate-300" />

          {/* 4 Quadrants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16">
            {quadrants.map((spec) => (
              <div 
                key={spec.id} 
                className="px-2 sm:px-8 md:px-12 py-4"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                  {spec.title}
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-10 md:gap-14">
                  <ul className="space-y-2.5 sm:space-y-3.5">
                    {specsList.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-normal text-slate-600 group/item cursor-default">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-600 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:bg-[#1D65AD]" />
                        <span className="break-words transition-colors duration-300 group-hover/item:text-slate-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2.5 sm:space-y-3.5">
                    {specsList.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-normal text-slate-600 group/item cursor-default">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-600 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:bg-[#1D65AD]" />
                        <span className="break-words transition-colors duration-300 group-hover/item:text-slate-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Download Brochure Button */}
        <div className="text-center">
          <button
            onClick={onOpenInquiry}
            className="group inline-flex items-center gap-2 bg-[#1D65AD] hover:bg-[#154E88] text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specification;
