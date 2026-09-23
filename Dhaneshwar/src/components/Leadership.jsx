const leaders = [
    {
        name: "Sanket Kute",
        role: "Designated Partner",
        description: "A Civil Engineer with an MSc in Real Estate and 8 years of experience across construction and real estate, bringing together technical understanding and a development-focused perspective.",
    },
    {
        name: "Om Gawade",
        role: "Designated Partner",
        description: "A Civil Engineer with an MSc in Structural Engineering, bringing a strong technical and structural perspective to the planning and development of projects.",
    },
    {
        name: "Aditya Sali",
        role: "Designated Partner",
        description: "A Civil Engineer with an MBA in Marketing and 3 years of professional experience, combining a technical foundation with a market and customer-focused perspective.",
    },
];

const Leadership = () => {
    return (

        <section className="px-3 pb-8 sm:px-6 sm:pb-12 lg:px-9 lg:pb-16">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-6 text-2xl font-medium text-[#192B3C] sm:mb-10 sm:text-4xl lg:text-[50px]">
                    Leadership
                </h2>

                <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">

                    {leaders.map((leader, index) => (

                        <div key={index} className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">

                            <h3 className="text-xl font-medium text-[#192B3C] transition-colors duration-300 group-hover:text-[#B08A1E] sm:text-2xl lg:text-[32px]">
                                {leader.name}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-gray-700 sm:text-lg lg:text-[20px]">
                                {leader.role}
                            </p>

                            <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:mt-3 sm:text-base sm:leading-7 lg:text-[17px]">
                                {leader.description}
                            </p>

                        </div>

                    ))}

                </div>

                {/* Quote Section */}
                <div className="mt-14 sm:mt-20 lg:mt-28 text-center pb-4 sm:pb-8">
                    <blockquote className="text-[17px] sm:text-2xl lg:text-[36px] font-medium leading-tight sm:leading-snug lg:leading-[48px] text-[#192B3C] max-w-5xl mx-auto">
                        <span className="block sm:inline-block">
                            &ldquo;Great structures are built on strong foundations;
                        </span>
                        <span className="block sm:inline-block sm:ml-2 lg:block lg:ml-0 lg:mt-1">
                            great legacies are built by exceptional people.&rdquo;
                        </span>
                    </blockquote>
                </div>

            </div>

        </section>

    );
};

export default Leadership;