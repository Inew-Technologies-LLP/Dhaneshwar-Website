import { X } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectSection = ({
     title = "Our Projects",
     subtitle,
     centered = true,
     projectsData,
     selected,
     setSelected,
}) => {

     return (
          <section className="px-9 py-4">

               <div className="mx-auto max-w-[1440px]">

                    <div className="relative mb-14">

                         <div className="mb-14">

                              <h2 className={`text-[50px] font-medium text-[#192B3C] ${centered ? "text-center" : "text-left"}`}>
                                   {title}
                              </h2>

                              {subtitle && (
                                   <p className={`mt-2 text-[18px] text-gray-500 ${centered ? "text-center" : "text-left"}`}>
                                        {subtitle}
                                   </p>
                              )}

                         </div>
                    </div>

                    <>

                         {!selected ? (
                              <div className="grid gap-8 lg:grid-cols-3">
                                   {projectsData.map((project) => (
                                        <ProjectCard
                                             key={project.id}
                                             project={project}
                                             onClick={() => setSelected(project)}
                                        />

                                   ))}

                              </div>

                         ) : (
                              <div className="grid items-start gap-12 lg:grid-cols-[2fr_1fr]">
                                   <div>

                                        <img
                                             src={selected.image}
                                             alt={selected.name}
                                             className="h-[590px] w-full object-cover"
                                        />

                                        <div className="bg-[#192B3C] px-8 py-6 text-white">

                                             <div className="mb-4 flex justify-between">

                                                  <div>

                                                       <h3 className="text-[24px] font-medium">
                                                            {selected.name}
                                                       </h3>

                                                       <p className="mt-1">
                                                            {selected.status}
                                                       </p>

                                                  </div>

                                                  <p className="text-white/60">
                                                       {selected.city}
                                                  </p>

                                             </div>

                                             <div className="mt-6 flex justify-between">

                                                  <div>

                                                       <p className="text-sm text-white/60">
                                                            INR
                                                       </p>

                                                       <p>{selected.price}</p>

                                                       <p className="mt-2 text-white/60">
                                                            {selected.configuration}
                                                       </p>

                                                  </div>

                                                  <div>

                                                       <p className="text-sm text-white/60">
                                                            Possession Date
                                                       </p>

                                                       <p>{selected.possession}</p>

                                                  </div>

                                             </div>

                                        </div>

                                   </div>
                                   <div className="pt-6">
                                        <div className="flex items-start justify-between">

                                             <h3 className="text-[58px] font-medium text-[#192B3C]">
                                                  {selected.name}
                                             </h3>

                                             <button
                                                  onClick={() => setSelected(null)}
                                                  className="
            rounded-full
            p-2
            transition
            hover:bg-gray-100
        "
                                             >
                                                  <X size={24} />
                                             </button>

                                        </div>

                                        <p className="mt-10 text-[20px] font-medium">
                                             Location
                                        </p>

                                        <p className="mt-6 text-[18px] leading-10 text-gray-700">
                                             {selected.description}
                                        </p>

                                        <button className="mt-12 bg-[#B38B17] px-10 py-4 text-white transition hover:bg-[#c89a19]">
                                             Learn More
                                        </button>

                                   </div>

                              </div>

                         )}

                    </>

               </div>

          </section >
     );
};

export default ProjectSection;