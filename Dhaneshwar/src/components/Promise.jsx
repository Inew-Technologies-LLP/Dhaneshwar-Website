import photo6 from "../images/photo6.png";
import design from "../images/design.png";

const Promise = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-9 lg:py-20">

            <div className="mx-auto grid max-w-[1440px] items-center gap-6 sm:gap-10 lg:gap-12 lg:grid-cols-[1.15fr_1fr]">

                <div className="group relative overflow-hidden">
                    <img
                        src={photo6}
                        alt="Our Promise"
                        className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[380px] lg:h-[480px]"
                    />
                    <img
                        src={design}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                    />
                </div>

                <div className="max-w-[760px]">

                    <h2 className="text-3xl font-medium leading-tight text-[#192B3C] sm:text-5xl lg:text-[64px] lg:leading-[1.08]">
                        Our Promise
                    </h2>

                    <p className="mt-8 max-w-[580px] text-xs leading-relaxed text-[#2D2D2D] sm:mt-10 sm:text-base md:text-[17px] md:leading-[28px] lg:mt-14 lg:text-[18px] lg:leading-[30px]">
                        Thoughtful design. Responsible development. Lasting value.
                    </p>

                    <p className="mt-8 max-w-[580px] text-xs leading-relaxed text-[#2D2D2D] sm:mt-10 sm:text-base md:text-[17px] md:leading-[28px] lg:mt-12 lg:text-[18px] lg:leading-[30px]">
                        Our commitment goes beyond constructing buildings. We focus on intelligent planning, dependable execution, quality craftsmanship and transparent relationships, creating spaces designed to serve their communities well for years to come.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default Promise;