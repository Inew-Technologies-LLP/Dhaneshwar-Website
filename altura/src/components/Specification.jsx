import { Download } from "lucide-react";

const Specification = ({ onOpenInquiry }) => {
  const specSections = [
    // Top-Left Quadrant
    {
      id: "quadrant-1",
      columns: [
        {
          title: "Structure",
          items: [
            "Earthquake-resistant RCC framed structure",
            "AAC block masonry for internal and external walls",
          ],
        },
        {
          title: "Flooring and Tiling",
          items: [
            "1200 × 600 mm vitrified tiles in living and dining areas",
            "1200 × 600 mm vitrified tiles in kitchen",
            "600 × 600 mm vitrified tiles in bedrooms",
            "Matching tile skirting",
            "Anti-skid tiles in balconies, terraces and dry balcony",
          ],
        },
      ],
    },
    // Top-Right Quadrant
    {
      id: "quadrant-2",
      columns: [
        {
          title: "Kitchen",
          items: [
            "Granite kitchen platform with stainless-steel sink",
            "Designer tile dado up to 600 mm above the platform",
            "Provision for water purifier",
            "Provision for ductless chimney",
            "Convenient electrical points for kitchen appliances",
            "Washing machine provision in utility/dry balcony",
          ],
        },
        {
          title: "Bathrooms",
          items: [
            "Anti-skid tile flooring",
            "Designer wall tiles up to lintel level",
            "Sanitary ware and CP fittings from reputed brands",
            "Concealed plumbing",
            "Hot & cold water mixer",
            "Geyser provision",
            "Countertop wash basin with granite counter in master bathroom",
          ],
        },
      ],
    },
    // Bottom-Left Quadrant
    {
      id: "quadrant-3",
      columns: [
        {
          title: "Doors and Windows",
          items: [
            "Laminated main entrance door with premium fittings",
            "Digital lock for main entrance door*",
            "Quality internal flush doors",
            "Powder-coated aluminium windows",
            "Mosquito mesh for applicable windows",
            "Granite/stone window sills",
            "Aluminium ventilators in bathrooms",
          ],
        },
        {
          title: "Electrical and Security",
          items: [
            "Concealed fire-resistant copper wiring",
            "Premium modular switches\nELCB/RCCB electrical protection",
            "AC points in living room and bedrooms",
            "TV points in living room and master bedroom",
            "Exhaust fan points in bathrooms",
            "Adequate electrical points throughout the apartment",
            "Video door phone",
          ],
        },
      ],
    },
    // Bottom-Right Quadrant
    {
      id: "quadrant-4",
      columns: [
        {
          title: "Walls and Finishes",
          items: [
            "Smooth internal wall finish with premium emulsion paint",
            "POP/gypsum ceiling finish as specified",
          ],
        },
        {
          title: "xyz",
          items: [
            "Lorem Ipsum",
          ],
        },
      ],
    },
  ];

  return (
    <section id="specification" className="py-16 bg-white">
      <div className="max-w-[1314px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-light text-[#1D65AD] text-center mb-14 tracking-tight">
          Specification
        </h2>

        {/* 2x2 Grid Container with Divider Cross */}
        <div className="max-w-[1240px] mx-auto relative mb-16">
          {/* Vertical Divider Line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-slate-300" />

          {/* Horizontal Divider Line */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-2 right-2 h-px bg-slate-300" />

          {/* 4 Quadrants */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-12">
            {specSections.map((quadrant, qIdx) => (
              <div
                key={quadrant.id}
                className={`py-6 ${
                  qIdx % 2 === 0
                    ? "lg:pr-10 xl:pr-14"
                    : "lg:pl-10 xl:pl-14"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 lg:gap-8">
                  {quadrant.columns.map((col, cIdx) => (
                    <div key={cIdx} className="space-y-4">
                      <h3 className="text-base sm:text-lg font-light text-slate-800 tracking-normal">
                        {col.title}
                      </h3>
                      <ul className="space-y-3">
                        {col.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-slate-600 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0 mt-1.5" />
                            <span className="whitespace-pre-line">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Download Brochure Button */}
        <div className="text-center">
          <button
            onClick={onOpenInquiry}
            className="group inline-flex items-center gap-2 bg-[#1D65AD] hover:bg-[#154E88] text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specification;
