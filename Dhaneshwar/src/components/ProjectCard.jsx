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
                              h-[360px]
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              ease-out
                              group-hover:scale-[1.05]
                              sm:h-[460px]
                              lg:h-[590px]
                         "
                    />

               </div>

               <div className="bg-[#192B3C] px-5 py-6 text-white sm:px-8 lg:px-8">

                    <div className="mb-4 flex items-center justify-between">

                         <p className="text-sm text-white/60">
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
                                   transition-all
                                   duration-300
                                   hover:bg-[#c89a19]
                                   hover:brightness-110
                                   hover:shadow-md
                                   hover:translate-x-0.5
                                   sm:px-4
                              "
                         >
                              Learn More
                         </Link>

                    </div>

                    <h3 className="text-2xl font-medium">
                         {project.name}
                    </h3>

                    <p className="mt-1 text-base">
                         {project.status}
                    </p>

                    <div className="mt-6 flex justify-between gap-4">

                         <div>

                              <p className="text-sm text-white/60">
                                   INR
                              </p>

                              <p>
                                   {project.price}
                              </p>

                              <p className="mt-2 text-white/60">
                                   {project.configuration}
                              </p>

                         </div>

                         <div>

                              <p className="text-sm text-white/60">
                                   Possession Date
                              </p>

                              <p>
                                   {project.possession}
                              </p>

                         </div>

                    </div>

               </div>

          </div>
     );
};

export default ProjectCard;