import streetPhoto from "../images/webp gallary/04_Altura.webp";

const ArchitectsNote = () => {
  return (
    <section
      id="designed-with-purpose"
      className="bg-[#F2F7FB] border-y border-[#D6E6F5] overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[600px]">
        {/* Left Side: 50% Image */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-auto min-h-full overflow-hidden">
          <img
            src={streetPhoto}
            alt="Altura Architectural Render"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 90%" }}
          />
        </div>

        {/* Right Side: 50% Text Content */}
        <div className="flex flex-col justify-center p-6 sm:p-12 lg:p-16 xl:p-20">
          <div className="max-w-xl">
            {/* Main Section Heading */}
            <div className="mb-2">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
                ARCHITECTURAL PHILOSOPHY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
              Designed With Purpose.
            </h2>

            {/* Note Body Text */}
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-light">
              <p>
                Altura was approached with the belief that good architecture should do more than create a striking form — it should improve the experience of living within it.
              </p>
              <p>
                The design focuses on balancing light, openness, privacy and functionality, while creating a strong relationship between the homes, shared spaces and the outdoors. The building’s proportions, balconies, openings and landscaped elements have been considered together to give Altura its distinct architectural character.
              </p>
              <p>
                The result is an architecture that is contemporary without being excessive — thoughtful in its planning, purposeful in its expression and designed to remain relevant over time.
              </p>
            </div>

            {/* Architect Signature */}
            <div className="mt-8 pt-6 border-t border-[#D6E6F5]">
              <p className="text-base sm:text-lg font-medium text-slate-900 tracking-wide">
                — Studio PPBA
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-light">
                Architects for Altura
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectsNote;
