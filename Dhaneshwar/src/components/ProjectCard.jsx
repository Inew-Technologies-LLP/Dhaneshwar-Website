import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
     const navigate = useNavigate();

     return (
          <div
               id={`project-${project.id}`}
               onClick={() => navigate(`/projects?project=${project.id}`)}
               onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                         event.preventDefault();
                         navigate(`/projects?project=${project.id}`);
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

               <div className="overflow-hidden">

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

               </div>

               <div className="bg-[#192B3C] px-4 py-5 text-white sm:px-8 sm:py-6">

                    <div className="mb-3 flex items-center justify-between sm:mb-4">

                         <p className="text-xs text-white/60 sm:text-sm">
                              {project.city}
                         </p>

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

                    </div>

                    <h3 className="text-xl font-medium sm:text-2xl">
                         {project.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-white/70 sm:mt-1 sm:text-sm">
                         {project.status}
                    </p>

                    <div className="mt-4 flex justify-between gap-4 sm:mt-6">

                         <div>

                              <p className="text-xs text-white/60 sm:text-sm">
                                   INR
                              </p>

                              <p className="text-sm font-medium sm:text-base">
                                   {project.price}
                              </p>

                              <p className="mt-1 text-xs text-white/60 sm:mt-2 sm:text-sm">
                                   {project.configuration}
                              </p>

                         </div>

                         <div className="text-right">

                              <p className="text-xs text-white/60 sm:text-sm">
                                   Possession Date
                              </p>

                              <p className="text-sm font-medium sm:text-base">
                                   {project.possession}
                              </p>

                         </div>

                    </div>

               </div>

          </div>
     );
};

export default ProjectCard;