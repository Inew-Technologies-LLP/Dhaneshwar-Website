import photo11 from "../images/photo11.png";
import photo12 from "../images/photo12.png";
import photo13 from "../images/photo13.png";
import design from "../images/design.png";

const leaders = [
    {
        name: "Sanket Kute",
        role: "Designated Partner",
        description: "A Civil Engineer with an MSc in Real Estate and 8 years of experience across construction and real estate, bringing together technical understanding and a development-focused perspective.",
        image: photo11,
    },
    {
        name: "Om Gawade",
        role: "Designated Partner",
        description: "A Civil Engineer with an MSc in Structural Engineering, bringing a strong technical and structural perspective to the planning and development of projects.",
        image: photo12,
    },
    {
        name: "Aditya Sali",
        role: "Designated Partner",
        description: "A Civil Engineer with an MBA in Marketing and 3 years of professional experience, combining a technical foundation with a market and customer-focused perspective.",
        image: photo13,
    },
];

const Leadership = () => {
    return (

        <section className="px-3 pb-12 sm:px-6 sm:pb-20 lg:px-9 lg:pb-24">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-6 text-2xl font-medium text-[#192B3C] sm:mb-12 sm:text-4xl lg:text-[50px]">
                    Leadership
                </h2>

                <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">

                    {leaders.map((leader, index) => (

                        <div key={index} className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">

                            <div className="relative overflow-hidden">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full aspect-[408/488] object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:aspect-auto lg:h-[484px]"
                                />
                                <img
                                    src={design}
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                                />
                            </div>

                            <h3 className="mt-4 text-xl font-medium text-[#192B3C] transition-colors duration-300 group-hover:text-[#B08A1E] sm:mt-6 sm:text-2xl lg:text-[36px]">
                                {leader.name}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-gray-700 sm:text-lg lg:text-[22px]">
                                {leader.role}
                            </p>

                            <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:text-[18px]">
                                {leader.description}
                            </p>

                        </div>

                    ))}

                </div>

                {/* Vision, Mission & Values */}
                <div className="mt-16 sm:mt-24 space-y-10 sm:space-y-14">

                    <div>
                        <h2 className="text-2xl font-semibold text-[#192B3C] sm:text-3xl lg:text-[40px]">
                            Vision
                        </h2>
                        <p className="mt-3 text-lg font-medium text-[#192B3C] sm:text-xl lg:text-[26px] lg:leading-snug max-w-4xl">
                            Creating environments that help people live better, grow further and contribute positively to their communities.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#192B3C] sm:text-3xl lg:text-[40px]">
                            Mission
                        </h2>
                        <p className="mt-3 text-lg font-medium text-[#192B3C] sm:text-xl lg:text-[26px] lg:leading-snug max-w-5xl">
                            Creating purposeful places where architecture, functionality, nature and craftsmanship come together to elevate everyday life.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#192B3C] sm:text-3xl lg:text-[40px]">
                            Values
                        </h2>
                        <p className="mt-3 text-lg font-medium text-[#192B3C] sm:text-xl lg:text-[26px]">
                            Thoughtfulness · Purpose · Responsibility · Craftsmanship
                        </p>
                    </div>

                </div>

            </div>

        </section>

    );
};

export default Leadership;