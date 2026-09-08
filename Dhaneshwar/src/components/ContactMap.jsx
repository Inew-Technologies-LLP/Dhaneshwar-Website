const ContactMap = () => {

    return (

        <section className="px-9 pb-20">

            <div className="mx-auto max-w-[1440px] overflow-hidden">

                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=Alandi,Pune&output=embed"
                    className="h-[420px] w-full border-0"
                    loading="lazy"
                />

            </div>

        </section>

    );

};

export default ContactMap;