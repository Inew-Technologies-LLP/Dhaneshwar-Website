import photo5 from "../images/photo5.png";
import design from "../images/design.png";

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
          <section className="px-3 py-10 sm:px-5 sm:py-16 lg:px-9">

               <div className="group relative mx-auto max-w-[1440px] min-h-[540px] sm:min-h-[500px] md:min-h-0 md:h-auto overflow-hidden">

                    {/* Background Image */}

                    <img
                         src={photo5}
                         alt="Stats"
                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:relative md:h-auto md:w-full"
                    />

                    {/* Mobile readability contrast overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-black/85 md:hidden" />

                    {/* Decorative Pattern Overlay */}
                    <img
                         src={design}
                         alt=""
                         aria-hidden="true"
                         className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                    />

                    {/* Top Content */}

                    <div className="absolute left-0 top-0 w-full p-5 sm:p-10 lg:p-14">

                         <div className="max-w-[520px]">

                              <h2 className="text-xl sm:text-3xl lg:text-[48px] font-medium leading-snug lg:leading-[56px] text-[#192B3C]">
                                   <span className="block whitespace-nowrap">
                                        Designed with Purpose.
                                   </span>
                                   <span className="block whitespace-nowrap">
                                        Built with Trust.
                                   </span>
                              </h2>

                              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-[17px] leading-relaxed lg:leading-[32px] text-[#192B3C] font-normal">
                                   We believe good development begins with understanding how people live. From thoughtful layouts and natural light to meaningful amenities and enduring materials, every decision is made with purpose—to create places that make everyday life better.
                              </p>

                         </div>

                    </div>

                    {/* Statistics */}

                    <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-0 w-full px-5 sm:px-10 lg:px-14">

                         <div className="grid grid-cols-2 gap-3 sm:gap-8 text-[#C8F5F3] md:grid-cols-4">

                              {stats.map((item) => (

                                   <div key={item.label} className="transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 cursor-default group">

                                        <h3 className="text-2xl sm:text-4xl lg:text-[54px] font-light leading-none transition-colors duration-300 group-hover:text-white">

                                             {item.value}

                                             {item.suffix && (
                                                  <span className="ml-0.5 text-xs sm:text-xl lg:text-[26px]">
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