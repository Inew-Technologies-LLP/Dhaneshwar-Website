import ProjectCard from "./ProjectCard";

const ProjectSection = ({
     title = "Our Projects",
     subtitle,
     centered = true,
     projectsData,
}) => {
     return (
          <section className="px-9 py-4">

               <div className="mx-auto max-w-[1440px]">

                    <div className="relative mb-14">

                         <div className="mb-14">

                              <h2
                                   className={`text-[50px] font-medium text-[#192B3C] ${
                                        centered
                                             ? "text-center"
                                             : "text-left"
                                   }`}
                              >
                                   {title}
                              </h2>

                              {subtitle && (
                                   <p
                                        className={`mt-2 text-[18px] text-gray-500 ${
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

                    <div className="grid gap-8 lg:grid-cols-3">

                         {projectsData.map((project) => (
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