import photo3 from "../images/photo3.png";
import design from "../images/design.png";

const highlights = [
    {
        title: "2 & 3 BHK + DUPLEX",
        subtitle: "Thoughtfully Planned Homes",
    },
    {
        title: "65 HOMES",
        subtitle: "A More Intimate Community",
    },
    {
        title: "G + 14",
        subtitle: "Residential Development",
    },
    {
        title: "DUDULGAON",
        subtitle: "Pune",
    },
];

const ExploreAltura = () => {
    return (
        <section className="px-3 py-6 sm:px-6 sm:py-10 lg:px-9 lg:py-14">
            <div className="mx-auto max-w-[1440px]">
                {/* Main Card */}
                <div className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Left: Image */}
                    <div className="group relative overflow-hidden bg-[#192B3C]">
                        <img
                            src={photo3}
                            alt="Altura - Dudulgaon, Pune"
                            className="w-full aspect-[4/5] sm:aspect-auto sm:h-[480px] lg:h-[620px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <img
                            src={design}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-40"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/70 to-transparent px-4 py-4 text-white sm:px-8 sm:py-6">
                            <span className="text-xs uppercase tracking-widest text-[#BFECE8] font-medium">Featured Development</span>
                            <h3 className="text-2xl font-medium sm:text-3xl lg:text-4xl text-white">Altura</h3>
                            <p className="text-xs sm:text-sm text-white/80">Dudulgaon, Pune &bull; Ongoing</p>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-between px-5 py-8 sm:px-10 sm:py-12 lg:px-12">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                                Explore Altura
                            </span>
                            <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[44px] leading-tight">
                                Altura
                            </h2>
                            <p className="mt-1 text-sm font-medium text-[#192B3C]/70 sm:text-base">
                                The Sky Belongs to All.
                            </p>

                            <div className="mt-5 space-y-3.5 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-700 sm:mt-6">
                                <p>
                                    Set in Dudulgaon, Altura brings together contemporary architecture, thoughtfully planned homes and meaningful shared spaces to create a more considered way of living.
                                </p>
                                <p>
                                    With 2 &amp; 3 BHK residences and select 3 BHK duplex homes, it is a place designed to live well, grow together and belong.
                                </p>
                            </div>

                            <div className="mt-7 sm:mt-8">
                                <a
                                    href="https://altura.dhaneshwarrealty.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#B08A1E] px-6 py-3 text-xs sm:text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-[#997415] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <span>EXPLORE ALTURA</span>
                                    <span className="text-base leading-none">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Highlights Grid */}
                        <div className="mt-8 pt-6 border-t border-gray-100 sm:mt-10 sm:pt-8 grid grid-cols-2 gap-4 sm:gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#192B3C] tracking-wide">
                                        {item.title}
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-gray-500 font-normal">
                                        {item.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreAltura;
