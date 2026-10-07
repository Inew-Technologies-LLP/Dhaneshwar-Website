import photo6 from "../images/photo6.png";
import design from "../images/design.png";

const principles = [
    {
        title: "THOUGHTFUL DESIGN",
        desc: "Considered around the way people live.",
    },
    {
        title: "RESPONSIBLE DEVELOPMENT",
        desc: "Decisions made with tomorrow in mind.",
    },
    {
        title: "ENDURING CRAFTSMANSHIP",
        desc: "Quality intended to stand the test of time.",
    },
];

const Promise = () => {
    return (
        <section className="px-3 py-6 sm:px-6 sm:py-10 lg:px-9 lg:py-14">
            <div className="mx-auto grid max-w-[1440px] items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1fr]">
                {/* Image */}
                <div className="group relative overflow-hidden bg-[#192B3C] shadow-sm">
                    <img
                        src={photo6}
                        alt="Our Promise"
                        className="h-[300px] sm:h-[420px] lg:h-[540px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <img
                        src={design}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-40"
                    />
                </div>

                {/* Content */}
                <div className="max-w-[680px]">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                        OUR PROMISE
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[44px] font-medium leading-tight text-[#192B3C]">
                        What We Create Should Endure.
                    </h2>

                    <div className="mt-4 sm:mt-5 space-y-3 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-700">
                        <p>
                            Our responsibility goes beyond completing a development. It is about creating places that remain meaningful to the people who live there and valuable to the communities they become part of.
                        </p>
                        <p>
                            That means approaching every project with thoughtful design, responsible decisions and enduring craftsmanship &mdash; creating places made not just for today, but for the years ahead.
                        </p>
                    </div>

                    {/* Three Principles */}
                    <div className="mt-6 pt-6 border-t border-gray-200 sm:mt-8 sm:pt-8 space-y-4">
                        {principles.map((item, idx) => (
                            <div key={idx} className="border-l-2 border-[#B08A1E] pl-4">
                                <h3 className="text-xs sm:text-sm lg:text-[14px] font-bold text-[#192B3C] tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 font-normal mt-0.5">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promise;