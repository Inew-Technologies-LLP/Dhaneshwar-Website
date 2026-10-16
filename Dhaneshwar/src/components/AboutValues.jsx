import { Eye, Target, HeartHandshake, Compass, ShieldCheck, DraftingCompass, Sparkles } from "lucide-react";

const values = [
    {
        title: "THOUGHTFULNESS",
        desc: "Every decision begins with understanding how it will be experienced.",
        icon: HeartHandshake,
    },
    {
        title: "PURPOSE",
        desc: "Every element should have a reason for being there.",
        icon: Compass,
    },
    {
        title: "RESPONSIBILITY",
        desc: "We consider the impact of what we create today and over time.",
        icon: ShieldCheck,
    },
    {
        title: "CRAFTSMANSHIP",
        desc: "Care in execution is as important as the idea behind it.",
        icon: DraftingCompass,
    },
];

const AboutValues = () => {
    return (
        <section className="w-full bg-[#FAF9F6] border-y border-[#192B3C]/5 px-3 py-12 sm:px-6 sm:py-16 lg:px-9 lg:py-20">
            <div className="mx-auto max-w-[1440px]">

                {/* Vision & Mission Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-[#192B3C]/10">
                    {/* Vision */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#B08A1E]/10 text-[#B08A1E]">
                                <Eye className="w-5 h-5" strokeWidth={1.75} />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A1E]">
                                OUR VISION
                            </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#192B3C]">
                            Vision
                        </h3>
                        <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed text-gray-700 font-normal">
                            Creating environments that help people live better, grow further and contribute positively to their communities.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="space-y-4 md:border-l md:border-[#192B3C]/10 md:pl-12 lg:pl-16">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#B08A1E]/10 text-[#B08A1E]">
                                <Target className="w-5 h-5" strokeWidth={1.75} />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A1E]">
                                OUR MISSION
                            </span>
                        </div>
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
                    <div className="mb-8 sm:mb-12 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#B08A1E]/10 text-[#B08A1E]">
                                <Sparkles className="w-5 h-5" strokeWidth={1.75} />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A1E]">
                                CORE PRINCIPLES
                            </span>
                        </div>
                        <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium text-[#192B3C]">
                            Values
                        </h3>
                    </div>

                    {/* 4 Equal Columns with Icons above the line and in center */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {values.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group text-center"
                                >
                                    {/* Icon above the line and in center */}
                                    <div className="flex justify-center pb-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#192B3C]/5 text-[#B08A1E] transition-all duration-300 group-hover:bg-[#B08A1E] group-hover:text-white group-hover:scale-105 shadow-sm">
                                            <Icon className="w-5 h-5" strokeWidth={1.75} />
                                        </div>
                                    </div>

                                    {/* Line below icon */}
                                    <div className="border-t-2 border-[#192B3C]/10 pt-5 space-y-3 transition-colors duration-300 group-hover:border-[#B08A1E]">
                                        <h4 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#192B3C] tracking-wider uppercase">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutValues;