const leaders = [
    {
        name: "Name",
        role: "Position",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
    },
    {
        name: "Name",
        role: "Position",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
    },
    {
        name: "Name",
        role: "Position",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
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
                                className="h-[520px] w-full object-cover"
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