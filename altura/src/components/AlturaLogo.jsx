const AlturaLogo = ({ className = "", textClassName = "" }) => {
  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      {/* ALTURA Text */}
      <span className={`text-2xl sm:text-3xl font-serif tracking-[0.2em] font-medium text-[#1A3561] relative z-10 ${textClassName}`}>
        ALTURA
      </span>

      {/* Decorative Wave Line SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -10 22 C 25 32, 55 8, 90 24 C 125 38, 145 10, 170 18"
          stroke="#1A3561"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default AlturaLogo;
