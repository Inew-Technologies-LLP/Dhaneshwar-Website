import photo8 from "../images/photo8.png";
import design from "../images/design.png";

const AboutStory = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-9">

            <div className="mx-auto max-w-[1440px]">

                <div className="mx-auto max-w-[760px] text-center">

                    <h2 className="text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[50px]">
                        Our Story
                    </h2>

                    <p className="mt-3 text-base font-normal text-[#192B3C] sm:mt-6 sm:text-xl lg:text-[22px]">
                        Inspired by the way spaces shape our lives.
                    </p>

                    <p className="mt-2 text-xs leading-snug text-gray-600 sm:mt-4 sm:text-base sm:leading-6 lg:text-[18px] lg:leading-7">
                        Dhaneshwar Realty began with a belief that the places we live in influence how we feel, connect and grow. Inspired by this, we set out to create environments where thoughtful design, nature and everyday functionality come together to make life more fulfilling.
                    </p>

                </div>

                <div className="group relative overflow-hidden mt-6 sm:mt-12 lg:mt-16">
                    <img
                        src={photo8}
                        alt="Our Story"
                        className="h-[200px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[360px] lg:h-[560px]"
                    />
                    <img
                        src={design}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                    />
                </div>

            </div>

        </section>
    );
};

export default AboutStory;