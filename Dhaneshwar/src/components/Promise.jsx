import photo6 from "../images/photo6.png";

const Promise = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-9 lg:py-20">

            <div className="mx-auto grid max-w-[1440px] items-center gap-6 sm:gap-10 lg:gap-12 lg:grid-cols-[1.15fr_1fr]">

                <div className="group overflow-hidden">
                    <img
                        src={photo6}
                        alt="Our Promise"
                        className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[380px] lg:h-[480px]"
                    />
                </div>

                <div>

                    <h2 className="text-2xl font-medium leading-tight text-[#192B3C] sm:text-4xl lg:text-[50px] sm:leading-[58px]">
                        Our Promise
                    </h2>

                    <p className="mt-3 max-w-[520px] text-xs leading-relaxed text-[#2D2D2D] sm:mt-6 sm:text-base sm:leading-8 lg:mt-10 lg:text-[18px] lg:leading-[38px]">
                        We are committed to delivering thoughtfully designed
                        homes with transparency, superior construction quality,
                        and timely execution. Every decision we make is guided
                        by our promise to create spaces that enrich lives and
                        stand the test of time.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default Promise;