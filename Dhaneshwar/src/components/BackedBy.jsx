import photo10 from "../images/photo10.png";

const BackedBy = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-9">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-6 text-center text-2xl font-medium text-[#192B3C] sm:mb-12 sm:text-4xl lg:text-[50px]">
                    Backed by
                </h2>

                <div className="relative overflow-hidden">

                    <img
                        src={photo10}
                        alt="Dhaneshwar Construction"
                        className="h-[240px] w-full object-cover sm:h-[450px] lg:h-[630px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 sm:left-10 sm:top-10">

                        <div className="rounded bg-white/85 px-4 py-3 backdrop-blur shadow-sm sm:px-6 sm:py-5">

                            <h3 className="text-base font-semibold text-[#192B3C] sm:text-2xl lg:text-[28px] leading-tight">
                                DHANESHWAR
                            </h3>

                            <p className="mt-0.5 text-xs text-[#192B3C]/80 sm:mt-1 sm:text-sm lg:text-[15px] tracking-wider">
                                CONSTRUCTION PVT LTD
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BackedBy;