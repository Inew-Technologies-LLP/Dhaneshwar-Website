import apartment1 from "../images/apartment1.png";
import apartment2 from "../images/apartment2.png";
import apartment3 from "../images/apartment3.png";

const Residences = ({ onOpenFloorPlan }) => {
  const configs = [
    {
      type: "2 BHK",
      title: "2 BHK",
      tagline: "Thoughtfully planned. Effortlessly liveable.",
      image: apartment1,
    },
    {
      type: "3 BHK",
      title: "3 BHK",
      tagline: "More room for life.",
      image: apartment2,
    },
    {
      type: "3 BHK Duplex",
      title: "3 BHK DUPLEX",
      tagline: "Two levels. One exceptional sense of home.",
      image: apartment3,
    },
  ];

  return (
    <section id="residences" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            RESIDENCES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mt-2 mb-4 tracking-tight">
            Homes Designed Around Life.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Thoughtfully planned spaces considered proportions and everyday functionality come together to create homes designed around the way families live.
          </p>
        </div>

        {/* 3 Column Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          {configs.map((item, idx) => (
            <div
              key={item.type}
              className="relative flex flex-col items-center justify-between p-6 sm:p-8 text-center group transition-all duration-300 min-h-[360px]"
            >
              {/* Apartment Image Box */}
              <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] mb-6 relative flex items-center justify-center bg-white transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={`${item.title} Layout`}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                />
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2 mb-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-wide transition-colors duration-300 group-hover:text-[#0A5E9D]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light max-w-[240px] mx-auto leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              {/* View Floor Plan CTA Button */}
              <div>
                <button
                  onClick={() => onOpenFloorPlan && onOpenFloorPlan(item.type)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A5E9D] hover:text-[#084B7E] uppercase tracking-wider py-1 border-b-2 border-transparent hover:border-[#0A5E9D] transition-all cursor-pointer"
                >
                  VIEW FLOOR PLAN →
                </button>
              </div>

              {/* Vertical Divider for Desktop */}
              {idx !== configs.length - 1 && (
                <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Residences;
