import about_belief from "../images/about_belief.jpg";
import design from "../images/design.png";

const AboutStory = () => {
    return (
        <>
            {/* --- 1. OUR STORY --- */}
            <section className="px-3 pt-10 pb-4 sm:px-6 sm:pt-16 sm:pb-6 lg:px-9 lg:pt-20 lg:pb-8">
                <div className="mx-auto max-w-[1440px]">
                    <div className="w-full">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A1E]">
                            OUR STORY
                        </span>
                        <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[46px] leading-tight">
                            A New Journey, Shaped by Experience.
                        </h2>
                        <div className="mt-6 space-y-4 text-sm sm:text-base lg:text-[17px] leading-relaxed text-gray-700">
                            <p>
                                Dhaneshwar Realty began with an ambition to take our understanding of the built environment in a new direction &mdash; from creating structures to creating places where life unfolds.
                            </p>
                            <p>
                                Guided by years of exposure to construction, engineering and project execution, we saw an opportunity to approach real estate with a broader perspective. One that considers not only what we build, but how thoughtfully it is planned, how responsibly it is created and how it will be experienced by the people who call it home.
                            </p>
                            <p>
                                That thinking led to Dhaneshwar Realty &mdash; bringing together a new generation of ideas with the experience and discipline that have shaped us.
                            </p>
                            <p>
                                As we build our own journey in real estate, our focus remains simple: to create places that contribute meaningfully to the lives of the people and communities they become part of.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Quote Box (Centered, sized to text width) --- */}
            <section className="px-4 pt-2 pb-8 sm:pt-3 sm:pb-12 lg:pt-4 lg:pb-14">
                <div className="mx-auto w-fit max-w-4xl bg-[#FAF9F6] border border-[#192B3C]/10 rounded-sm px-6 py-6 sm:px-10 sm:py-8 text-center shadow-xs">
                    <blockquote className="text-lg sm:text-2xl lg:text-[26px] font-normal leading-relaxed text-[#192B3C] italic">
                        From understanding how places are built, to thinking deeply about how they are lived in.
                    </blockquote>
                </div>
            </section>

            {/* --- 2. OUR BELIEF (Contained Card) --- */}
            <section className="px-3 py-8 sm:px-6 sm:py-12 lg:px-9 lg:py-16">
                <div className="mx-auto max-w-[1440px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FAF9F6] border border-[#192B3C]/10 rounded-sm overflow-hidden shadow-sm items-stretch">
                        {/* Left Side: Image */}
                        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-auto min-h-[360px] lg:min-h-[520px] overflow-hidden bg-[#192B3C] group">
                            <img
                                src={about_belief}
                                alt="Buildings Create Spaces. Life Gives Them Meaning."
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <img
                                src={design}
                                alt=""
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-30"
                            />
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14 xl:p-16">
                            <div className="max-w-xl">
                                {/* Main Section Heading */}
                                <div className="mb-2">
                                    <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B08A1E] uppercase">
                                        OUR BELIEF
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#192B3C] mb-6 tracking-tight leading-tight">
                                    Buildings Create Spaces. <br className="hidden sm:inline" />
                                    Life Gives Them Meaning.
                                </h2>

                                {/* Note Body Text */}
                                <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                                    <p>
                                        A building becomes more than concrete, steel and glass when people begin to make it their own.
                                    </p>
                                    <p>
                                        It becomes the setting for everyday routines, conversations, celebrations and memories. That is why we think beyond the structure itself &mdash; considering how the places we create can encourage connection, well-being and a stronger sense of belonging.
                                    </p>
                                    <p className="font-medium text-[#192B3C]">
                                        Because ultimately, the value of a place is not only in how it is built, but in the life it enables.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutStory;