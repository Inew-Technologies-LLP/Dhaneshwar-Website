const Hero = () => {
     return (
          <section className="bg-white pt-3">
               <div
                    className="
                         relative
                         mx-3
                         sm:mx-5
                         lg:mx-9
                         h-[calc(100vh-94px)]
                         min-h-[500px]
                         lg:min-h-[650px]
                         overflow-hidden
                    "
               >
                    {/* Background Image */}

                    <img
                         // src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800"
                         alt="Hero"
                         className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/15" />

                    {/* Content */}

                    <div className="absolute inset-0 flex items-end">
                         <div
                              className="
                                   max-w-[620px]
                                   px-6
                                   pb-8
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
                                        mb-4
                                        text-3xl
                                        font-medium
                                        leading-tight
                                        text-white
                                        sm:text-4xl
                                        md:text-[42px]
                                        md:leading-[50px]
                                        lg:text-[50px]
                                        lg:leading-[60px]
                                   "
                              >
                                   Crafting Landmarks for Modern Living
                              </h1>

                              <p
                                   className="
                                        max-w-[580px]
                                        text-sm
                                        leading-7
                                        text-white
                                        sm:text-base
                                        md:text-[17px]
                                        md:leading-[28px]
                                        lg:text-[18px]
                                        lg:leading-[30px]
                                   "
                              >
                                   Discover thoughtfully designed residential
                                   spaces where contemporary architecture,
                                   premium amenities, and exceptional
                                   craftsmanship come together to create homes
                                   that inspire every day.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;