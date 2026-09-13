import gymnasiumImg from "../images/amenities/1_gymnasium 1.png";
import swimmingPoolImg from "../images/amenities/2_swimming_pool 1.png";
import indoorGamesImg from "../images/amenities/3_indoor_games 1.png";
import multipurposeHallImg from "../images/amenities/4_multipurpose_hall 1.png";
import multipurposeCourtImg from "../images/amenities/5_multipurpose_court 1.png";
import outdoorFitnessImg from "../images/amenities/6_outdoor_fitness 1.png";
import reflexologyPathImg from "../images/amenities/7_reflexology_path 1.png";
import seatingAlcovesImg from "../images/amenities/8_seating_alcoves 1.png";
import yogaDeckImg from "../images/amenities/9_yoga_deck 1.png";
import kidsPlayAreaImg from "../images/amenities/10_kids_play_area 1.png";
import hammocksImg from "../images/amenities/11_hammocks 1.png";
import skydeckImg from "../images/amenities/12_skydeck 1.png";
import amphitheatreImg from "../images/amenities/13_amphitheatre 1.png";
import meditationDeckImg from "../images/amenities/14_meditation_deck 1.png";
import oxygenTrailImg from "../images/amenities/15_oxygen_trail 1.png";
import entranceLoungeImg from "../images/amenities/16_entrance_lounge_seating 1.png";
import societyOfficeImg from "../images/amenities/17_society_office 1.png";

const amenitiesList = [
  { id: 1, title: "Gymnasium", icon: gymnasiumImg },
  { id: 2, title: "Swimming Pool", icon: swimmingPoolImg },
  { id: 3, title: "Indoor Games", icon: indoorGamesImg },
  { id: 4, title: "Multipurpose Hall", icon: multipurposeHallImg },
  { id: 5, title: "Multipurpose Court", icon: multipurposeCourtImg },
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
  { id: 16, title: "Entrance Lounge Seating", icon: entranceLoungeImg },
  { id: 17, title: "Society Office", icon: societyOfficeImg },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] text-center mb-12 sm:mb-16 tracking-tight">
          Amenities
        </h2>

        {/* Amenities Responsive Grid with Centering */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {amenitiesList.map((item) => (
            <div
              key={item.id}
              className="w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1.25rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(16.666%-1.75rem)] min-w-[130px] max-w-[170px] aspect-square flex flex-col items-center justify-center text-center p-3 group cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-11 h-11 sm:w-13 sm:h-13 object-contain transition-all duration-300 [filter:brightness(0)_saturate(100%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(88%)_saturate(1450%)_hue-rotate(187deg)_brightness(91%)_contrast(92%)]"
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-[#1D65AD] transition-colors duration-300 leading-snug">
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

