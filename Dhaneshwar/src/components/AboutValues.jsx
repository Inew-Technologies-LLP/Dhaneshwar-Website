const values = [
    {
        title: "THOUGHTFULNESS",
        desc: "Every decision begins with understanding how it will be experienced.",
    },
    {
        title: "PURPOSE",
        desc: "Every element should have a reason for being there.",
    },
    {
        title: "RESPONSIBILITY",
        desc: "We consider the impact of what we create today and over time.",
    },
    {
        title: "CRAFTSMANSHIP",
        desc: "Care in execution is as important as the idea behind it.",
    },
];

const AboutValues = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-9 lg:py-20 bg-[#F7F8FA]">
            <div className="mx-auto max-w-[1440px]">

                {/* Vision & Mission Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-gray-200">
                    {/* Vision */}
                    <div className="space-y-3 sm:space-y-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                            OUR VISION
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#192B3C]">
                            Vision
                        </h3>
                        <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-gray-700 font-normal">
                            Creating environments that help people live better, grow further and contribute positively to their communities.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="space-y-3 sm:space-y-4 md:border-l md:border-gray-200 md:pl-12 lg:pl-16">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                            OUR MISSION
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#192B3C]">
                            Mission
                        </h3>
                        <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-gray-700 font-normal">
                            Designing purposeful places where architecture, functionality, nature and craftsmanship come together to elevate everyday life.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="pt-12 sm:pt-16">
                    <div className="mb-8 sm:mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                            CORE PRINCIPLES
                        </span>
                        <h3 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-medium text-[#192B3C]">
                            Values
                        </h3>
                    </div>

                    {/* 4 Equal Columns without numbering */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {values.map((item, index) => (
                            <div key={index} className="space-y-2 border-t-2 border-[#192B3C]/10 pt-4 transition-all duration-300 hover:border-[#B08A1E]">
                                <h4 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#192B3C] tracking-wider uppercase">
                                    {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
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

export default AboutValues;