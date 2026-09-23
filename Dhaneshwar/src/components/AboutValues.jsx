import photo9 from "../images/photo9.png";

const AboutValues = () => {
    return (
        <section className="px-3 pb-0 sm:px-6 sm:pb-0 lg:px-9 lg:pb-0">
            <div className="mx-auto max-w-[1440px]">
                <div className="group relative overflow-hidden">
                    {/* Full Background Image */}
                    <img
                        src={photo9}
                        alt="Values and Vision"
                        className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center sm:px-8 lg:px-12 -translate-y-4 sm:-translate-y-6 lg:-translate-y-10">
                        <div className="max-w-3xl space-y-4 sm:space-y-6 lg:space-y-8">
                            {/* Vision */}
                            <div>
                                <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-black mb-1 sm:mb-2">
                                    Vision
                                </h3>
                                <p className="text-base sm:text-xl lg:text-[24px] font-normal leading-relaxed text-black max-w-2xl mx-auto">
                                    Creating environments that help people live better, grow further and contribute positively to their communities.
                                </p>
                            </div>

                            {/* Mission */}
                            <div>
                                <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-black mb-1 sm:mb-2">
                                    Mission
                                </h3>
                                <p className="text-base sm:text-xl lg:text-[24px] font-normal leading-relaxed text-black max-w-2xl mx-auto">
                                    Creating purposeful places where architecture, functionality, nature and craftsmanship come together to elevate everyday life.
                                </p>
                            </div>

                            {/* Values */}
                            <div>
                                <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-white mb-1 sm:mb-2">
                                    Values
                                </h3>
                                <p className="text-xs sm:text-lg lg:text-[24px] font-normal text-white whitespace-nowrap">
                                    Thoughtfulness • Purpose • Responsibility • Craftsmanship
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutValues;