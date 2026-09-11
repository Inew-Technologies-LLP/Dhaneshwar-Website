import { useState } from "react";

const LocationHighlights = () => {
  const [activeTab, setActiveTab] = useState("Transport");

  const categories = [
    { id: "Transport", label: "Transport" },
    { id: "Hospitals", label: "Hospitals" },
    { id: "Malls", label: "Malls" },
    { id: "Multiplex", label: "Multiplex" },
    { id: "Parks", label: "Parks" },
    { id: "Schools", label: "Schools" },
  ];

  const highlightsData = {
    Transport: {
      left: [
        { name: "ABC bus stand", distance: "1 km" },
        { name: "Abc Metro Station", distance: "2 km" },
        { name: "Abc Airport", distance: "2 km" },
      ],
      right: [
        { name: "ABC bus stand", distance: "1 km" },
        { name: "Abc Metro Station", distance: "2 km" },
        { name: "Abc Airport", distance: "2 km" },
      ]
    },
    Hospitals: {
      left: [
        { name: "City Care Super-speciality", distance: "1.2 km" },
        { name: "Lifeline Multispeciality Clinic", distance: "2.0 km" },
        { name: "Apollo Medical Center", distance: "3.5 km" },
      ],
      right: [
        { name: "City Care Super-speciality", distance: "1.2 km" },
        { name: "Lifeline Multispeciality Clinic", distance: "2.0 km" },
        { name: "Apollo Medical Center", distance: "3.5 km" },
      ]
    },
    Malls: {
      left: [
        { name: "Phoenix Marketcity", distance: "2.5 km" },
        { name: "Central Shopping Arcade", distance: "3.0 km" },
        { name: "Nexus Westend Mall", distance: "4.2 km" },
      ],
      right: [
        { name: "Phoenix Marketcity", distance: "2.5 km" },
        { name: "Central Shopping Arcade", distance: "3.0 km" },
        { name: "Nexus Westend Mall", distance: "4.2 km" },
      ]
    },
    Multiplex: {
      left: [
        { name: "PVR Cinemas IMAX", distance: "1.8 km" },
        { name: "Cinepolis VIP Multiplex", distance: "2.5 km" },
        { name: "INOX Leisure Multiplex", distance: "3.2 km" },
      ],
      right: [
        { name: "PVR Cinemas IMAX", distance: "1.8 km" },
        { name: "Cinepolis VIP Multiplex", distance: "2.5 km" },
        { name: "INOX Leisure Multiplex", distance: "3.2 km" },
      ]
    },
    Parks: {
      left: [
        { name: "Central Botanical Park", distance: "0.8 km" },
        { name: "Joggers Eco Park", distance: "1.4 km" },
        { name: "Greenfield Children Park", distance: "2.1 km" },
      ],
      right: [
        { name: "Central Botanical Park", distance: "0.8 km" },
        { name: "Joggers Eco Park", distance: "1.4 km" },
        { name: "Greenfield Children Park", distance: "2.1 km" },
      ]
    },
    Schools: {
      left: [
        { name: "St. Mary's High School", distance: "1.0 km" },
        { name: "Vibgyor International School", distance: "2.2 km" },
        { name: "Orchid Public School", distance: "3.1 km" },
      ],
      right: [
        { name: "St. Mary's High School", distance: "1.0 km" },
        { name: "Vibgyor International School", distance: "2.2 km" },
        { name: "Orchid Public School", distance: "3.1 km" },
      ]
    },
  };

  const currentData = highlightsData[activeTab] || highlightsData.Transport;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-6">
        {/* Section Heading - Left Aligned */}
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] text-left mb-10 tracking-tight">
          Location highlights
        </h2>

        {/* Tab Row Container (Title Strip) - Left Aligned */}
        <div className="flex sm:grid sm:grid-cols-6 max-w-[1050px] min-h-[49px] bg-[#CBE3F9] mb-8 sm:mb-12 rounded-none overflow-x-auto scrollbar-hide">
          {categories.map((cat, idx) => {
            const isSeparatorVisible =
              idx !== categories.length - 1 &&
              activeTab !== cat.id &&
              activeTab !== categories[idx + 1]?.id;

            return (
              <div key={cat.id} className="relative shrink-0 sm:shrink flex-1 h-[49px] flex items-center justify-center">
                <button
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full h-full px-3 sm:px-2 text-xs sm:text-sm font-medium transition-colors text-center flex items-center justify-center whitespace-nowrap ${
                    activeTab === cat.id
                      ? "bg-[#1D65AD] text-white"
                      : "text-[#1D65AD] hover:bg-[#B7D8F7]"
                  }`}
                >
                  {cat.label}
                </button>

                {/* Darkened Vertical Separator cut slightly top/bottom, hidden around active tab */}
                {isSeparatorVisible && (
                  <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-[#1D65AD]/70 z-10 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* 2 Column Highlights Table - Centered */}
        <div className="max-w-[1050px] mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 relative">
            {/* Left Column */}
            <div className="space-y-6 px-2">
              {currentData.left.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <span className="text-base font-medium text-slate-800">{item.name}</span>
                  <span className="text-base font-normal text-slate-500">{item.distance}</span>
                </div>
              ))}
            </div>

            {/* Vertical Separator Line between columns */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-300" />

            {/* Right Column */}
            <div className="space-y-6 px-2">
              {currentData.right.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <span className="text-base font-medium text-slate-800">{item.name}</span>
                  <span className="text-base font-normal text-slate-500">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;
