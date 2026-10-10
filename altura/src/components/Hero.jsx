import { QrCode, ArrowRight } from "lucide-react";
import heroBg from "../images/02_Altura_upscayl_3x_ultrasharp-4x_website.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] min-h-[520px] sm:min-h-[600px] overflow-hidden group">
      {/* Full Hero Render Image */}
      <img
        src={heroBg}
        alt="Altura Architectural Building Render"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        style={{ objectPosition: "center 60%" }}
      />

      {/* Contrast Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none" />

      {/* Content Overlay: Bottom-Left on Mobile (<sm), Top-Left on Desktop (sm+) */}
      <div className="absolute bottom-4 left-5 sm:top-16 sm:bottom-auto sm:left-14 md:left-20 max-w-[calc(100%-2.5rem)] sm:max-w-2xl z-10 text-white space-y-3 sm:space-y-6">
        {/* Top Tagline */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase text-white/95">
            ALTURA • DUDULGAON, PUNE
          </span>
        </div>

        {/* Main Serif Headline */}
        <h1 className="font-serif-display text-3xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-white drop-shadow-md leading-[1.08]">
          The Sky <br />
          Belongs to All.
        </h1>

        {/* Supporting Line */}
        <p className="text-xs sm:text-base lg:text-[17px] text-white/95 leading-relaxed font-light max-w-md drop-shadow-xs">
          Thoughtfully planned 2 &amp; 3 BHK residences and select 3.5 BHK duplex homes in Dudulgaon, Pune.
        </p>

        {/* Explore Altura Outlined Button */}
        <div className="pt-1 sm:pt-2">
          <a
            href="#overview"
            className="inline-flex items-center gap-2 border border-white/80 hover:border-white bg-black/20 hover:bg-white/15 text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-xs transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE ALTURA</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile-Only MahaRERA QR Box (Bottom-Left on Mobile) */}
        <div className="pt-1 sm:hidden">
          <div className="inline-flex items-center gap-3 bg-[#0A5E9D]/95 backdrop-blur-xs text-white px-3 py-2 shadow-2xl border border-white/15">
            <div className="bg-white p-1 rounded-none shrink-0 shadow-xs">
              <QrCode size={22} className="text-[#0A5E9D]" />
            </div>
            <div className="text-left leading-tight pr-1">
              <p className="text-[9px] font-light text-white/90 uppercase tracking-wider">
                MahaRERA Registration
              </p>
              <p className="text-xs font-semibold text-white tracking-wide mt-0.5">
                P52100052298
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-Only Bottom-Right QR Code and MahaRERA Box */}
      <div className="hidden sm:flex absolute bottom-6 right-6 z-20 bg-[#0A5E9D]/95 backdrop-blur-xs text-white px-5 py-3.5 items-center gap-4 shadow-2xl border border-white/15">
        <div className="bg-white p-1.5 rounded-none shrink-0 shadow-xs">
          <QrCode size={36} className="text-[#0A5E9D]" />
        </div>
        <div className="text-left leading-tight">
          <p className="text-xs font-light text-white/90 uppercase tracking-wider">
            MahaRERA Registration
          </p>
          <p className="text-sm font-semibold text-white tracking-wide mt-0.5">
            P52100052298
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;