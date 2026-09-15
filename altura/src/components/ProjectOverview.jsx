import swimmingPoolImg from "../images/amenities/2_swimming_pool 1.png";
import gymnasiumImg from "../images/amenities/1_gymnasium 1.png";
import skydeckImg from "../images/amenities/skydeck.png";
import multipurposeCourtImg from "../images/amenities/multipurposecourt.png";

const ProjectOverview = () => {
  const features = [
    {
      id: 1,
      title: "Swimming Pool & Deck",
      caption: "Unwind. Refresh. Recharge.",
      icon: swimmingPoolImg,
    },
    {
      id: 2,
      title: "Gymnasium",
      caption: "Designed for an active everyday.",
      icon: gymnasiumImg,
    },
    {
      id: 3,
      title: "Skydeck",
      caption: "Open skies. Elevated moments.",
      icon: skydeckImg,
    },
    {
      id: 4,
      title: "Multipurpose Court",
      caption: "Space to play, move and connect",
      icon: multipurposeCourtImg,
      scale: "scale-110",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-normal text-[#1D65AD] mb-4 tracking-tight">
          Project Overview
        </h2>

        {/* Paragraph Text */}
        <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-4xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscin
        </p>

        {/* 2 Column (Phone) / 4 Column (Desktop) Features Grid with Vertical Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 md:gap-y-0 relative py-4">
          {features.map((item, idx) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between px-2 sm:px-4 lg:px-8 group"
            >
              <div>
                {/* Icon Container */}
                <div className="h-16 sm:h-20 md:h-24 flex items-end mb-3 sm:mb-5">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`max-h-12 sm:max-h-16 md:max-h-20 max-w-full object-contain [filter:brightness(0)_saturate(100%)] transition-transform duration-300 group-hover:scale-105 ${item.scale || ""}`}
                    loading="lazy"
                  />
                </div>

                {/* Title & Caption */}
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base font-medium text-slate-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm font-light text-slate-500 leading-normal">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              {idx !== features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-2 bottom-2 w-px bg-slate-300" />
              )}
            </div>
          ))}
        </div>

        {/* Project Key Details Footer Lines */}
        <div className="mt-14 space-y-2 text-sm sm:text-base font-light text-slate-700">
          <p>2 Ground Floors | Common Terrace | Riverside Development | 2, 3 BHK &amp; Duplex Homes</p>
          <p>MahaRERA Registration Number: P52100052298, PR1261012502532</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
