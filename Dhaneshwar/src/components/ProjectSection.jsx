import ProjectCard from "./ProjectCard";

const ProjectSection = ({
     title = "Our Projects",
     subtitle,
     centered = true,
     projectsData,
     expanded = false,
}) => {
     return (
          <section className="px-3 py-6 sm:px-6 sm:py-10 lg:px-9 lg:py-12">

               <div className="mx-auto max-w-[1440px]">

                    <div className="mb-8 sm:mb-14">

                         <h2
                              className={`text-2xl font-medium text-[#192B3C] sm:text-4xl lg:text-[50px] leading-tight ${
                                   centered
                                        ? "text-center"
                                        : "text-left"
                              }`}
                         >
                              {title}
                         </h2>

                         {subtitle && (
                              <p
                                   className={`mt-1 text-xs text-gray-500 sm:mt-2 sm:text-[18px] ${
                                        centered
                                             ? "text-center"
                                             : "text-left"
                                   }`}
                              >
                                   {subtitle}
                              </p>
                         )}

                    </div>

                    <div className={expanded ? "space-y-8 sm:space-y-16" : "grid gap-6 sm:gap-8 lg:grid-cols-3"}>

                         {projectsData.map((project, index) => expanded ? (
                              <article
                                   key={project.id}
                                   id={`project-${project.id}`}
                                   className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-[1.15fr_0.85fr]"
                              >
                                   <div className={`group relative overflow-hidden ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                                         <img
                                             src={project.image}
                                             alt={project.name}
                                             className="w-full aspect-[419/558] sm:aspect-auto sm:h-[460px] lg:h-[560px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />

                                        <div className="absolute inset-x-0 bottom-0 bg-[#192B3C] px-4 py-3 text-white sm:px-8 sm:py-5">
                                             <div className="flex items-end justify-between gap-4">
                                                  <div>
                                                       <h3 className="text-lg font-medium sm:text-2xl lg:text-[28px] leading-tight">
                                                            {project.name}
                                                       </h3>
                                                       <p className="mt-0.5 text-xs text-white/70 sm:mt-1 sm:text-sm">
                                                            {project.status}
                                                       </p>
                                                  </div>
                                                  <p className="pb-0.5 text-xs text-white/70 sm:pb-1 sm:text-sm">
                                                       {project.city}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div className={`flex flex-col justify-center px-4 py-6 sm:px-10 sm:py-12 lg:px-9 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                                        <h3 className="text-2xl font-medium text-[#192B3C] sm:text-3xl lg:text-4xl">
                                             {project.name}
                                        </h3>
                                        <p className="mt-1 text-xs text-[#192B3C]/80 sm:mt-2 sm:text-sm">
                                             Location: {project.city}
                                        </p>
                                        <p className="mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-[#192B3C] sm:mt-7">
                                             Discover our flagship residential development embodying high standards of comfort, aesthetic brilliance, and architectural finesse.
                                        </p>
                                        <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[#192B3C]/80 sm:mt-3">
                                             {project.description}
                                        </p>

                                        <a
                                             href={`/contact?project=${project.id}`}
                                             className="mt-5 w-fit bg-[#B38B17] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#c89a19] sm:mt-6 sm:px-5 sm:py-2.5 sm:text-sm"
                                        >
                                             Learn more
                                        </a>
                                   </div>
                              </article>
                         ) : (
                              <ProjectCard
                                   key={project.id}
                                   project={project}
                              />
                         ))}

                    </div>

               </div>

          </section>
     );
};

export default ProjectSection;