import elevationBg from "../images/webp gallary/01_Altura1.webp";

const VisitAltura = ({ onOpenInquiry }) => {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
      {/* Background Elevation Image with Parallax / Zoom Feel */}
      <img
        src={elevationBg}
        alt="Altura Building Elevation"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />

      {/* Dark Overlay for High Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center text-white space-y-4 sm:space-y-6">
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#BADFFB] uppercase border-b border-[#BADFFB]/40 pb-1">
          VISIT ALTURA
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
          Come Experience Altura.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
          Discover the spaces, surroundings and thinking behind a home designed around everyday life.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <button
            onClick={() => onOpenInquiry && onOpenInquiry({ type: "site_visit" })}
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A5E9D] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            SCHEDULE A SITE VISIT →
          </button>

          <button
            onClick={() => onOpenInquiry && onOpenInquiry({ type: "enquire" })}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#0A5E9D] hover:bg-[#084B7E] text-white border border-white/20 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            ENQUIRE NOW →
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisitAltura;
