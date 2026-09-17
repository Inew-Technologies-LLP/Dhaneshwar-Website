import { Link, useNavigate } from "react-router-dom";
import design from "../images/design.png";

const ProjectCard = ({ project }) => {
     const navigate = useNavigate();

     const handleNavigation = (event) => {
          if (project.externalLink) {
               event?.stopPropagation();
               window.open(project.externalLink, "_blank", "noopener,noreferrer");
          } else {
               navigate(`/projects?project=${project.id}`);
          }
     };

     return (
          <div
               id={`project-${project.id}`}
               onClick={handleNavigation}
               onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                         event.preventDefault();
                         handleNavigation(event);
                    }
               }}
               role="link"
               tabIndex={0}
               className="
                    group
                    cursor-pointer
                    overflow-hidden
                    bg-white
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-2
                    hover:shadow-2xl
               "
          >

               <div className="relative overflow-hidden">

                    <img
                         src={project.image}
                         alt={project.name}
                         className="
                              w-full
                              aspect-[419/558]
                              object-cover
                              transition-transform
                              duration-700
                              ease-out
                              group-hover:scale-[1.05]
                              lg:aspect-auto
                              lg:h-[590px]
                         "
                    />

                    <img
                         src={design}
                         alt=""
                         aria-hidden="true"
                         className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                    />

               </div>

               <div className="bg-[#192B3C] px-4 py-5 text-white sm:px-8 sm:py-6">

                    <div className="mb-3 flex items-center justify-between sm:mb-4">

                         <p className="text-xs text-white/60 sm:text-sm">
                              {project.city}
                         </p>

                         {project.externalLink ? (
                              <a
                                   href={project.externalLink}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   onClick={(event) => event.stopPropagation()}
                                   className="
                                        bg-[#B38B17]
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        transition-all
                                        duration-300
                                        hover:bg-[#c89a19]
                                        hover:brightness-110
                                        hover:shadow-md
                                        hover:translate-x-0.5
                                        sm:px-4
                                        sm:py-1.5
                                   "
                              >
                                   Learn More
                              </a>
                         ) : (
                              <Link
                                   to={`/projects?project=${project.id}`}
                                   onClick={(event) => event.stopPropagation()}
                                   className="
                                        bg-[#B38B17]
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        transition-all
                                        duration-300
                                        hover:bg-[#c89a19]
                                        hover:brightness-110
                                        hover:shadow-md
                                        hover:translate-x-0.5
                                        sm:px-4
                                        sm:py-1.5
                                   "
                              >
                                   Learn More
                              </Link>
                         )}

                    </div>

                    <h3 className="text-xl font-medium sm:text-2xl">
                         {project.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-white/70 sm:mt-1 sm:text-sm">
                         {project.status}
                    </p>

                    <div className="mt-4 flex justify-between gap-4 sm:mt-6">

                         <div className="flex items-center gap-6">

                              <p className="text-xs font-medium text-white sm:text-sm">
                                   {project.dateLabel}
                              </p>

                              <p className="text-xs text-white sm:text-sm">
                                   {project.possession}
                              </p>

                         </div>

                    </div>

                    <p className="mt-3 text-xs text-white/60 sm:text-sm">
                         {project.configuration}
                    </p>

               </div>

          </div>
     );
};

export default ProjectCard;