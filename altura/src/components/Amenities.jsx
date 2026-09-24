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
    <section id="amenities" className="py-6 sm:py-8 bg-white">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-light text-[#1D65AD] text-center mb-6 sm:mb-8 tracking-tight">
          Amenities
        </h2>

        {/* 4x4 Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 md:gap-12 max-w-[1050px] mx-auto">
          {amenitiesList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center p-3 sm:p-4 group cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 object-contain transition-all duration-300 [filter:brightness(0)_saturate(100%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(88%)_saturate(1450%)_hue-rotate(187deg)_brightness(91%)_contrast(92%)] ${item.scale || ""}`}
                  loading="lazy"
                />
              </div>
              <p className="text-sm sm:text-base font-light text-slate-700 group-hover:text-[#1D65AD] transition-colors duration-300 leading-snug">
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
