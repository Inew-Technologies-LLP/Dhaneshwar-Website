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
          <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-9">
               <div className="mx-auto max-w-[1440px]">

                    <form
                         onSubmit={handleSubmit}
                         className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-10"
                    >

                         {/* Name */}

                         <div className="min-w-0">
                              <label htmlFor="contact-name" className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Name
                              </label>

                              <input
                                   type="text"
                                   id="contact-name"
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

                         <div className="min-w-0">
                              <label htmlFor="contact-email" className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Email
                              </label>

                              <input
                                   type="email"
                                   id="contact-email"
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

                         <div className="min-w-0">
                              <label htmlFor="contact-phone" className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Phone No.
                              </label>

                              <input
                                   type="tel"
                                   id="contact-phone"
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

                         <div className="min-w-0">
                              <label htmlFor="contact-project" className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   Select Project
                              </label>

                              <select
                                   name="project"
                                   id="contact-project"
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

                         <div className="min-w-0">
                              <label htmlFor="contact-city" className="mb-2 block text-[16px] font-medium text-[#192B3C]">
                                   City
                              </label>

                              <input
                                   type="text"
                                   id="contact-city"
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

                         <div className="col-span-full">

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