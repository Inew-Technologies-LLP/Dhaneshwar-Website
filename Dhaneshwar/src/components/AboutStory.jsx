import photo8 from "../images/photo8.png";

const AboutStory = () => {
    return (
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-9">

            <div className="mx-auto max-w-[1440px]">

                <div className="mx-auto max-w-[760px] text-center">

                    <h2 className="text-4xl font-medium text-[#192B3C] sm:text-[50px]">
                        Our Story
                    </h2>

                    <p className="mt-6 text-lg text-[#192B3C] sm:mt-8 sm:text-[22px]">
                        What inspired Dhaneshwar
                    </p>

                    <p className="mt-4 text-base leading-8 text-gray-600 sm:text-[18px] sm:leading-9">
                        The image below will be brand pattern with an image overlay.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et.
                    </p>

                </div>

                <img
                    src={photo8}
                    alt="Our Story"
                    className="mt-10 h-[360px] w-full object-cover sm:mt-16 sm:h-[560px]"
                />

            </div>

        </section>
    );
};

export default AboutStory;