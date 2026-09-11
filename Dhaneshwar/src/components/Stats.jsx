import photo5 from "../images/photo5.png";

const stats = [
     {
          value: "50+",
          label: "Happy Families",
     },
     {
          value: "15+",
          label: "Successful Projects",
     },
     {
          value: "50+",
          suffix: "yrs",
          label: "Industry Experience",
     },
     {
          value: "100%",
          label: "Commitment to Quality",
     },
];

const Stats = () => {
     return (
          <section className="px-3 sm:px-5 lg:px-9 py-16">

               <div className="group relative mx-auto max-w-[1440px] overflow-hidden">

                    {/* Background Image */}

                    <img
                         src={photo5}
                         alt="Stats"
                         className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Top Content */}

                    <div className="absolute left-0 top-0 w-full p-6 sm:p-10 lg:p-14">

                         <div className="max-w-[520px]">

                              <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[56px] text-[#192B3C]">
                                   Designed with Purpose.
                                   Built with Trust.
                              </h2>

                              <p className="mt-3 sm:mt-6 text-xs sm:text-base lg:text-[17px] leading-relaxed lg:leading-[32px] text-[#192B3C] font-normal">
                                   From exceptional locations to uncompromising quality,
                                   every Dhaneshwar Realty development is crafted to
                                   elevate everyday living. We believe a home should
                                   offer comfort, confidence, and enduring value.
                              </p>

                         </div>

                    </div>

                    {/* Statistics */}

                    <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-0 w-full px-6 sm:px-10 lg:px-14">

                         <div className="grid grid-cols-2 gap-4 sm:gap-8 text-[#C8F5F3] md:grid-cols-4">

                              {stats.map((item) => (

                                   <div key={item.label} className="transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 cursor-default group">

                                        <h3 className="text-2xl sm:text-4xl lg:text-[54px] font-light leading-none transition-colors duration-300 group-hover:text-white">

                                             {item.value}

                                             {item.suffix && (
                                                  <span className="ml-1 text-sm sm:text-xl lg:text-[26px]">
                                                       {item.suffix}
                                                  </span>
                                             )}

                                        </h3>

                                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-[17px] transition-colors duration-300 group-hover:text-white/90">
                                             {item.label}
                                        </p>

                                   </div>

                              ))}

                         </div>

                    </div>
               </div>

          </section>
     );
};

export default Stats;