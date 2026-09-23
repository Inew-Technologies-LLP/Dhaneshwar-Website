import backedby1_img from "../images/backedby_1.png";
import backedby2_img from "../images/backedby_2.png";
import backedby3_img from "../images/backedby_3.png";

const BackedBy = () => {
    return (
        <section className="px-3 pt-4 pb-6 sm:px-6 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 lg:px-9">
            <div className="mx-auto max-w-[1440px]">
                <h2 className="mb-4 text-center text-2xl font-medium text-[#192B3C] sm:mb-6 sm:text-4xl lg:text-[50px]">
                    Backed by - Dhaneshwar Construction Pvt. Ltd.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {/* Image 1 */}
                    <div className="overflow-hidden group">
                        <img
                            src={backedby1_img}
                            alt="Shivaji Maharaj Monument"
                            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="overflow-hidden group">
                        <img
                            src={backedby2_img}
                            alt="Bridge Project"
                            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="overflow-hidden group">
                        <img
                            src={backedby3_img}
                            alt="Flyover and Railway Infrastructure"
                            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackedBy;