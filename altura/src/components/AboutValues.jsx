const stats = [
    "50+",
    "50+",
    "50+",
    "50+",
];

const AboutValues = () => {
    return (

        <section className="px-9 pb-24">

            <div className="relative mx-auto h-[620px] max-w-[1440px] overflow-hidden">

                <img
                    // src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1800"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/20 to-transparent" />

                {/* Top Left */}

                <div className="absolute left-12 top-10 max-w-[340px]">

                    <h2 className="text-[48px] font-medium text-[#192B3C]">
                        Values vision and mission of the company
                    </h2>

                    <p className="mt-3 text-[22px] text-[#192B3C]">
                        Brand pillars
                    </p>

                </div>

                {/* Bottom Stats */}

                <div className="absolute bottom-12 left-0 right-0 grid grid-cols-4 px-16">

                    {stats.map((item, index) => (

                        <div key={index}>

                            <h3 className="text-[60px] font-light text-white">
                                {item}
                            </h3>

                            <p className="text-[22px] text-white">
                                trusted brands
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};

export default AboutValues;