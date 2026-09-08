import { useState } from "react";
import projects from "../data/projects";
import { submitLead } from "../api/leads";

const initialFormData = {
     name: "",
     email: "",
     phone: "",
     project: "",
     city: "",
};

const ContactForm = () => {
     const [formData, setFormData] = useState(initialFormData);
     const [status, setStatus] = useState("idle");

     const handleChange = (e) => {
          const { name, value } = e.target;

          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          setStatus("submitting");

          try {
               await submitLead({
                    type: "contact",
                    ...formData,
               });

               setStatus("success");
               setFormData(initialFormData);
          } catch (error) {
               console.error("Contact form submission failed:", error);
               setStatus("error");
          }
     };

     return (
          <section className="px-9 py-16">
               <div className="mx-auto max-w-[1440px]">

                    <form
                         onSubmit={handleSubmit}
                         className="grid grid-cols-3 gap-x-16 gap-y-10"
                    >

                         {/* Name */}

                         <div>
                              <label className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Name
                              </label>

                              <input
                                   type="text"
                                   name="name"
                                   value={formData.name}
                                   onChange={handleChange}
                                   required
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
                                   name="email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   required
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
                                   name="phone"
                                   value={formData.phone}
                                   onChange={handleChange}
                                   required
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
                                   name="project"
                                   value={formData.project}
                                   onChange={handleChange}
                                   required
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
                                   <option value="">
                                        Choose Project
                                   </option>

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
                                   name="city"
                                   value={formData.city}
                                   onChange={handleChange}
                                   required
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

                         {/* Submit */}

                         <div className="col-span-3">

                              <button
                                   type="submit"
                                   disabled={status === "submitting"}
                                   className="
                                mt-0
                                h-[42px]
                                w-[115px]
                                rounded
                                bg-[#7B7B7B]
                                text-[15px]
                                font-medium
                                text-white
                                transition
                                hover:bg-[#686868]
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                              >
                                   {status === "submitting"
                                        ? "Sending..."
                                        : "Submit"}
                              </button>

                              {status === "success" && (
                                   <p className="mt-4 text-[15px] text-green-600">
                                        Thank you! We will get back to you shortly.
                                   </p>
                              )}

                              {status === "error" && (
                                   <p className="mt-4 text-[15px] text-red-600">
                                        Something went wrong. Please try again.
                                   </p>
                              )}

                         </div>

                    </form>

               </div>
          </section>
     );
};

export default ContactForm;