import backedby1_img from "../images/backedby_1.png";
import backedby2_img from "../images/backedby_2.png";
import backedby3_img from "../images/backedby_3.png";

const projects = [
    {
        image: backedby1_img,
        title: "Chhatrapati Sambhaji Maharaj Memorial",
        category: "Civil & Cultural Monument Infrastructure",
    },
    {
        image: backedby2_img,
        title: "Flyovers & Elevated Corridor Networks",
        category: "Urban Transportation Engineering",
    },
    {
        image: backedby3_img,
        title: "Cable-Stayed & River Arch Bridges",
        category: "Major Highway Infrastructure",
    },
];

const BackedBy = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-9 lg:py-20">
            <div className="mx-auto max-w-[1480px]">

                {/* Section Header & Narrative */}
                <div className="max-w-4xl mb-10 sm:mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                        Dhaneshwar Construction Pvt. Ltd.
                    </span>
                    <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[46px] leading-tight">
                        Experience That Guides Us.
                    </h2>
                    <div className="mt-4 space-y-3 text-xs sm:text-sm lg:text-[16px] leading-relaxed text-gray-700">
                        <p>
                            Our journey is guided by the experience and mentorship of Dhaneshwar Construction Pvt. Ltd., whose work across civil construction and infrastructure has built a deep understanding of engineering, execution and responsibility.
                        </p>
                        <p>
                            Their experience brings valuable perspective to the way we approach development &mdash; reminding us that lasting places are shaped by sound decisions, disciplined execution and attention to detail.
                        </p>
                    </div>
                </div>

                {/* 3 Projects Grid with Labels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {projects.map((item, index) => (
                        <div key={index} className="group overflow-hidden bg-white shadow-sm flex flex-col transition-all duration-300 hover:shadow-md">
                            {/* Image Container with Portrait Aspect Ratio to Fit Full Image */}
                            <div className="overflow-hidden bg-[#FAF9F6] aspect-[3/4] relative w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between border-b-2 border-transparent transition-colors duration-300 group-hover:border-[#B08A1E]">
                                <div>
                                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#B08A1E]">
                                        {item.category}
                                    </span>
                                    <h4 className="mt-1.5 text-sm sm:text-base lg:text-[18px] font-medium text-[#192B3C]">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BackedBy;