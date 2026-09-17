import backedby1_img from "../images/backedby_1.png";
import backedby2_img from "../images/backedby_2.png";
import backedby3_img from "../images/backedby_3.png";
import dhaneshwarconstruction from "../images/dhaneshwarconstruction.png";

const BackedBy = () => {
    return (
        <section className="px-3 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-9">

            <div className="mx-auto max-w-[1440px]">

                <h2 className="mb-6 text-center text-2xl font-medium text-[#192B3C] sm:mb-12 sm:text-4xl lg:text-[50px]">
                    Backed by
                </h2>

                <div className="relative overflow-hidden">

                    <div className="relative z-20 space-y-2 sm:space-y-3">

                        {/* Top Row: 2 Images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">

                            {/* Image 1 with Dhaneshwar Construction Logo */}
                            <div className="relative overflow-hidden group">
                                <img
                                    src={backedby1_img}
                                    alt="Shivaji Maharaj Monument"
                                    className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Dhaneshwar Construction Logo */}
                                <div className="absolute left-4 top-4 z-30 sm:left-8 sm:top-8">
                                    <img
                                        src={dhaneshwarconstruction}
                                        alt="Dhaneshwar Construction Pvt Ltd"
                                        className="h-10 sm:h-16 lg:h-20 w-auto object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Image 2 */}
                            <div className="overflow-hidden group">
                                <img
                                    src={backedby2_img}
                                    alt="Bridge Project"
                                    className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                        </div>

                        {/* Bottom Row: Image 3 kept unstretched at original aspect ratio */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                            <div className="overflow-hidden group">
                                <img
                                    src={backedby3_img}
                                    alt="Flyover and Railway Infrastructure"
                                    className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BackedBy;