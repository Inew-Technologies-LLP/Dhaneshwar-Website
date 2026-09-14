const ContactMap = () => {

    return (

        <section className="px-3 pb-12 sm:px-6 sm:pb-16 lg:px-9 lg:pb-20">

            <div className="mx-auto max-w-[1440px] overflow-hidden">

                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=Alandi,Pune&output=embed"
                    className="h-[260px] sm:h-[360px] lg:h-[420px] w-full border-0"
                    loading="lazy"
                />

            </div>

        </section>

    );

};

export default ContactMap;