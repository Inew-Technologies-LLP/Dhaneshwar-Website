import { useState } from "react";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const initialFormData = {
     name: "",
     email: "",
     phone: "",
     message: "",
     consent: false,
};

const ContactForm = () => {
     const [formData, setFormData] = useState(initialFormData);
     const [status, setStatus] = useState("idle");
     const [errorMessage, setErrorMessage] = useState("");

     const handleChange = (e) => {
          const { name, value, type, checked } = e.target;

          if (status !== "idle") {
               setStatus("idle");
          }

          setFormData((prev) => ({
               ...prev,
               [name]: type === "checkbox" ? checked : value,
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          const name = formData.name.trim();
          const email = formData.email.trim();
          const phone = formData.phone.trim();
          const message = formData.message.trim();

          if (!name || !phone) {
               setStatus("error");
               setErrorMessage("Please fill in all required fields.");
               return;
          }

          if (!formData.consent) {
               setStatus("error");
               setErrorMessage("Please confirm that you have read and agree to the Privacy Policy.");
               return;
          }

          setStatus("submitting");
          setErrorMessage("");

          try {
               const submissionPromise = fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    keepalive: true,
                    headers: {
                         "Content-Type": "text/plain;charset=utf-8",
                    },
                    body: JSON.stringify({
                         name,
                         email: email || "Not Provided",
                         phone,
                         project: "General Inquiry",
                         city: "Pune",
                         message,
                    }),
               });

               await Promise.race([
                    submissionPromise,
                    new Promise((resolve) => setTimeout(resolve, 1000)),
               ]);

               setStatus("success");
               setFormData(initialFormData);
          } catch (error) {
               console.error("Contact form submission failed:", error);
               setStatus("error");
               setErrorMessage("Something went wrong. Please try again.");
          }
     };

     return (
          <section className="px-3 py-6 sm:px-6 sm:py-10 lg:px-9 lg:py-12">
               <div className="mx-auto max-w-[1440px]">

                    <form
                         onSubmit={handleSubmit}
                         className="flex flex-col gap-y-5 sm:gap-y-6 max-w-3xl mx-auto"
                    >

                         {/* Name */}
                         <div className="w-full">
                              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-[#192B3C] sm:mb-2 sm:text-[16px]">
                                   Name <span className="text-red-500">*</span>
                              </label>

                              <input
                                   type="text"
                                   id="contact-name"
                                   name="name"
                                   placeholder="Your Full Name"
                                   value={formData.name}
                                   onChange={handleChange}
                                   required
                                   className="
                                h-11
                                w-full
                                border
                                border-[#192B3C]
                                px-3.5
                                text-sm
                                sm:text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />
                         </div>

                         {/* Mobile number */}
                         <div className="w-full">
                              <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-[#192B3C] sm:mb-2 sm:text-[16px]">
                                   Mobile Number <span className="text-red-500">*</span>
                              </label>

                              <input
                                   type="tel"
                                   id="contact-phone"
                                   name="phone"
                                   placeholder="Your 10-digit Number"
                                   value={formData.phone}
                                   onChange={handleChange}
                                   required
                                   className="
                                h-11
                                w-full
                                border
                                border-[#192B3C]
                                px-3.5
                                text-sm
                                sm:text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />
                         </div>

                         {/* Email */}
                         <div className="w-full">
                              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[#192B3C] sm:mb-2 sm:text-[16px]">
                                   Email <span className="text-gray-500 font-normal">(Optional)</span>
                              </label>

                              <input
                                   type="email"
                                   id="contact-email"
                                   name="email"
                                   placeholder="you@example.com"
                                   value={formData.email}
                                   onChange={handleChange}
                                   className="
                                h-11
                                w-full
                                border
                                border-[#192B3C]
                                px-3.5
                                text-sm
                                sm:text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />
                         </div>

                         {/* Message (Optional) */}
                         <div className="w-full">
                              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-[#192B3C] sm:mb-2 sm:text-[16px]">
                                   Message <span className="text-gray-500 font-normal">(Optional)</span>
                              </label>

                              <textarea
                                   id="contact-message"
                                   name="message"
                                   rows={4}
                                   value={formData.message}
                                   onChange={handleChange}
                                   placeholder="How can we help you? Any specific requirements..."
                                   className="
                                w-full
                                border
                                border-[#192B3C]
                                p-3.5
                                text-sm
                                sm:text-[15px]
                                outline-none
                                transition
                                focus:border-[#B38B17]
                            "
                              />
                         </div>

                         {/* Policy Read Checkbox */}
                         <div className="w-full">
                              <label className="flex items-start gap-3 text-sm text-[#192B3C]/80 cursor-pointer select-none">
                                   <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        required
                                        className="peer sr-only"
                                   />
                                   <span
                                        className="
                                            mt-0.5
                                            flex
                                            h-4
                                            w-4
                                            shrink-0
                                            items-center
                                            justify-center
                                            border
                                            border-[#192B3C]
                                            bg-white
                                            text-[11px]
                                            text-white
                                            transition
                                            peer-checked:bg-[#192B3C]
                                            peer-checked:after:content-['✓']
                                        "
                                   />
                                   <span>
                                        I have read and agree to the Privacy Policy and consent to being contacted regarding my inquiry.
                                   </span>
                              </label>
                         </div>

                         {/* Submit */}
                         <div className="w-full pt-2">
                              <button
                                   type="submit"
                                   disabled={status === "submitting" || !formData.consent}
                                   className="
                                h-11
                                w-full
                                sm:w-[160px]
                                bg-[#192B3C]
                                hover:bg-[#B38B17]
                                text-sm
                                sm:text-[15px]
                                font-medium
                                tracking-wider
                                text-white
                                transition-all
                                duration-300
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                              >
                                   {status === "submitting"
                                        ? "Sending..."
                                        : "Submit"}
                              </button>

                              {status === "success" && (
                                   <p className="mt-4 text-sm sm:text-[15px] text-green-600 font-medium">
                                        Submitted Successfully! Thank you, we will get back to you shortly.
                                   </p>
                              )}

                              {status === "error" && (
                                   <p className="mt-4 text-sm sm:text-[15px] text-red-600 font-medium">
                                        {errorMessage || "Something went wrong. Please try again."}
                                   </p>
                              )}
                         </div>

                    </form>

               </div>
          </section>
     );
};

export default ContactForm;