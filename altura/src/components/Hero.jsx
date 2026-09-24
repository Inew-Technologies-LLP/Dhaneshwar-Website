import { QrCode } from "lucide-react";
import heroBg from "../images/webp gallary/02_Altura.webp";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] min-h-[500px] overflow-hidden group">
      {/* Full Hero Render Image */}
      <img
        src={heroBg}
        alt="Altura Architectural Building Render"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        style={{ objectPosition: "center 30%" }}
      />

      {/* Contrast Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Top-Left Content Overlay (Heading + Paragraph) */}
      <div className="absolute top-8 left-6 sm:top-14 sm:left-14 max-w-[calc(100%-3rem)] sm:max-w-xl z-10 text-white space-y-2 sm:space-y-3">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white drop-shadow-md">
          Heading
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-md drop-shadow-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </p>
      </div>

      {/* Bottom-Right QR Code and RERA Box */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-[#0A5E9D] text-white px-3 py-2 sm:px-6 sm:py-5 rounded-none flex items-center gap-2 sm:gap-4 shadow-2xl max-w-[calc(100%-2rem)]">
        <div className="bg-white p-1.5 sm:p-2 rounded-none shadow-xs shrink-0">
          <QrCode size={28} className="text-[#0A5E9D] sm:w-[44px] sm:h-[44px]" />
        </div>
        <div className="text-left leading-tight">
          <p className="text-xs sm:text-lg font-medium text-white tracking-wide">
            Qr code and
          </p>
          <p className="text-xs sm:text-lg font-medium text-white tracking-wide">
            RERA no.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;