import photo8 from "../images/photo8.png";

const AboutStory = () => {
    return (
        <section className="px-9 py-24">

            <div className="mx-auto max-w-[1440px]">

                <div className="mx-auto max-w-[760px] text-center">

                    <h2 className="text-[50px] font-medium text-[#192B3C]">
                        Our Story
                    </h2>

                    <p className="mt-8 text-[22px] text-[#192B3C]">
                        What inspired Dhaneshwar
                    </p>

                    <p className="mt-4 text-[18px] leading-9 text-gray-600">
                        The image below will be brand pattern with an image overlay.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et.
                    </p>

                </div>

                <img
                    src={photo8}
                    alt="Our Story"
                    className="mt-16 h-[560px] w-full object-cover"
                />

            </div>

        </section>
    );
};

export default AboutStory;