const ArchitectsNote = () => {
  return (
    <section
      id="designed-with-purpose"
      className="py-14 sm:py-20 lg:py-24 bg-[#F2F7FB] border-y border-[#D6E6F5]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Section Heading */}
        <div className="mb-2">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            ARCHITECTURAL PHILOSOPHY
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mb-8 tracking-tight">
          Designed With Purpose.
        </h2>

        {/* Note Body Text */}
        <div className="text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed space-y-5 font-light">
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
        <div className="mt-10 pt-6 border-t border-[#D6E6F5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <p className="text-base sm:text-lg font-medium text-slate-900 tracking-wide">
              — Studio PPBA
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-light">
              Architects for Altura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectsNote;
