import { Building2, MapPin, Home } from "lucide-react";

const ProjectOverview = () => {
  const highlights = [
    {
      title: "G + 14",
      subtitle: "Residential Development",
      icon: Building2,
    },
    {
      title: "DUDULGAON",
      subtitle: "Pune",
      icon: MapPin,
    },
    {
      title: "JUST 65 HOMES",
      subtitle: "A more intimate community",
      icon: Home,
    },
  ];

  return (
    <section id="overview" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            INTRODUCING ALTURA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mt-2 mb-4 tracking-tight">
            A Place Designed Around Life.
          </h2>
        </div>

        {/* Story Body Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-4 text-slate-600 text-sm sm:text-base lg:text-[17px] font-light leading-relaxed">
            <p>
              Altura begins with a larger idea — that a home is shaped not only by the spaces within it, but by the life that grows around it.
            </p>
            <p>
              Conceived as a place for people, families and communities to flourish, Altura brings a more thoughtful approach to contemporary living — one that values well-being, connection, openness and a sense of belonging.
            </p>
            <p>
              It is a place designed not simply for where life is today, but for all that it can become.
            </p>
            <p className="font-normal text-slate-800 pt-1">
              A place to live well. Grow together. And belong.
            </p>
          </div>

          {/* 3 Key Highlights Sidebar / Stats */}
          <div className="lg:col-span-4 bg-[#F4F9FD] border-l-4 border-[#0A5E9D] p-6 sm:p-8 space-y-6 rounded-r-xs">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <Icon size={20} className="text-[#0A5E9D] shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold tracking-wide text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-slate-600 pl-7">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Key Details Footer Lines */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-xs sm:text-sm font-light text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p>Premium 2, 3 BHK &amp; 3.5 Duplex Homes</p>
          <p>MahaRERA Registration: P52100052298, PR1261012502532</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
