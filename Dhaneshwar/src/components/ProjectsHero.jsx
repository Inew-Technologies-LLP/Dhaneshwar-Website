import design from "../images/design.png";

const ProjectsHero = () => {
    return (
        <section className="px-3 pt-3 sm:px-6 sm:pt-6 lg:px-9">

            <div className="group relative mx-auto h-[360px] sm:h-[440px] max-w-[1440px] overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800"
                    alt="Projects"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/40 to-transparent" />

                <img
                    src={design}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                />

                <div className="absolute bottom-6 left-4 right-4 max-w-md sm:bottom-10 sm:left-10 sm:right-auto lg:bottom-12 lg:left-12">

                    <h1 className="text-2xl font-medium leading-tight text-white sm:text-4xl lg:text-[52px]">
                        Our Projects
                    </h1>

                    <p className="mt-2 text-xs leading-relaxed text-white/90 sm:mt-4 sm:text-base sm:leading-7 lg:text-[17px]">
                        Thoughtfully curated developments built for excellence, offering modern architecture, prime connectivity, and superior living experiences.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default ProjectsHero;