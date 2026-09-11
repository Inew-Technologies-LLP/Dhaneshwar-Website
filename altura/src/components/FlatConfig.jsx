import apartmentImg from "../images/apartment.png";

const FlatConfig = () => {
  const configs = [
    { type: "1BHK", image: apartmentImg },
    { type: "2BHK", image: apartmentImg },
    { type: "3BHK", image: apartmentImg },
  ];

  return (
    <section id="flat-config" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] mb-4 tracking-tight">
            Flat Config
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>

        {/* 3 Column Grid with Vertical Dividers matching Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-6">
          {configs.map((item, idx) => (
            <div
              key={item.type}
              className="relative flex flex-col items-center justify-center h-[229px] p-6 text-center group cursor-pointer transition-all duration-300"
            >
              {/* Apartment Image Box (149 x 149) - Seamless white background */}
              <div className="w-[149px] h-[149px] mb-4 relative flex items-center justify-center bg-white transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                <img
                  src={item.image}
                  alt={`${item.type} Layout`}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-md"
                />
              </div>

              {/* Title Badge in Black Light Font (20px) */}
              <h3 className="text-[20px] font-light text-black tracking-wide transition-colors duration-300 group-hover:text-[#1D65AD]">
                {item.type}
              </h3>

              {/* 229px Vertical Divider matching Project Overview */}
              {idx !== configs.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[229px] w-[1px] bg-slate-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlatConfig;
