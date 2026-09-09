import photo6 from "../images/photo6.png";

const Promise = () => {
    return (
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-9">

            <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[1.15fr_1fr]">

                <img
                    src={photo6}
                    alt="Our Promise"
                    className="h-[480px] w-full object-cover"
                />

                <div>

                    <h2 className="text-4xl font-medium leading-tight text-[#192B3C] sm:text-[50px] sm:leading-[58px]">
                        Our Promise
                    </h2>

                    <p className="mt-6 max-w-[520px] text-base leading-8 text-[#2D2D2D] sm:mt-10 sm:text-[18px] sm:leading-[38px]">
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