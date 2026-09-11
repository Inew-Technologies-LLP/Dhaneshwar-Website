const PageHero = ({
    title,
    description,
    image,
    maxWidth = "max-w-[1440px]",
    height = "h-[608px]",
}) => {
    const desktopHeightClass = height === "h-[720px]" ? "lg:h-[720px]" : "lg:h-[608px]";

    return (
        <section className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-9">

            <div className={`group relative mx-auto h-[440px] sm:h-[520px] ${desktopHeightClass} ${maxWidth} overflow-hidden`}>

                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/30 to-transparent" />

                <div className="absolute bottom-7 left-5 max-w-[min(360px,calc(100%-2.5rem))] sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">

                    <h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-[52px]">
                        {title}
                    </h1>

                    <p className="mt-4 text-base leading-7 text-white sm:text-[17px]">
                        {description}
                    </p>

                </div>

            </div>

        </section>
    );
};

export default PageHero;