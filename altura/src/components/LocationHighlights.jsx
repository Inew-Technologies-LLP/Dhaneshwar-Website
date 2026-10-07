import { useState } from "react";
import {
  Car,
  GraduationCap,
  HeartPulse,
  Briefcase,
  ShoppingBag,
  Landmark,
} from "lucide-react";

const categories = [
  { id: "CONNECTIVITY", label: "CONNECTIVITY", icon: Car },
  { id: "EDUCATION", label: "EDUCATION", icon: GraduationCap },
  { id: "HEALTHCARE", label: "HEALTHCARE", icon: HeartPulse },
  { id: "EMPLOYMENT HUBS", label: "EMPLOYMENT HUBS", icon: Briefcase },
  { id: "SHOPPING & LEISURE", label: "SHOPPING & LEISURE", icon: ShoppingBag },
  { id: "LANDMARKS", label: "LANDMARKS", icon: Landmark },
];

const highlightsData = {
  CONNECTIVITY: [
    { name: "Dehu Alandi Road", distance: "0.5–1 km" },
    { name: "Pune Nashik Highway", distance: "2–3 km" },
    { name: "Spine Road", distance: "3–4 km" },
    { name: "Moshi Chowk", distance: "3–4 km" },
    { name: "Chinchwad Railway Station", distance: "12–14 km" },
    { name: "Pune Mumbai Highway", distance: "10–12 km" },
    { name: "Pune International Airport", distance: "14–16 km" },
    { name: "Upcoming Bharatmata Moshi Metro Station", distance: "1 km" },
  ],
  EDUCATION: [
    { name: "MIT Alandi Campus", distance: "2.5–3 km" },
    { name: "DnyanBhakti International School", distance: "2 km" },
    { name: "Rajmata Jijau / RJSPM College", distance: "2 km" },
    { name: "Sharadchandra Pawar College", distance: "1 km" },
    { name: "City Pride School", distance: "4 km" },
    { name: "Sri Sri Ravishankar Vidya Mandir", distance: "5–6 km" },
    { name: "COEP Chikali Campus", distance: "8 km" },
    { name: "SNBP International School & College", distance: "4–5 km" },
  ],
  HEALTHCARE: [
    { name: "Shree Multispeciality / nearby Dudulgaon Hospital", distance: "1 km" },
    { name: "Sainath Hospital", distance: "3 km" },
    { name: "Accord Hospitals", distance: "3–4 km" },
    { name: "Moshi Hospital", distance: "3–4 km" },
    { name: "Dr. D. Y. Patil Hospital", distance: "8–9 km" },
    { name: "Aditya Birla Memorial Hospital", distance: "12–14 km" },
  ],
  "EMPLOYMENT HUBS": [
    { name: "Bhosari MIDC", distance: "6–8 km" },
    { name: "Markal MIDC", distance: "8–10 km" },
    { name: "Talawade IT Park", distance: "9–12 km" },
    { name: "Chakan MIDC", distance: "10–12 km" },
    { name: "Hinjewadi IT Park", distance: "22–24 km" },
    { name: "Kharadi / EON IT Park", distance: "20–24 km" },
  ],
  "SHOPPING & LEISURE": [
    { name: "Moshi Market Yard", distance: "4–5 km" },
    { name: "D Mart, Moshi", distance: "5–6 km" },
    { name: "Spine City Mall", distance: "6–7 km" },
    { name: "Ankushrao Landge Natyagruha", distance: "5–6 km" },
    { name: "Grand Highstreet Mall", distance: "8–10 km" },
    { name: "City One Mall, Pimpri", distance: "12–13 km" },
  ],
  LANDMARKS: [
    { name: "Alandi", distance: "2–3 km" },
    { name: "Gajanan Maharaj Mandir", distance: "1 km" },
    { name: "Sai Baba Mandir", distance: "3–4 km" },
    { name: "Sant Dnyaneshwar Maharaj Samadhi Mandir", distance: "3–4 km" },
    { name: "Indrayani River Ghat", distance: "2–3 km" },
  ],
};

const LocationHighlights = () => {
  const [activeTab, setActiveTab] = useState("CONNECTIVITY");

  const items = highlightsData[activeTab] || highlightsData.CONNECTIVITY;

  // Split items evenly into 2 columns for centered desktop table
  const midPoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midPoint);
  const rightColumn = items.slice(midPoint);

  return (
    <section id="location" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            LOCATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mt-2 mb-4 tracking-tight">
            Connected to What Matters.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Set in Dudulgaon, Altura places everyday essentials, education, healthcare, employment hubs and key connections across North Pune and PCMC within convenient reach.
          </p>
        </div>

        {/* Category Tabs with Icons */}
        <div className="flex justify-start md:justify-center overflow-x-auto scrollbar-hide mb-10 pb-2 border-b border-slate-200">
          <div className="flex gap-2 sm:gap-4 md:gap-6 min-w-max mx-auto px-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer border-b-2 uppercase ${
                    isActive
                      ? "border-[#0A5E9D] text-[#0A5E9D] bg-[#F0F7FD]"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-[#0A5E9D]" : "text-slate-400"} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Centered 2-Column Table */}
        <div className="max-w-4xl mx-auto bg-[#F9FBFE] border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-4 relative">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-baseline justify-between border-b border-slate-200/70 pb-3 gap-4"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A5E9D] shrink-0">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            {/* Vertical Divider for desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200" />

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-baseline justify-between border-b border-slate-200/70 pb-3 gap-4"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A5E9D] shrink-0">
                    {item.distance}
                  </span>
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
