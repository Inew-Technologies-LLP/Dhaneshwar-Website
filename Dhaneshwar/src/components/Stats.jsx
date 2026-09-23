import photo5 from "../images/photo5.png";
import design from "../images/design.png";

const Stats = () => {
     return (
          <section className="px-3 pt-4 pb-0 sm:px-5 sm:pt-8 sm:pb-0 lg:px-9 lg:pt-10 lg:pb-0">

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

                    {/* Top Right Content */}

                    <div className="absolute right-0 top-0 w-full p-5 sm:p-10 lg:p-14 flex justify-end">

                         <div className="max-w-[540px] text-right">

                              <h2 className="text-xl sm:text-3xl lg:text-[44px] font-medium leading-tight text-[#192B3C]">
                                   <span className="block whitespace-nowrap">
                                        Designed with Purpose.
                                   </span>
                                   <span className="block whitespace-nowrap">
                                        Built with Trust.
                                   </span>
                              </h2>

                              <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-[16px] leading-snug lg:leading-[24px] text-[#192B3C] font-normal">
                                   We believe good development begins with understanding how people live. From thoughtful layouts and natural light to meaningful amenities and enduring materials, every decision is made with purpose—to create places that make everyday life better.
                              </p>

                         </div>

                    </div>
               </div>

          </section>
     );
};

export default Stats;