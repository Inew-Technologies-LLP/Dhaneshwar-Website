import { QrCode } from "lucide-react";
import heroBg from "../images/AlturaHomePage.png";

const Hero = () => {
  return (
    <section id="home" className="py-6 bg-white overflow-hidden">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-6">
        {/* Main Hero Container matching 1314 x 607 aspect ratio */}
        <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[607px] rounded-lg overflow-hidden border border-slate-200 shadow-lg group">
          
          {/* Full Hero Render Image */}
          <img
            src={heroBg}
            alt="Altura Architectural Building Render"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            style={{ objectPosition: "center top" }}
          />

          {/* Top-Left Content Overlay (Heading + Paragraph) */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-14 max-w-lg z-10 text-white space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white drop-shadow-md">
              Heading
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-md drop-shadow-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
          </div>

          {/* Bottom-Right QR Code and RERA Box */}
          <div className="absolute bottom-3 right-3 z-20 bg-[#0A5E9D] text-white px-6 py-5 rounded-none flex items-center gap-4 shadow-2xl">
            <div className="bg-white p-2 rounded shadow-xs">
              <QrCode size={44} className="text-[#0A5E9D]" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-base sm:text-lg font-medium text-white tracking-wide">
                Qr code and
              </p>
              <p className="text-base sm:text-lg font-medium text-white tracking-wide">
                RERA no.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;