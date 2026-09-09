import photo9 from "../images/photo9.png";

const stats = [
    "50+",
    "50+",
    "50+",
    "50+",
];

const AboutValues = () => {
    return (

        <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-9">

            <div className="relative mx-auto h-[680px] max-w-[1440px] overflow-hidden sm:h-[760px] lg:h-[828px]">

                <img
                    src={photo9}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/20 to-transparent" />

                {/* Top Left */}

                <div className="absolute left-5 top-8 max-w-[calc(100%-2.5rem)] sm:left-10 sm:top-10 lg:left-12">

                    <h2 className="text-4xl font-medium text-[#192B3C] sm:text-[48px]">
                        Values vision and mission of the company
                    </h2>

                    <p className="mt-3 text-lg text-[#192B3C] sm:text-[22px]">
                        Brand pillars
                    </p>

                </div>

                {/* Bottom Stats */}

                <div className="absolute bottom-8 left-0 right-0 grid grid-cols-2 gap-y-6 px-6 sm:bottom-12 sm:grid-cols-4 sm:gap-y-0 sm:px-10 lg:px-16">

                    {stats.map((item, index) => (

                        <div key={index}>

                            <h3 className="text-4xl font-light text-white sm:text-[60px]">
                                {item}
                            </h3>

                            <p className="text-base text-white sm:text-[22px]">
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