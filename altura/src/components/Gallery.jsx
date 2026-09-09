import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Use Vite's import.meta.glob to automatically import all images from the gallary folder
const imageModules = import.meta.glob('../images/gallary/*.{png,jpg,jpeg}', { eager: true, import: 'default' });
const customPositions = {
  "01_Altura1.png": "center 30%",
  "02_Altura.png": "center 30%",
  "03_Altura.png": "center 70%",
  "04_Altura.png": "center 90%",
  "05_Altura.png": "center 90%",
  "07_Altura.png": "center 70%",
  "13_Altura.png": "center 90%",
  "15_Altura.png": "center 90%",
};

const galleryItems = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, url], idx) => {
    const filename = path.split('/').pop();
    return { 
      id: idx + 1, 
      url,
      filename
    };
  });

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef(null);

  // Fallback if no images found
  const items = galleryItems.length > 0 ? galleryItems : [
    { id: 1, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200" }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    scrollToThumbnail(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    scrollToThumbnail(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const scrollToThumbnail = (index) => {
    if (thumbnailsRef.current) {
      const thumbnailWidth = 226 + 24; // width + gap (gap-6 is 24px)
      thumbnailsRef.current.scrollTo({
        left: index * thumbnailWidth - (thumbnailsRef.current.clientWidth / 2) + (thumbnailWidth / 2),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] text-center mb-10 tracking-tight">
          Gallery
        </h2>

        <div className="max-w-[1274px] mx-auto space-y-4">
          {/* Main Large Image Container (1274 x 522) */}
          <div className="relative w-full h-[340px] sm:h-[450px] lg:h-[522px] rounded-none overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url('${items[activeIndex].url}')`,
                backgroundPosition: customPositions[items[activeIndex].filename] || "center"
              }}
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#1D65AD] text-white p-3 rounded-full transition-colors z-20 backdrop-blur-xs"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#1D65AD] text-white p-3 rounded-full transition-colors z-20 backdrop-blur-xs"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Row of Thumbnails (226 x 149) with increased gap */}
          <div 
            ref={thumbnailsRef}
            className="flex gap-6 pt-2 overflow-x-auto pb-4 snap-x scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIndex(idx);
                  scrollToThumbnail(idx);
                }}
                className={`relative shrink-0 w-[180px] sm:w-[226px] aspect-[226/149] rounded-none overflow-hidden border-2 transition-all group snap-start ${
                  activeIndex === idx
                    ? "border-[#1D65AD] ring-2 ring-[#1D65AD]/30 scale-[1.02] z-10"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover"
                  style={{ 
                    backgroundImage: `url('${item.url}')`,
                    backgroundPosition: customPositions[item.filename] || "center"
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
