import photo10 from "../images/photo10.png";

const BackedBy = () => {
    return (
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-9">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-10 text-center text-4xl font-medium text-[#192B3C] sm:mb-16 sm:text-[50px]">
                    Backed by
                </h2>

                <div className="relative overflow-hidden">

                    <img
                        src={photo10}
                        alt="Construction"
                        className="h-[360px] w-full object-cover sm:h-[630px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />

                    <div className="absolute left-10 top-10">

                        <div className="rounded bg-white/80 px-6 py-5 backdrop-blur">

                            <h3 className="text-[28px] font-semibold text-[#192B3C]">
                                DHANESHWAR
                            </h3>

                            <p className="text-[15px] text-[#192B3C]">
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