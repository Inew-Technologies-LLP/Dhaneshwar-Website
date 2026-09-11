const ProjectsHero = () => {
    return (
        <section className="px-9 pt-6">

            <div className="group relative mx-auto h-[440px] max-w-[1440px] overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800"
                    alt="Projects"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/30 to-transparent" />

                <div className="absolute bottom-12 left-12 max-w-[320px]">

                    <h1 className="text-[52px] font-medium text-white">
                        Our Projects
                    </h1>

                    <p className="mt-4 text-[17px] leading-7 text-white">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default ProjectsHero;