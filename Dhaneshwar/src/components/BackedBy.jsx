const BackedBy = () => {
    return (
        <section className="px-9 py-24">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-16 text-center text-[50px] font-medium text-[#192B3C]">
                    Backed by
                </h2>

                <div className="relative overflow-hidden">

                    <img
                    //     src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1800"
                        alt="Construction"
                        className="h-[520px] w-full object-cover"
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