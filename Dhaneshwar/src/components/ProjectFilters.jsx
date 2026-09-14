const projectTypes = [
     "All",
     "Residential",
     "Commercial",
];

const projectStatus = [
     "All",
     "Ongoing",
     "Completed",
     "Upcoming",
];

const ProjectFilters = ({
     type,
     setType,
     status,
     setStatus,
}) => {

     const buttonStyle = (active) => `
        h-9
        sm:h-10
        border
        border-[#192B3C]
        px-3.5
        sm:px-6
        text-xs
        sm:text-[14px]
        font-medium
        transition-all
        duration-200
        ${active
               ? "bg-[#192B3C] text-white shadow-sm"
               : "bg-white text-[#192B3C] hover:bg-[#192B3C]/5"
          }
    `;

     return (

          <section className="px-3 py-5 sm:px-6 sm:py-8 lg:px-9">

               <div className="mx-auto max-w-[1440px]">

                    <div className="flex flex-col gap-5 sm:gap-8 lg:flex-row lg:gap-14">

                         <div>

                              <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#192B3C]/80">
                                   Project Type
                              </h3>

                              <div className="flex flex-wrap gap-2">

                                   {projectTypes.map(item => (

                                        <button
                                             key={item}
                                             onClick={() => setType(item)}
                                             className={buttonStyle(item === type)}
                                        >
                                             {item}
                                        </button>

                                   ))}

                              </div>

                         </div>

                         <div>

                              <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#192B3C]/80">
                                   Status
                              </h3>

                              <div className="flex flex-wrap gap-2">

                                   {projectStatus.map(item => (

                                        <button
                                             key={item}
                                             onClick={() => setStatus(item)}
                                             className={buttonStyle(item === status)}
                                        >
                                             {item}
                                        </button>

                                   ))}

                              </div>

                         </div>

                    </div>

                    <div className="mt-6 sm:mt-8 border-b border-gray-200" />

               </div>

          </section>

     );

};

export default ProjectFilters;