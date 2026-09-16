import photo1 from "../images/photo1.png";
import design from "../images/design.png";

const Hero = () => {
     return (
          <section className="px-3 pt-3 sm:px-6 sm:pt-6 lg:px-9">
               <div
                    className="
                         group
                         relative
                         mx-auto
                         max-w-[1440px]
                         h-[520px]
                         sm:h-[640px]
                         md:h-[700px]
                         lg:h-[780px]
                         overflow-hidden
                    "
               >
                    {/* Background Image */}

                    <img
                         src={photo1}
                         alt="Hero"
                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Contrast Gradient Overlay for Readability */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />

                    {/* Decorative Pattern Overlay */}
                    <img
                         src={design}
                         alt=""
                         aria-hidden="true"
                         className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                    />

                    {/* Content */}

                    <div className="absolute inset-0 flex items-end animate-fade-in">
                         <div
                              className="
                                   max-w-[640px]
                                   px-4
                                   pb-6
                                   sm:px-10
                                   sm:pb-10
                                   md:px-14
                                   md:pb-14
                                   lg:px-20
                                   lg:pb-20
                              "
                         >
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
                                   Spaces designed for better living.                              
                              </h1>

                              <p
                                   className="
                                        max-w-[580px]
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
                                   We create thoughtfully planned environments where architecture, functionality, nature and craftsmanship come together to elevate everyday life
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;