import photo6 from "../images/photo6_hd.png";
import { Leaf, Building2, Gem } from "lucide-react";

const principles = [
    {
        icon: Leaf,
        title: "THOUGHTFUL DESIGN",
        desc: "Considered around the way people live.",
    },
    {
        icon: Building2,
        title: "RESPONSIBLE DEVELOPMENT",
        desc: "Decisions made with tomorrow in mind.",
    },
    {
        icon: Gem,
        title: "ENDURING CRAFTSMANSHIP",
        desc: "Quality intended to stand the test of time.",
    },
];

const Promise = () => {
    return (
        <section className="w-full relative overflow-hidden">
            {/* --- 1. FULL-WIDTH HERO IMAGE CONTAINER WITH OVERLAID TEXT --- */}
            <div className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[800px] flex flex-col justify-between py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
                {/* Background Image */}
                <img
                    src={photo6}
                    alt="Our Promise - What We Create Should Endure"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Refined Multi-Stop Vignette / Gradient Overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/90 via-[#FAF9F6]/60 to-[#101E2B]/90" />

                {/* Top/Center Text Content */}
                <div className="relative z-10 max-w-3xl mx-auto text-center pt-2 sm:pt-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#B08A1E] uppercase">
                        OUR PROMISE
                    </span>

                    <h2 className="mt-2.5 text-2xl sm:text-4xl lg:text-[46px] font-medium leading-tight text-[#192B3C] tracking-tight">
                        What We Create Should Endure.
                    </h2>

                    <div className="mt-5 sm:mt-6 space-y-3.5 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-700 font-normal max-w-2xl mx-auto">
                        <p>
                            Our responsibility goes beyond completing a development. It is about creating places that remain meaningful to the people who live there and valuable to the communities they become part of.
                        </p>
                        <p>
                            That means approaching every project with thoughtful design, responsible decisions and enduring craftsmanship &mdash; creating places made not just for today, but for the years ahead.
                        </p>
                    </div>
                </div>

                {/* Bottom 3 Principles Across 3 Columns with Gold Dividers */}
                <div className="relative z-10 max-w-5xl mx-auto w-full mt-14 sm:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center text-center">
                        {principles.map((item, idx) => {
                            const IconComponent = item.icon;
                            const isLast = idx === principles.length - 1;
                            return (
                                <div
                                    key={idx}
                                    className={`px-4 sm:px-6 flex flex-col items-center ${
                                        !isLast ? "md:border-r md:border-[#B08A1E]/50" : ""
                                    }`}
                                >
                                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#B08A1E] stroke-[1.5]" />
                                    <h3 className="mt-3 text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase">
                                        {item.title}
                                    </h3>
                                    <div className="h-[1px] w-7 bg-[#B08A1E] my-2 sm:my-2.5" />
                                    <p className="text-xs sm:text-sm text-white/85 font-normal max-w-xs leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* --- 2. CLOSING STATEMENT BANNER ON GOLDEN BG --- */}
            <div className="w-full bg-[#FAF9F6] border-y border-[#192B3C]/5 py-12 sm:py-16 lg:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
                <div className="mx-auto max-w-3xl relative z-10">
                    <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal leading-relaxed text-[#192B3C] italic">
                        Every space we create is an opportunity to improve the way people live, grow and connect.
                    </blockquote>
                    <div className="h-[1px] w-12 bg-[#B08A1E] mx-auto mt-4 sm:mt-5" />
                </div>
            </div>
        </section>
    );
};

export default Promise;