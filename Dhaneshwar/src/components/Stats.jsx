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
          <section className="px-9 py-20">

               <div className="relative overflow-hidden">

                    {/* Background Image */}

                    <img
                         // src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1800"
                         alt=""
                         className="h-[760px] w-full object-cover"
                    />

                    {/* Top Content */}

                    <div className="absolute left-0 top-0 w-full p-16">

                         <div className="max-w-[500px]">

                              <h2 className="text-[50px] font-medium leading-[58px] text-[#192B3C]">
                                   Designed with Purpose.
                                   Built with Trust.
                              </h2>

                              <p className="mt-8 text-[18px] leading-[38px] text-[#192B3C]">
                                   From exceptional locations to uncompromising quality,
                                   every Dhaneshwar Realty development is crafted to
                                   elevate everyday living. We believe a home should
                                   offer comfort, confidence, and enduring value.
                              </p>

                         </div>

                    </div>

                    {/* Statistics */}

                    <div className="absolute bottom-12 left-0 w-full px-12 lg:px-24">

                         <div className="grid grid-cols-2 gap-8 text-[#C8F5F3] md:grid-cols-4">

                              {stats.map((item) => (

                                   <div key={item.label}>

                                        <h3 className="text-[58px] font-light leading-none">

                                             {item.value}

                                             {item.suffix && (
                                                  <span className="ml-1 text-[28px]">
                                                       {item.suffix}
                                                  </span>
                                             )}

                                        </h3>

                                        <p className="mt-2 text-[18px]">
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