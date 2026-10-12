import photo1 from "../images/photo1.png";
import design from "../images/design.png";

const Hero = () => {
     return (
          <section
               className="
                    group
                    relative
                    w-full
                    h-[calc(100vh-72px)]
                    sm:h-[calc(100vh-82px)]
                    min-h-[560px]
                    sm:min-h-[640px]
                    overflow-hidden
                    bg-[#192B3C]
               "
          >
               {/* Background Image */}

               <img
                    src={photo1}
                    alt="Hero"
                    className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
               />

               {/* Contrast Gradient Overlay for Readability */}

               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15" />

               {/* Decorative Pattern Overlay */}
               <img
                    src={design}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 left-1/2 hidden sm:block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-25"
               />

               {/* Content */}

               <div className="absolute inset-0 flex items-end animate-fade-in">
                    <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-10 sm:pb-12 md:px-14 md:pb-14 lg:px-20 lg:pb-20">
                         <div className="max-w-[640px] text-left">
                              <h1
                                   className="
                                        mb-3
                                        text-2xl
                                        font-medium
                                        leading-tight
                                        text-white
                                        sm:mb-4
                                        sm:text-4xl
                                        md:text-[42px]
                                        md:leading-[50px]
                                        lg:text-[50px]
                                        lg:leading-[60px]
                                   "
                              >
                                   Creating Places for Life to Flourish.                              
                              </h1>

                              <p
                                   className="
                                        max-w-[580px]
                                        mx-auto
                                        sm:mx-0
                                        text-xs
                                        leading-relaxed
                                        text-white/90
                                        sm:text-base
                                        md:text-[17px]
                                        md:leading-[28px]
                                        lg:text-[18px]
                                        lg:leading-[30px]
                                   "
                              >
                                   We create thoughtfully designed environments where architecture, functionality, nature and craftsmanship come together to make everyday living better.
                              </p>

                              <p
                                   className="
                                        mt-3
                                        max-w-[580px]
                                        mx-auto
                                        sm:mx-0
                                        text-xs
                                        leading-relaxed
                                        text-white/80
                                        sm:text-sm
                                        md:text-[15px]
                                        md:leading-[24px]
                                        lg:text-[16px]
                                        lg:leading-[26px]
                                   "
                              >
                                   Our approach goes beyond creating buildings. We think about how people will live, connect and grow within the places we create.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;