const ArchitectsNote = () => {
  return (
    <section id="architect-note" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] mb-3 tracking-tight">
          Architects Note
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-semibold text-[#1D65AD] mb-4">
          Project Description
        </p>

        {/* Note Body Text */}
        <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 max-w-4xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectsNote;
