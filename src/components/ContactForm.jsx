import projects from "../data/projects";

const ContactForm = () => {
     return (
          <section className="px-9 py-16">

               <div className="mx-auto max-w-[1440px]">

                    <form className="grid grid-cols-3 gap-x-16 gap-y-10">

                         {/* Name */}

                         <div>

                              <label className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Name
                              </label>

                              <input
                                   type="text"
                                   className="
                                h-[44px]
                                w-full
                                border
                                border-[#192B3C]
                                px-3
                                text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />

                         </div>

                         {/* Email */}

                         <div>

                              <label className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Email
                              </label>

                              <input
                                   type="email"
                                   className="
                                h-[44px]
                                w-full
                                border
                                border-[#192B3C]
                                px-3
                                text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />

                         </div>

                         {/* Phone */}

                         <div>

                              <label className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Phone No.
                              </label>

                              <input
                                   type="tel"
                                   className="
                                h-[44px]
                                w-full
                                border
                                border-[#192B3C]
                                px-3
                                text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />

                         </div>

                         {/* Project */}

                         <div>

                              <label className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Select Project
                              </label>

                              <select
                                   className="
                                h-[44px]
                                w-full
                                border
                                border-[#192B3C]
                                bg-white
                                px-3
                                text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              >
                                   <option value="">Choose Project</option>

                                   {projects.map((project) => (
                                        <option
                                             key={project.id}
                                             value={project.name}
                                        >
                                             {project.name}
                                        </option>
                                   ))}
                              </select>

                         </div>

                         {/* City */}

                         <div>

                              <label className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   City
                              </label>

                              <input
                                   type="text"
                                   className="
                                h-[44px]
                                w-full
                                border
                                border-[#192B3C]
                                px-3
                                text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />

                         </div>

                    </form>

                    <button
                         className="
                        mt-10
                        h-[42px]
                        w-[115px]
                        rounded
                        bg-[#7B7B7B]
                        text-[15px]
                        font-medium
                        text-white
                        transition
                        hover:bg-[#686868]
                    "
                    >
                         Submit
                    </button>

               </div>

          </section>
     );
};

export default ContactForm;