import ProjectCard from "./ProjectCard";

const ProjectSection = ({
     title = "Our Projects",
     subtitle,
     centered = true,
     projectsData,
     expanded = false,
}) => {
     return (
          <section className="px-4 py-4 sm:px-6 lg:px-9">

               <div className="mx-auto max-w-[1440px]">

                    <div className="relative mb-14">

                         <div className="mb-14">

                              <h2
                                   className={`text-3xl font-medium text-[#192B3C] sm:text-4xl lg:text-[50px] ${
                                        centered
                                             ? "text-center"
                                             : "text-left"
                                   }`}
                              >
                                   {title}
                              </h2>

                              {subtitle && (
                                   <p
                                        className={`mt-2 text-base text-gray-500 sm:text-[18px] ${
                                             centered
                                                  ? "text-center"
                                                  : "text-left"
                                        }`}
                                   >
                                        {subtitle}
                                   </p>
                              )}

                         </div>

                    </div>

                    <div className={expanded ? "space-y-12 sm:space-y-16" : "grid gap-8 lg:grid-cols-3"}>

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
                                             className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[460px] lg:h-[560px]"
                                        />

                                        <div className="absolute inset-x-0 bottom-0 bg-[#192B3C] px-5 py-5 text-white sm:px-8">
                                             <div className="flex items-end justify-between gap-4">
                                                  <div>
                                                       <h3 className="text-2xl font-medium sm:text-[28px]">
                                                            {project.name}
                                                       </h3>
                                                       <p className="mt-1 text-sm text-white/70">
                                                            {project.status}
                                                       </p>
                                                  </div>
                                                  <p className="pb-1 text-sm text-white/70">
                                                       {project.city}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div className={`flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-9 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                                        <h3 className="text-3xl font-medium text-[#192B3C] sm:text-4xl">
                                             {project.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-[#192B3C]">
                                             Location: {project.city}
                                        </p>
                                        <p className="mt-7 max-w-xl text-sm leading-6 text-[#192B3C]">
                                             Description about the project. Project image with a gradient of pattern from bottom.
                                        </p>
                                        <p className="mt-1 max-w-xl text-sm leading-6 text-[#192B3C]">
                                             {project.description}
                                        </p>

                                        <a
                                             href={`/contact?project=${project.id}`}
                                             className="mt-6 w-fit bg-[#B38B17] px-5 py-2 text-xs text-white transition hover:bg-[#c89a19]"
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