import { useState, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Automatically import all images from images folder
const imageModules = import.meta.glob("../images/**/*.{webp,png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const galleryItemsData = [
  {
    id: 1,
    num: "01",
    filename: "ALTURA 01.webp",
    categories: ["ARCHITECTURE"],
    position: "center 30%",
  },
  {
    id: 2,
    num: "02",
    filename: "11_Altura.webp",
    categories: ["AMENITIES"],
    position: "center 50%",
  },
  {
    id: 3,
    num: "03",
    filename: "06_Altura.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 4,
    num: "04",
    filename: "ALTURA 02.webp",
    categories: ["ARCHITECTURE"],
    position: "center 30%",
  },
  {
    id: 5,
    num: "05",
    filename: "03_Altura.webp",
    categories: ["ARCHITECTURE"],
    position: "center 70%",
  },
  {
    id: 6,
    num: "06",
    filename: "04_Altura.webp",
    categories: ["ARCHITECTURE", "LIFESTYLE"],
    position: "center 90%",
  },
  {
    id: 7,
    num: "07",
    filename: "14_Altura.webp",
    categories: ["LIFESTYLE", "AMENITIES"],
    position: "center 50%",
  },
  {
    id: 8,
    num: "08",
    filename: "10_Altura.webp",
    categories: ["AMENITIES"],
    position: "center 50%",
  },
  {
    id: 9,
    num: "09",
    filename: "15_Altura.webp",
    categories: ["LIFESTYLE"],
    position: "center 90%",
  },
  {
    id: 10,
    num: "10",
    filename: "07_Altura.webp",
    categories: ["RESIDENCES"],
    position: "center 70%",
  },
  {
    id: 11,
    num: "11",
    filename: "08_Altura.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 12,
    num: "12",
    filename: "09_Altura.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 13,
    num: "13",
    filename: "13_Altura.webp",
    categories: ["AMENITIES", "LIFESTYLE"],
    position: "center 90%",
  },
  {
    id: 14,
    num: "14",
    filename: "05_Altura.webp",
    categories: ["ARCHITECTURE"],
    position: "center 90%",
  },
  // Flat Interior
  {
    id: 15,
    num: "15",
    filename: "LIVING ROOM 1.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 16,
    num: "16",
    filename: "LIVING ROOM 2.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 17,
    num: "17",
    filename: "BEDROOM.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 18,
    num: "18",
    filename: "BEDROOM 2.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 19,
    num: "19",
    filename: "KITCHEN.webp",
    categories: ["RESIDENCES"],
    position: "center 50%",
  },
  {
    id: 20,
    num: "20",
    filename: "FINAL BALCONY.webp",
    categories: ["RESIDENCES", "LIFESTYLE"],
    position: "center 50%",
  },
  // Amenity Building (excluding SWIMMING POOL, GYM, and COMMUNITY HALL)
  {
    id: 21,
    num: "21",
    filename: "AMPHITHEATER.webp",
    categories: ["AMENITIES", "LIFESTYLE"],
    position: "center 50%",
  },
  {
    id: 22,
    num: "22",
    filename: "COMMUNITY HALL 2.webp",
    categories: ["AMENITIES"],
    position: "center 50%",
  },
  {
    id: 23,
    num: "23",
    filename: "CO WORKING SPACE.webp",
    categories: ["AMENITIES", "LIFESTYLE"],
    position: "center 50%",
  },
  {
    id: 24,
    num: "24",
    filename: "LIBRARY & CO WORKING.webp",
    categories: ["AMENITIES"],
    position: "center 50%",
  },
  {
    id: 25,
    num: "25",
    filename: "LOUNGE SEATING.webp",
    categories: ["AMENITIES", "LIFESTYLE"],
    position: "center 50%",
  },
  {
    id: 26,
    num: "26",
    filename: "SNOOKER TABLE.webp",
    categories: ["AMENITIES", "LIFESTYLE"],
    position: "center 50%",
  },
  {
    id: 27,
    num: "27",
    filename: "TERRACE.webp",
    categories: ["AMENITIES", "LIFESTYLE"],
    position: "center 50%",
  },
];

// Map with resolved image URLs
const populatedGalleryItems = galleryItemsData.map((item) => {
  const matchKey = Object.keys(imageModules).find((path) =>
    path.toLowerCase().endsWith(item.filename.toLowerCase())
  );
  return {
    ...item,
    url: matchKey ? imageModules[matchKey] : "",
  };
});

const filterTabs = [
  { id: "ALL", label: "ALL" },
  { id: "ARCHITECTURE", label: "ARCHITECTURE" },
  { id: "RESIDENCES", label: "RESIDENCES" },
  { id: "AMENITIES", label: "AMENITIES" },
  { id: "LIFESTYLE", label: "LIFESTYLE" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const thumbnailsRef = useRef(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "ALL") return populatedGalleryItems;
    return populatedGalleryItems.filter((item) =>
      item.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const items = filteredItems.length > 0 ? filteredItems : populatedGalleryItems;

  const currentIdx = activeIndex < items.length ? activeIndex : 0;
  const mainItem = items[currentIdx];
  const sideItem1 = items[(currentIdx + 1) % items.length];
  const sideItem2 = items[(currentIdx + 2) % items.length];

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setActiveIndex(0);
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const prevIdx = currentIdx === 0 ? items.length - 1 : currentIdx - 1;
    setActiveIndex(prevIdx);
    scrollToThumbnail(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIdx + 1) % items.length;
    setActiveIndex(nextIdx);
    scrollToThumbnail(nextIdx);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const handleSelectThumbnail = (index) => {
    setActiveIndex(index);
    scrollToThumbnail(index);
  };

  const scrollToThumbnail = (index) => {
    if (thumbnailsRef.current) {
      const itemWidth = 160 + 16;
      thumbnailsRef.current.scrollTo({
        left:
          index * itemWidth -
          thumbnailsRef.current.clientWidth / 2 +
          itemWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 bg-white w-full overflow-hidden border-t border-slate-200">
      {/* Full Width Wrapper */}
      <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14">
        {/* Centered Top Tag, Title & Subtitle */}
        <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0A5E9D] uppercase">
            GALLERY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 mt-2 mb-4 tracking-tight">
            A Glimpse of Altura.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Explore the architecture, spaces and experiences envisioned for Altura.
          </p>
        </div>

        {/* Controls & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-slate-100 pb-4">
          {/* Filter Pills with Altura Theme Blue */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center md:justify-start">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterChange(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0A5E9D] text-white shadow-xs"
                      : "text-slate-500 hover:text-[#0A5E9D] hover:bg-[#F0F7FD]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right-Side Carousel Controls (Counter & Arrows - Desktop Only) */}
          <div className="hidden xl:flex items-center gap-3 self-center md:self-auto">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-[#0A5E9D] hover:bg-[#0A5E9D] hover:text-white transition-colors cursor-pointer active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="text-xs sm:text-sm font-medium text-slate-600 min-w-[45px] text-center tracking-wider">
              {currentIdx + 1} / {items.length}
            </span>

            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-[#0A5E9D] hover:bg-[#0A5E9D] hover:text-white transition-colors cursor-pointer active:scale-95"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Gallery Image Display (Clean Images Without Text Overlays) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mb-8 items-stretch w-full">
          {/* Main Large Image (Full width on Mobile, 8 cols on Desktop) */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full lg:col-span-8 relative h-[300px] sm:h-[460px] md:h-[560px] lg:h-[720px] xl:h-[760px] overflow-hidden bg-slate-100 group shadow-xs touch-pan-y select-none"
          >
            {mainItem && (
              <img
                src={mainItem.url}
                alt={`Altura View ${currentIdx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ objectPosition: mainItem.position }}
              />
            )}
          </div>

          {/* Right Column Stack (ONLY visible on Desktop `lg:`, hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 sm:gap-5 h-full">
            {/* Top Right Card */}
            {sideItem1 && (
              <div
                onClick={() =>
                  handleSelectThumbnail((currentIdx + 1) % items.length)
                }
                className="relative flex-1 min-h-[200px] sm:min-h-[250px] lg:min-h-0 lg:h-[calc(50%-10px)] overflow-hidden bg-slate-100 group cursor-pointer shadow-xs"
              >
                <img
                  src={sideItem1.url}
                  alt="Companion View 1"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: sideItem1.position }}
                />
              </div>
            )}

            {/* Bottom Right Card */}
            {sideItem2 && (
              <div
                onClick={() =>
                  handleSelectThumbnail((currentIdx + 2) % items.length)
                }
                className="relative flex-1 min-h-[200px] sm:min-h-[250px] lg:min-h-0 lg:h-[calc(50%-10px)] overflow-hidden bg-slate-100 group cursor-pointer shadow-xs"
              >
                <img
                  src={sideItem2.url}
                  alt="Companion View 2"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: sideItem2.position }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Full Width Numbered Thumbnail Strip */}
        <div
          ref={thumbnailsRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide pt-2 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, idx) => {
            const isSelected = currentIdx === idx;
            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => handleSelectThumbnail(idx)}
                className="flex-shrink-0 flex flex-col items-start cursor-pointer group snap-start"
              >
                <div
                  className={`w-[130px] sm:w-[170px] md:w-[200px] lg:w-[220px] aspect-[16/10] overflow-hidden transition-all duration-200 relative ${
                    isSelected
                      ? "ring-2 ring-[#0A5E9D] scale-[1.02]"
                      : "opacity-75 group-hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.url}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: item.position }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
