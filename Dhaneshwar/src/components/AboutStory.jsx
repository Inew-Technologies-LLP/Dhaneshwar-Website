import photo8 from "../images/photo8.png";

const AboutStory = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-9">

            <div className="mx-auto max-w-[1440px]">

                <div className="mx-auto max-w-[760px] text-center">

                    <h2 className="text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[50px]">
                        Our Story
                    </h2>

                    <p className="mt-3 text-base font-medium text-[#192B3C] sm:mt-6 sm:text-xl lg:text-[22px]">
                        What inspired Dhaneshwar
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-base sm:leading-8 lg:text-[18px] lg:leading-9">
                        Driven by a dedication to architectural purity, structural integrity, and thoughtful design, Dhaneshwar builds spaces that stand out as enduring landmarks.
                    </p>

                </div>

                <div className="group overflow-hidden mt-6 sm:mt-12 lg:mt-16">
                    <img
                        src={photo8}
                        alt="Our Story"
                        className="h-[200px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[360px] lg:h-[560px]"
                    />
                </div>

            </div>

        </section>
    );
};

export default AboutStory;