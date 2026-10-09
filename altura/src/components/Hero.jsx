import { QrCode, ArrowRight } from "lucide-react";
import heroBg from "../images/webp gallary/02_Altura.webp";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] min-h-[520px] sm:min-h-[600px] overflow-hidden group">
      {/* Full Hero Render Image */}
      <img
        src={heroBg}
        alt="Altura Architectural Building Render"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        style={{ objectPosition: "center 30%" }}
      />

      {/* Contrast Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/25 pointer-events-none" />

      {/* Top-Left / Center-Left Content Overlay matching reference image */}
      <div className="absolute top-8 left-6 sm:top-16 sm:left-14 md:left-20 max-w-[calc(100%-3rem)] sm:max-w-2xl z-10 text-white space-y-4 sm:space-y-6">
        {/* Top Tagline with thin horizontal rules */}
        <div className="flex items-center gap-3">
          <span className="w-8 sm:w-12 h-px bg-white/60" />
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase text-white/95">
            ALTURA • DUDULGAON, PUNE
          </span>
        </div>

        {/* Main Serif Headline */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-white drop-shadow-md leading-[1.08]">
          The Sky <br />
          Belongs to All.
        </h1>

        {/* Supporting Line */}
        <p className="text-xs sm:text-base lg:text-[17px] text-white/95 leading-relaxed font-light max-w-md drop-shadow-xs">
          Thoughtfully planned 2 &amp; 3 BHK residences and select 3 BHK duplex homes in Dudulgaon, Pune.
        </p>

        {/* Explore Altura Outlined Button */}
        <div className="pt-2">
          <a
            href="#overview"
            className="inline-flex items-center gap-2 border border-white/80 hover:border-white bg-black/20 hover:bg-white/15 text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-xs transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE ALTURA</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Bottom-Right QR Code and MahaRERA Box */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-[#0A5E9D]/95 backdrop-blur-xs text-white px-3.5 py-2.5 sm:px-5 sm:py-3.5 flex items-center gap-3 sm:gap-4 shadow-2xl border border-white/15">
        <div className="bg-white p-1 sm:p-1.5 rounded-none shrink-0 shadow-xs">
          <QrCode size={26} className="text-[#0A5E9D] sm:w-[36px] sm:h-[36px]" />
        </div>
        <div className="text-left leading-tight">
          <p className="text-[10px] sm:text-xs font-light text-white/90 uppercase tracking-wider">
            MahaRERA Registration
          </p>
          <p className="text-xs sm:text-sm font-semibold text-white tracking-wide mt-0.5">
            P52100052298
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;