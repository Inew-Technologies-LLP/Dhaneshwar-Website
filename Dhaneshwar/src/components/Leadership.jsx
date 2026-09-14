import photo11 from "../images/photo11.png";
import photo12 from "../images/photo12.png";
import photo13 from "../images/photo13.png";

const leaders = [
    {
        name: "Name",
        role: "Position",
        image: photo11,
    },
    {
        name: "Name",
        role: "Position",
        image: photo12,
    },
    {
        name: "Name",
        role: "Position",
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

                            <div className="overflow-hidden">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full aspect-[408/488] object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:aspect-auto lg:h-[484px]"
                                />
                            </div>

                            <h3 className="mt-4 text-xl font-medium text-[#192B3C] transition-colors duration-300 group-hover:text-[#B08A1E] sm:mt-6 sm:text-2xl lg:text-[36px]">
                                {leader.name}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-gray-700 sm:text-lg lg:text-[22px]">
                                {leader.role}
                            </p>

                            <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-base sm:leading-8 lg:text-[18px]">
                                Driving innovation and standard-setting in residential architecture and sustainable urban development.
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};

export default Leadership;