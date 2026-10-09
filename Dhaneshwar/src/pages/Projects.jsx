import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import projects from "../data/projects";
import photo3 from "../images/photo3.png";
import design from "../images/design.png";

const Projects = () => {
    const [searchParams] = useSearchParams();
    const selectedProjectId = searchParams.get("project");

    useEffect(() => {
        if (!selectedProjectId) return;
        const projectElement = document.getElementById(`project-${selectedProjectId}`);
        if (projectElement) {
            const header = document.querySelector("header");
            const headerHeight = header?.getBoundingClientRect().height ?? 0;
            const targetTop = window.scrollY + projectElement.getBoundingClientRect().top;
            window.scrollTo({
                top: Math.max(0, targetTop - headerHeight - 20),
                behavior: "smooth",
            });
        }
    }, [selectedProjectId]);

    return (
        <Layout>
            {/* Page Hero */}
            <PageHero
                title="Places Taking Shape."
                description="A growing portfolio shaped by thoughtful planning, considered design and the way people experience the places they call home."
                image={photo3}
                height="h-[480px] sm:h-[600px] lg:h-[700px]"
            />

            {/* Projects List Section */}
            <section className="px-3 py-10 sm:px-6 sm:py-16 lg:px-9 lg:py-20">
                <div className="mx-auto max-w-[1440px] space-y-12 sm:space-y-16 lg:space-y-20">

                    {/* 1. Altura (Featured Development) */}
                    <article
                        id="project-1"
                        className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-[1.15fr_0.85fr]"
                    >
                        {/* Image */}
                        <div className="group relative overflow-hidden bg-[#192B3C]">
                            <img
                                src={projects[0].image}
                                alt="Altura"
                                className="w-full aspect-[4/5] sm:aspect-auto sm:h-[480px] lg:h-[620px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <img
                                src={design}
                                alt=""
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-40"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/70 to-transparent px-4 py-4 text-white sm:px-8 sm:py-6">
                                <span className="text-xs uppercase tracking-widest text-[#BFECE8] font-medium">Featured Development</span>
                                <h3 className="text-2xl font-medium sm:text-3xl lg:text-4xl text-white">Altura</h3>
                                <p className="text-xs sm:text-sm text-white/80">Dudulgaon, Pune &bull; Ongoing</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between px-5 py-8 sm:px-10 sm:py-12 lg:px-12">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                                    FEATURED DEVELOPMENT
                                </span>
                                <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[44px] leading-tight">
                                    Altura
                                </h2>
                                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                                    Dudulgaon, Pune - Ongoing
                                </p>
                                <p className="mt-2 text-base font-medium text-[#192B3C]">
                                    The Sky Belongs to All.
                                </p>

                                <div className="mt-4 space-y-3 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-700">
                                    <p>
                                        A thoughtfully planned residential development bringing together contemporary architecture, well-designed homes and meaningful shared spaces to create a more considered way of living.
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <a
                                        href="https://altura.dhaneshwarrealty.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#B08A1E] px-6 py-3 text-xs sm:text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-[#997415] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        <span>VISIT ALTURA WEBSITE</span>
                                        <span className="text-base leading-none">&rarr;</span>
                                    </a>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="mt-8 pt-6 border-t border-gray-100 sm:mt-10 sm:pt-8 grid grid-cols-3 gap-3 sm:gap-4">
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-[#192B3C]">
                                        2 &amp; 3 BHK + Duplex
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-gray-500">
                                        Configuration
                                    </p>
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-[#192B3C]">
                                        G + 14
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-gray-500">
                                        Floors
                                    </p>
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-[#192B3C]">
                                        65 Homes
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-gray-500">
                                        Community
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* 2. Sai Platina */}
                    <article
                        id="project-2"
                        className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]"
                    >
                        {/* Content */}
                        <div className="flex flex-col justify-between px-5 py-8 sm:px-10 sm:py-12 lg:px-12 order-2 lg:order-1">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A1E]">
                                    COMPLETED RESIDENTIAL
                                </span>
                                <h2 className="mt-2 text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[44px] leading-tight">
                                    Sai Platina
                                </h2>
                                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                                    Shirur, Pune - Completed 2022
                                </p>

                                <div className="mt-4 space-y-3 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-700">
                                    <p>
                                        A thoughtfully planned residential development comprising 40 homes across Parking + 5 floors, designed with a focus on practical layouts, everyday comfort and community living.
                                    </p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="mt-8 pt-6 border-t border-gray-100 sm:mt-10 sm:pt-8 grid grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#192B3C]">
                                        40 HOMES - P + 5 FLOORS
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-gray-500">
                                        Residential Structure
                                    </p>
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#192B3C]">
                                        COMPLETED 2022
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-gray-500">
                                        Handover &amp; Possession
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="group relative overflow-hidden bg-[#192B3C] order-1 lg:order-2">
                            <img
                                src={projects[1].image}
                                alt="Sai Platina"
                                className="w-full aspect-[4/5] sm:aspect-auto sm:h-[440px] lg:h-[540px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <img
                                src={design}
                                alt=""
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-40"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/70 to-transparent px-4 py-4 text-white sm:px-8 sm:py-6">
                                <h3 className="text-2xl font-medium sm:text-3xl text-white">Sai Platina</h3>
                                <p className="text-xs sm:text-sm text-white/80">Shirur, Pune &bull; Completed 2022</p>
                            </div>
                        </div>
                    </article>

                </div>

                {/* Closing Statement Banner */}
                <div className="mt-16 sm:mt-24 mx-auto max-w-[1440px] bg-[#192B3C] text-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-sm">
                    <span className="text-xs uppercase tracking-widest text-[#BFECE8] font-semibold block mb-2">
                        LOOKING AHEAD
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4">
                        The Journey Continues.
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-[16px] leading-relaxed text-white/80 max-w-3xl mx-auto">
                        As Dhaneshwar Realty grows, we look forward to creating new spaces shaped by thoughtful planning, responsible development and a clear understanding of how people want to live.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default Projects;