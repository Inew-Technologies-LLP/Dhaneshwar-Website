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

        <section className="px-9 pb-24">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-14 text-[50px] font-medium text-[#192B3C]">
                    Leadership
                </h2>

                <div className="grid gap-10 lg:grid-cols-3">

                    {leaders.map((leader, index) => (

                        <div key={index}>

                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="h-[484px] w-full object-cover"
                            />

                            <h3 className="mt-6 text-[36px] font-medium text-[#192B3C]">
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