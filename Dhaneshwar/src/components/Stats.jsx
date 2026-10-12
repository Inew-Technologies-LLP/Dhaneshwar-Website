import photo5 from "../images/photo5.png";

const Stats = () => {
    return (
        <section className="w-full bg-[#FAF9F6] border-y border-[#192B3C]/5 overflow-hidden">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[600px]">
                
                {/* Left Side: 50% Image */}
                <div className="relative w-full h-[350px] sm:h-[450px] lg:h-auto min-h-full overflow-hidden bg-[#192B3C] group">
                    <img
                        src={photo5}
                        alt="Every Space Begins With Purpose"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Right Side: 50% Content */}
                <div className="flex flex-col justify-center p-6 sm:p-12 lg:p-16 xl:p-20">
                    <div className="max-w-xl">
                        <div className="mb-2">
                            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#B08A1E] uppercase">
                                OUR PHILOSOPHY
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#192B3C] mb-6 tracking-tight leading-tight">
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
        </section>
    );
};

export default Stats;