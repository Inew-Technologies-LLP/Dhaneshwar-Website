import photo9 from "../images/photo9.png";

const stats = [
    "50+",
    "50+",
    "50+",
    "50+",
];

const AboutValues = () => {
    return (

        <section className="px-3 pb-12 sm:px-6 sm:pb-20 lg:px-9 lg:pb-24">

            <div className="group relative mx-auto h-[520px] sm:h-[660px] lg:h-[828px] max-w-[1440px] overflow-hidden">

                <img
                    src={photo9}
                    alt="Values and Vision"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient overlays for dual contrast: top light and bottom dark */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#192B3C] via-[#192B3C]/30" />

                {/* Top Left */}

                <div className="absolute left-4 top-6 max-w-[calc(100%-2rem)] sm:left-10 sm:top-10 lg:left-12 sm:max-w-xl">

                    <h2 className="text-xl sm:text-3xl lg:text-[48px] font-medium leading-snug text-[#192B3C]">
                        Values vision and mission of the company
                    </h2>

                    <p className="mt-2 text-sm sm:text-lg lg:text-[22px] font-medium text-[#192B3C]/80">
                        Brand pillars
                    </p>

                </div>

                {/* Bottom Stats */}

                <div className="absolute bottom-6 left-0 right-0 grid grid-cols-2 gap-y-4 px-5 sm:bottom-12 sm:grid-cols-4 sm:gap-y-0 sm:px-10 lg:px-16">

                    {stats.map((item, index) => (

                        <div key={index}>

                            <h3 className="text-3xl font-light text-white sm:text-5xl lg:text-[60px] leading-none">
                                {item}
                            </h3>

                            <p className="mt-1 text-xs text-white/90 sm:mt-2 sm:text-base lg:text-[22px]">
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