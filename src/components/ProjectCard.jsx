const ProjectCard = ({ project, onClick }) => {
     return (
          <div
               onClick={onClick}
               className="group cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2"
          >
               <div className="overflow-hidden">
                    <img
                         src={project.image}
                         alt={project.name}
                         className="h-[590px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
               </div>

               <div className="bg-[#192B3C] px-8 py-6 text-white">

                    <div className="mb-4 flex items-center justify-between">

                         <p className="text-sm text-white/60">
                              {project.city}
                         </p>

                         <button
                              onClick={(e) => {
                                   e.stopPropagation();
                                   onClick();
                              }}
                              className="bg-[#B38B17] px-4 py-1 text-xs transition duration-300 hover:bg-[#c89a19]"
                         >
                              Learn More
                         </button>

                    </div>

                    <h3 className="text-[24px] font-medium">
                         {project.name}
                    </h3>

                    <p className="mt-1 text-[16px]">
                         {project.status}
                    </p>

                    <div className="mt-6 flex justify-between">

                         <div>
                              <p className="text-sm text-white/60">
                                   INR
                              </p>

                              <p>{project.price}</p>

                              <p className="mt-2 text-white/60">
                                   {project.configuration}
                              </p>
                         </div>

                         <div>

                              <p className="text-sm text-white/60">
                                   Possession Date
                              </p>

                              <p>{project.possession}</p>

                         </div>

                    </div>

               </div>

          </div>
     );
};

export default ProjectCard;