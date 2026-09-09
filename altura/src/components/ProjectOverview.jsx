import { Sun, BatteryCharging, Zap, ShieldCheck } from "lucide-react";

const ProjectOverview = () => {
  const features = [
    { id: 1, title: "Solar Panels", icon: Sun },
    { id: 2, title: "Solar Panels", icon: BatteryCharging },
    { id: 3, title: "Solar Panels", icon: Zap },
    { id: 4, title: "Solar Panels", icon: ShieldCheck },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] mb-4 tracking-tight">
          Project Overview
        </h2>

        {/* Paragraph Text */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>

        {/* 4 Column Features Grid with Vertical Dividers (229px height) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 py-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center h-[229px] p-6 text-center"
              >
                <div className="p-4 bg-[#EBF4FD] text-[#1D65AD] rounded-xl mb-4 shadow-sm border border-[#D0E5FB]">
                  <IconComponent size={38} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#1D65AD]">
                  {item.title}
                </h3>

                {/* 229px Vertical Divider */}
                {idx !== features.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-0 h-[229px] w-[1px] bg-slate-400" />
                )}
              </div>
            );
          })}
        </div>

        {/* Project Key Details Footer Line */}
        <div className="mt-8 text-xs sm:text-sm text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">Key Features / Specification of the project:</p>
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-800">Structure:</span> 22 Storey Residential Development &nbsp;|&nbsp; <span className="font-semibold text-slate-800">Configuration:</span> 2, 3 & 4 BHK Homes &nbsp;|&nbsp; <span className="font-semibold text-slate-800">RERA Registration Number:</span> P521000xx, P521000xx
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
