import { Activity } from "lucide-react";

const Amenities = () => {
  // 12 amenity slots matching reference layout
  const amenitiesList = [
    { id: 1, title: "Outdoor sports" },
    { id: 2, title: "Outdoor sports" },
    { id: 3, title: "Outdoor sports" },
    { id: 4, title: "Outdoor sports" },
    { id: 5, title: "Outdoor sports" },
    { id: 6, title: "Outdoor sports" },
    { id: 7, title: "Outdoor sports" },
    { id: 8, title: "Outdoor sports" },
    { id: 9, title: "Outdoor sports" },
    { id: 10, title: "Outdoor sports" },
    { id: 11, title: "Outdoor sports" },
    { id: 12, title: "Outdoor sports" },
  ];

  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] text-center mb-12 tracking-tight">
          Amenities
        </h2>

        {/* 4x3 Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10 max-w-5xl mx-auto">
          {amenitiesList.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[188px] aspect-square mx-auto flex flex-col items-center justify-center text-center group p-2 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-black mb-2 sm:mb-4 group-hover:text-[#1D65AD] transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <Activity className="w-10 h-10 sm:w-16 sm:h-16 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-[#1D65AD] transition-colors duration-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
