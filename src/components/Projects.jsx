import { X } from "lucide-react";
import { useState } from "react";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
     const [selected, setSelected] = useState(null);

     return (
          <section className="px-9 py-24">

               <div className="mx-auto max-w-[1440px]">

                    <div className="relative mb-14">

                         <h2 className="text-center text-[50px] font-medium text-[#192B3C]">
                              Our Projects
                         </h2>
                    </div>

                    <>

                         {!selected ? (
                              <div className="grid gap-8 lg:grid-cols-3">
                                   {projects.map((project) => (

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

export default Projects;