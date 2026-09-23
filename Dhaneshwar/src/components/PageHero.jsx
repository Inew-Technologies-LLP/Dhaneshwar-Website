import design from "../images/design.png";

const PageHero = ({
    title,
    description,
    image,
    maxWidth = "max-w-[1440px]",
    height,
    imageClassName = "",
    objectFit = "object-cover",
}) => {
    const heightClass = height || "h-[360px] sm:h-[480px] lg:h-[608px]";

    return (
        <section className="px-3 pt-3 sm:px-6 sm:pt-6 lg:px-9">

            <div className={`group relative mx-auto ${heightClass} ${maxWidth} overflow-hidden bg-[#192B3C]`}>

                <img
                    src={image}
                    alt={title}
                    className={`absolute inset-0 h-full w-full ${objectFit} transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#192B3C] via-[#192B3C]/50 to-transparent" />

                <img
                    src={design}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none"
                />

                <div className="absolute bottom-6 left-4 right-4 max-w-xl mx-auto sm:mx-0 sm:bottom-10 sm:left-10 sm:right-auto lg:bottom-12 lg:left-12 text-center sm:text-left">

                    <h1 className="text-2xl font-medium leading-tight text-white sm:text-4xl lg:text-[52px]">
                        {title}
                    </h1>

                    <p className="mt-2 text-xs leading-relaxed text-white/90 sm:mt-4 sm:text-base sm:leading-7 lg:text-[17px]">
                        {description}
                    </p>

                </div>

            </div>

        </section>
    );
};

export default PageHero;