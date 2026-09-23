const ContactMap = () => {

    return (

        <section className="px-3 pb-8 sm:px-6 sm:pb-12 lg:px-9 lg:pb-16">

            <div className="mx-auto max-w-[1440px] overflow-hidden">

                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-medium text-[#192B3C] sm:text-2xl">Location &amp; Directions</h3>
                    <a
                        href="https://maps.app.goo.gl/hRWDPBT9r2PqtfdQA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-medium text-[#B38B17] hover:underline"
                    >
                        Get Directions on Google Maps &rarr;
                    </a>
                </div>

                <iframe
                    title="Dhaneshwar Construction Pvt Ltd Location & Directions"
                    src="https://maps.google.com/maps?q=Dhaneshwar+construction+pvt+ltd,Bhosari,Pune&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="h-[280px] sm:h-[380px] lg:h-[450px] w-full border-0"
                    loading="lazy"
                    allowFullScreen
                />

            </div>

        </section>

    );

};

export default ContactMap;