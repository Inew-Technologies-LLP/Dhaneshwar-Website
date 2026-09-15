import { useState } from "react";

const LocationHighlights = () => {
  const [activeTab, setActiveTab] = useState("Connectivity");

  const categories = [
    { id: "Connectivity", label: "Connectivity" },
    { id: "Hospitals", label: "Hospitals" },
    { id: "Malls", label: "Malls" },
    { id: "Employment Hub", label: "Employment Hub" },
    { id: "Landmarks", label: "Landmarks" },
    { id: "Schools", label: "Schools" },
  ];

  const highlightsData = {
    Connectivity: {
      left: [
        { name: "Dehu Alandi Road", distance: "0.5-1 km" },
        { name: "Pune Nashik Highway", distance: "2 -3 km" },
        { name: "Spine Road", distance: "3-4 km" },
        { name: "Moshi Chowk", distance: "3-4 km" },
      ],
      right: [
        { name: "Chinchwad Railway Station", distance: "12-14 km" },
        { name: "Pune Mumbai Highway", distance: "10-12 km" },
        { name: "Pune International Airport", distance: "14-16 km" },
        { name: "Upcoming Bharatmata Moshi Metro Station", distance: "1 km" },
      ],
    },
    Hospitals: {
      left: [
        { name: "Shree Multispeciality / nearby Dudulgaon hospital", distance: "1 km" },
        { name: "Sainath Hospital", distance: "3 km" },
        { name: "Accord Hospitals", distance: "3-4 km" },
        { name: "Moshi Hospital", distance: "3-4 km" },
      ],
      right: [],
    },
    Malls: {
      left: [
        { name: "Moshi Market Yard", distance: "4-5 km" },
        { name: "D Mart, Moshi", distance: "5-6 km" },
        { name: "Spine City Mall", distance: "6-7 km" },
        { name: "Ankushrao Landge Natyagruha", distance: "5-6 km" },
      ],
      right: [],
    },
    "Employment Hub": {
      left: [
        { name: "Bhosari MIDC", distance: "6-8 km" },
        { name: "Markal MIDC", distance: "8-10 km" },
        { name: "Talawade IT Park", distance: "9-12 km" },
        { name: "Chakan MIDC", distance: "10-12 km" },
      ],
      right: [
        { name: "Hinjewadi IT Park", distance: "22-24 km" },
        { name: "Kharadi / EON IT Park", distance: "20-24 km" },
      ],
    },
    Landmarks: {
      left: [
        { name: "Alandi", distance: "2-3 km" },
        { name: "Gajanan Maharaj Mandir", distance: "1 km" },
        { name: "Sai Baba Mandir", distance: "3-4 km" },
        { name: "Sant Dnyaneshwar Maharaj Samadhi Mandir", distance: "3-4 km" },
      ],
      right: [],
    },
    Schools: {
      left: [
        { name: "MIT Alandi Campus", distance: "2.5-3 km" },
        { name: "DnyanBhakti International School", distance: "2 km" },
        { name: "Rajmata Jijau / RJSPM College", distance: "2 km" },
        { name: "Sharadchandra Pawar College", distance: "1 km" },
      ],
      right: [
        { name: "City Pride School", distance: "4 km" },
        { name: "Sri Sri Ravishankar Vidya Mandir", distance: "5-6 km" },
        { name: "COEP Chikali Campus", distance: "8 km" },
        { name: "SNBP Internation School and College, Chikali", distance: "4-5 km" },
      ],
    },
  };

  const currentData = highlightsData[activeTab] || highlightsData.Connectivity;

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
                  className={`w-full h-full px-3 sm:px-2 text-xs sm:text-sm transition-colors text-center flex items-center justify-center whitespace-nowrap ${
                    activeTab === cat.id
                      ? "bg-[#1D65AD] text-white font-normal"
                      : "text-slate-700 font-light hover:bg-[#B7D8F7]"
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
                  <span className="text-sm sm:text-base font-light text-slate-600 tracking-wide">{item.name}</span>
                  <span className="text-sm sm:text-base font-light text-slate-500 shrink-0 ml-4">{item.distance}</span>
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
                  <span className="text-sm sm:text-base font-light text-slate-600 tracking-wide">{item.name}</span>
                  <span className="text-sm sm:text-base font-light text-slate-500 shrink-0 ml-4">{item.distance}</span>
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
