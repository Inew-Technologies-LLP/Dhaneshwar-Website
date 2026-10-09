const leaders = [
    {
        name: "Sanket Kute",
        role: "Designated Partner",
        description:
            "A Civil Engineer with an MSc in Real Estate from Nottingham Trent University, United Kingdom, Sanket brings together technical understanding with a development-focused perspective. His experience across construction and real estate shapes his approach to project planning, development strategy, feasibility and execution. At Dhaneshwar Realty, he focuses on bringing together the different aspects of a development — from its initial potential and planning to the experience ultimately created for its residents.",
    },
    {
        name: "Om Gawade",
        role: "Designated Partner",
        description:
            "A Civil Engineer with an MSc in Structural Engineering from University of Manchester, United Kingdom, Om brings a strong technical perspective to Dhaneshwar Realty. His understanding of structures and construction informs his involvement in technical planning, design coordination and project execution, with an emphasis on ensuring that design intent is supported by practical and considered engineering decisions.",
    },
    {
        name: "Aditya Sali",
        role: "Designated Partner",
        description:
            "A Civil Engineer with an MBA in Marketing from Symbiosis University, Aditya combines a technical understanding of development with a strong perspective on markets, customers and communication. At Dhaneshwar Realty, his approach helps connect the development process with how projects are positioned, communicated and experienced by homebuyers, ensuring that what is created remains relevant to the people it is designed for.",
    },
];

const Leadership = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-9 lg:py-20">
            <div className="mx-auto max-w-[1440px]">

                {/* Section Header */}
                <div className="max-w-3xl mb-10 sm:mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                        LEADERSHIP
                    </span>
                    <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[46px] leading-tight">
                        The People Behind Dhaneshwar Realty.
                    </h2>
                    <p className="mt-3 text-sm sm:text-base lg:text-[17px] leading-relaxed text-gray-700">
                        Three perspectives, brought together by a shared approach to thoughtful development and a commitment to building Dhaneshwar Realty for the long term.
                    </p>
                </div>

                {/* 3 Leaders Grid */}
                <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">
                    {leaders.map((leader, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 sm:p-8 border-t-2 border-[#192B3C]/15 shadow-sm transition-all duration-300 hover:border-[#B08A1E] hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-medium text-[#192B3C]">
                                    {leader.name}
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#B08A1E]">
                                    {leader.role}
                                </p>
                                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                                    {leader.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Statement Banner */}
                <div className="mt-16 sm:mt-24 bg-[#192B3C] text-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden">
                    <span className="text-xs uppercase tracking-widest text-[#BFECE8] font-semibold block mb-3">
                        OUR COMMITMENT
                    </span>
                    <blockquote className="text-lg sm:text-2xl lg:text-[34px] font-light leading-snug sm:leading-relaxed max-w-4xl mx-auto">
                        &ldquo;Every space we create is an opportunity to improve the way people <span className="font-medium text-[#BFECE8] italic">live, grow and connect</span>.&rdquo;
                    </blockquote>
                </div>

            </div>
        </section>
    );
};

export default Leadership;