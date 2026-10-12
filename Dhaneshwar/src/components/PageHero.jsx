import design from "../images/design.png";

const PageHero = ({
    title,
    description,
    image,
    height,
    imageClassName = "",
    objectFit = "object-cover",
}) => {
    const heightClass = height || "h-[360px] sm:h-[480px] lg:h-[608px]";

    return (
        <section className={`group relative w-full ${heightClass} overflow-hidden bg-[#192B3C]`}>

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
                className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-30"
            />

            <div className="absolute inset-0 flex items-end">
                <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14">
                    <div className="max-w-xl text-center sm:text-left mx-auto sm:mx-0">
                        <h1 className="text-2xl font-medium leading-tight text-white sm:text-4xl lg:text-[52px]">
                            {title}
                        </h1>

                        <p className="mt-2 text-xs leading-relaxed text-white/90 sm:mt-4 sm:text-base sm:leading-7 lg:text-[17px]">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PageHero;