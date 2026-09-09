import photo6 from "../images/photo6.png";

const Promise = () => {
    return (
        <section className="px-9 py-16">

            <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[1.15fr_1fr]">

                <img
                    src={photo6}
                    alt="Our Promise"
                    className="h-[480px] w-full object-cover"
                />

                <div>

                    <h2 className="text-[50px] font-medium leading-[58px] text-[#192B3C]">
                        Our Promise
                    </h2>

                    <p className="mt-10 max-w-[520px] text-[18px] leading-[38px] text-[#2D2D2D]">
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