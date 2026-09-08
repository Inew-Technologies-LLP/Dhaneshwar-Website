const PageHero = ({
    title,
    description,
    image,
}) => {
    return (
        <section className="px-9 pt-6">

            <div className="relative mx-auto h-[440px] max-w-[1440px] overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/30 to-transparent" />

                <div className="absolute bottom-12 left-12 max-w-[360px]">

                    <h1 className="text-[52px] font-medium text-white">
                        {title}
                    </h1>

                    <p className="mt-4 text-[17px] leading-7 text-white">
                        {description}
                    </p>

                </div>

            </div>

        </section>
    );
};

export default PageHero;