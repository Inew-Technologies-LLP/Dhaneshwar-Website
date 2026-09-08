import { LayoutGrid } from "lucide-react";

const FlatConfig = () => {
  const configs = [
    { type: "1BHK", area: "480 - 520 sq.ft.", desc: "Thoughtfully crafted 1 BHK residences for young professionals and couples." },
    { type: "2BHK", area: "750 - 840 sq.ft.", desc: "Spacious 2 BHK layouts with dual balconies and optimal ventilation." },
    { type: "3BHK", area: "1050 - 1200 sq.ft.", desc: "Luxury 3 BHK master suites with panoramic city views and premium fittings." },
  ];

  return (
    <section id="flat-config" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] mb-4 tracking-tight">
            Flat Config
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>

        {/* 3 Column Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          {configs.map((item, idx) => (
            <div
              key={item.type}
              className={`flex flex-col items-center text-center p-6 transition-all hover:bg-[#F0F7FF] rounded-lg group ${
                idx !== configs.length - 1 ? "md:border-r md:border-slate-200" : ""
              }`}
            >
              {/* Floor Plan Icon / Image Placeholder Box */}
              <div className="w-full max-w-[220px] aspect-[4/3] bg-[#EBF4FD] border-2 border-dashed border-[#B8D7FA] rounded-lg flex flex-col items-center justify-center p-4 mb-6 group-hover:border-[#1D65AD] transition-colors relative">
                <LayoutGrid size={48} className="text-[#1D65AD] mb-2" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-[#1D65AD] bg-white px-2.5 py-1 rounded shadow-xs border border-[#D0E5FB]">
                  Floor Plan Placeholder
                </span>
              </div>

              {/* Title Badge */}
              <h3 className="text-xl font-bold text-[#1D65AD] mb-2">
                {item.type}
              </h3>
              <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                {item.area}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlatConfig;
