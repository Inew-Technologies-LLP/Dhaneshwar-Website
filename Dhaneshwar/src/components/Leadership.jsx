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

        <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-9">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-10 text-4xl font-medium text-[#192B3C] sm:mb-14 sm:text-[50px]">
                    Leadership
                </h2>

                <div className="grid gap-10 lg:grid-cols-3">

                    {leaders.map((leader, index) => (

                        <div key={index}>

                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="h-[380px] w-full object-cover sm:h-[484px]"
                            />

                            <h3 className="mt-6 text-3xl font-medium text-[#192B3C] sm:text-[36px]">
                                {leader.name}
                            </h3>

                            <p className="mt-2 text-[22px] text-gray-700">
                                {leader.role}
                            </p>

                            <p className="mt-5 text-[18px] leading-8 text-gray-600">
                                Description about the person.
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};

export default Leadership;