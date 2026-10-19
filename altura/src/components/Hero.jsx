import { ArrowRight } from "lucide-react";
import heroBg from "../images/02_Altura_upscayl_3x_ultrasharp-4x_website.png";
import reraNumberImg from "../images/rera_number.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] min-h-[520px] sm:min-h-[600px] overflow-hidden group bg-black">
      {/* Full Hero Render Image */}
      <img
        src={heroBg}
        alt="Altura Architectural Building Render"
        className="absolute inset-0 w-full h-full -translate-y-24 sm:translate-y-0 object-cover transition-transform duration-700 ease-out sm:group-hover:scale-[1.02]"
        style={{ objectPosition: "center 60%" }}
      />

      {/* Contrast Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black sm:from-black/85 via-black/40 to-black/25 pointer-events-none" />

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
        <div className="pt-2 sm:hidden">
          <div className="inline-block bg-white rounded-xs shadow-xl border border-white/40 overflow-hidden">
            <img
              src={reraNumberImg}
              alt="MahaRERA Registration No. PM1260002602348 - Altura"
              className="h-11 xs:h-12 w-auto max-w-[280px] object-contain block"
            />
          </div>
        </div>
      </div>

      {/* Desktop-Only Bottom-Right MahaRERA Registration Card */}
      <div className="hidden sm:inline-block absolute bottom-6 right-6 z-20 bg-white rounded-xs shadow-2xl border border-white/40 overflow-hidden">
        <img
          src={reraNumberImg}
          alt="MahaRERA Registration No. PM1260002602348 - Altura"
          className="h-16 md:h-20 lg:h-[84px] w-auto object-contain block"
        />
      </div>
    </section>
  );
};

export default Hero;