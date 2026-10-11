import gymnasiumImg from "../images/amenities/1_gymnasium 1.png";
import swimmingPoolImg from "../images/amenities/2_swimming_pool 1.png";
import indoorGamesImg from "../images/amenities/3_indoor_games 1.png";
import multipurposeHallImg from "../images/amenities/4_multipurpose_hall 1.png";
import multipurposeCourtImg from "../images/amenities/multipurposecourt.png";
import outdoorFitnessImg from "../images/amenities/outdoorfitness.png";
import reflexologyPathImg from "../images/amenities/reflexology.png";
import seatingAlcovesImg from "../images/amenities/seatingalcoves.png";
import yogaDeckImg from "../images/amenities/yogadeck.png";
import kidsPlayAreaImg from "../images/amenities/10_kids_play_area 1.png";
import hammocksImg from "../images/amenities/hammock.png";
import skydeckImg from "../images/amenities/skydeck.png";
import amphitheatreImg from "../images/amenities/ampitheatre.png";
import meditationDeckImg from "../images/amenities/meditationdeck.png";
import oxygenTrailImg from "../images/amenities/oxygentrail.png";
import societyOfficeImg from "../images/amenities/societyoffice.png";

import amenityRender1 from "../images/Amenity Building/SWIMMING POOL.webp";
import amenityRender2 from "../images/Amenity Building/GYM.webp";
import amenityRender3 from "../images/Amenity Building/COMMUNITY HALL.webp";

const amenitiesList = [
  { id: 1, title: "Gymnasium", icon: gymnasiumImg },
  { id: 2, title: "Swimming Pool", icon: swimmingPoolImg },
  { id: 3, title: "Indoor Games", icon: indoorGamesImg },
  { id: 4, title: "Multipurpose Hall", icon: multipurposeHallImg },
  { id: 5, title: "Multipurpose Court", icon: multipurposeCourtImg, scale: "scale-125 sm:scale-135" },
  { id: 6, title: "Outdoor Fitness", icon: outdoorFitnessImg },
  { id: 7, title: "Reflexology Path", icon: reflexologyPathImg },
  { id: 8, title: "Seating Alcoves", icon: seatingAlcovesImg },
  { id: 9, title: "Yoga Deck", icon: yogaDeckImg },
  { id: 10, title: "Kids Play Area", icon: kidsPlayAreaImg },
  { id: 11, title: "Hammocks", icon: hammocksImg },
  { id: 12, title: "Skydeck", icon: skydeckImg },
  { id: 13, title: "Amphitheatre", icon: amphitheatreImg },
  { id: 14, title: "Meditation Deck", icon: meditationDeckImg },
  { id: 15, title: "Oxygen Trail", icon: oxygenTrailImg },
  { id: 16, title: "Society Office", icon: societyOfficeImg },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            AMENITIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mt-2 mb-4 tracking-tight">
            More to Every Day.
          </h2>
          <div className="text-slate-600 text-sm sm:text-base font-light leading-relaxed space-y-3 max-w-2xl mx-auto">
            <p>
              At Altura, life extends beyond the home. Thoughtfully planned amenities create spaces to move, play, connect and unwind, bringing something different to every part of the day.
            </p>
            <p>
              Whether its time spent staying active, being together or simply slowing down, each space is designed to make everyday living feel more fulfilling.
            </p>
            <p className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider pt-1">
              More ways to spend your time. More ways to enjoy every day.
            </p>
          </div>
        </div>

        {/* 4x4 Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {amenitiesList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center p-4 rounded-xs border border-slate-100 hover:border-[#BADFFB] hover:bg-[#F9FBFE] group transition-all duration-300 hover:-translate-y-1 hover:shadow-sm cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`w-12 h-12 sm:w-16 sm:h-16 object-contain transition-all duration-300 [filter:brightness(0)_saturate(100%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(88%)_saturate(1450%)_hue-rotate(187deg)_brightness(91%)_contrast(92%)] ${item.scale || ""}`}
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-[#0A5E9D] transition-colors duration-300 leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Image Placeholders / Renders below Amenities Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full mx-auto">
          {[
            { img: amenityRender1, title: "Swimming Pool & Deck" },
            { img: amenityRender2, title: "Fitness Gymnasium" },
            { img: amenityRender3, title: "Community Hall & Lounge" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90 transition-opacity" />
              <p className="absolute bottom-3.5 left-4 right-4 text-xs sm:text-sm font-medium text-white tracking-wide">
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
