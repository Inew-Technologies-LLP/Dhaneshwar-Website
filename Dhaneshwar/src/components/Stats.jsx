import photo5 from "../images/photo5.png";

const Stats = () => {
    return (
        <section className="px-3 py-6 sm:px-6 sm:py-10 lg:px-9 lg:py-12">
            <div className="mx-auto max-w-[1440px]">
                <div className="grid overflow-hidden bg-[#FAF9F6] shadow-sm lg:grid-cols-[1.1fr_0.9fr] items-center">
                    
                    {/* Image Column */}
                    <div className="group relative overflow-hidden h-[300px] sm:h-[380px] lg:h-[460px] w-full">
                        <img
                            src={photo5}
                            alt="Every Space Begins With Purpose"
                            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A1E]">
                                OUR PHILOSOPHY
                            </span>

                            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-[46px] font-normal leading-[1.12] text-[#192B3C] font-['Cormorant_Garamond',serif]">
                                Every Space Begins<br />With Purpose.
                            </h2>

                            <div className="mt-5 space-y-3.5 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-700 font-normal">
                                <p>
                                    We believe good development begins with understanding how people will experience a place.
                                </p>
                                <p>
                                    From the way a home is planned to how architecture, nature and shared spaces come together, every decision is made with purpose &mdash; to create environments that are comfortable, meaningful and connected.
                                </p>
                                <p className="font-medium text-[#192B3C]">
                                    That belief guides the places we create.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;