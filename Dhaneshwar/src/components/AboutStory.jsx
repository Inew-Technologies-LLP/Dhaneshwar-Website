import about_belief from "../images/about_belief.jpg";
import design from "../images/design.png";

const AboutStory = () => {
    return (
        <section className="px-3 py-8 sm:px-6 sm:py-14 lg:px-9 lg:py-20">
            <div className="mx-auto max-w-[1440px] space-y-16 sm:space-y-24 lg:space-y-32">

                {/* --- 1. OUR STORY --- */}
                <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                            OUR STORY
                        </span>
                        <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[46px] leading-tight">
                            A New Journey, Shaped by Experience.
                        </h2>
                        <div className="mt-5 space-y-4 text-xs sm:text-sm lg:text-[16px] leading-relaxed text-gray-700">
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

                    {/* Editorial Highlight Quote Card */}
                    <div className="relative bg-[#F7F8FA] border-l-4 border-[#B08A1E] p-8 sm:p-12 lg:p-14 shadow-sm">
                        <span className="text-4xl sm:text-6xl text-[#B08A1E]/30 font-serif leading-none select-none block mb-2">&ldquo;</span>
                        <p className="text-base sm:text-xl lg:text-[22px] font-normal leading-snug sm:leading-relaxed text-[#192B3C] italic">
                            From understanding how places are built, to thinking deeply about how they are lived in.
                        </p>
                        <p className="mt-4 text-xs sm:text-sm font-semibold tracking-wider text-[#B08A1E] uppercase">
                            Dhaneshwar Realty
                        </p>
                    </div>
                </div>

                {/* --- 2. OUR BELIEF --- */}
                <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                    {/* Left/Order-1 on desktop: Belief Image */}
                    <div className="group relative overflow-hidden bg-[#192B3C] shadow-sm order-2 lg:order-1">
                        <img
                            src={about_belief}
                            alt="Buildings Create Spaces. Life Gives Them Meaning."
                            className="h-[300px] sm:h-[440px] lg:h-[540px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <img
                            src={design}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-30"
                        />
                    </div>

                    {/* Right/Order-2 on desktop: Belief Content */}
                    <div className="order-1 lg:order-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                            OUR BELIEF
                        </span>
                        <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[44px] leading-tight">
                            Buildings Create Spaces. <br className="hidden sm:inline" />
                            Life Gives Them Meaning.
                        </h2>
                        <div className="mt-5 space-y-4 text-xs sm:text-sm lg:text-[16px] leading-relaxed text-gray-700">
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
        </section>
    );
};

export default AboutStory;