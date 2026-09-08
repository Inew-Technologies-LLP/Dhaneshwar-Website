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
        h-10
        border
        border-[#192B3C]
        px-6
        text-[14px]
        transition
        ${active
               ? "bg-[#192B3C] text-white"
               : "bg-white text-[#192B3C]"
          }
    `;

     return (

          <section className="px-9 py-8">

               <div className="mx-auto max-w-[1440px]">

                    <div className="flex gap-14">

                         <div>

                              <h3 className="mb-3 font-semibold">
                                   Projects
                              </h3>

                              <div className="flex">

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

                              <h3 className="mb-3 font-semibold">
                                   Status
                              </h3>

                              <div className="flex">

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

                    <div className="mt-8 border-b border-gray-300" />

               </div>

          </section>

     );

};

export default ProjectFilters;