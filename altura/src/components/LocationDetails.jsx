import { ExternalLink } from "lucide-react";

const LocationDetails = () => {
  const mapUrl = "https://maps.google.com/?q=18.674055,73.885872";
  const embedUrl = "https://maps.google.com/maps?q=18.674055,73.885872&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="px-3 pb-8 sm:px-6 sm:pb-12 lg:px-9 lg:pb-16 pt-4 sm:pt-6 bg-white">
      <div className="mx-auto max-w-[1440px] overflow-hidden">
        {/* Header matching Dhaneshwar site */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-medium text-[#192B3C] sm:text-2xl">
            Location &amp; Directions
          </h3>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-medium text-[#B38B17] hover:underline"
          >
            Get Directions on Google Maps &rarr;
          </a>
        </div>

        {/* Map Container with Google Maps Info Card */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[450px] overflow-hidden border-0">
          {/* Iframe */}
          <iframe
            title="Altura Location & Directions"
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
          />

          {/* Google Maps Style Card on Map (Matching Dhaneshwar Site) */}
          <div className="absolute top-3 left-3 z-10 bg-white rounded-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.3)] p-3 w-[260px] sm:w-[290px] text-left pointer-events-auto select-none">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 pr-1">
                <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#202124] leading-tight">
                  Altura by Dhaneshwar
                </h4>
                <p className="mt-1 text-[11px] text-[#5f6368] leading-tight">
                  S.no-50, Dudulgaon, Dehu-Alandi road,
                  <br />
                  Pune, Maharashtra 412105, India
                </p>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Google Maps"
                  className="p-1 hover:bg-[#f1f3f4] rounded text-[#1a73e8] transition-colors"
                >
                  <ExternalLink size={16} strokeWidth={2.2} />
                </a>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Get Directions"
                  className="flex items-center justify-center w-7 h-7 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-full transition-colors shadow-xs"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M22.43 10.57L13.43 1.57C12.65 0.79 11.35 0.79 10.57 1.57L1.57 10.57C0.79 11.35 0.79 12.65 1.57 13.43L10.57 22.43C11.35 23.21 12.65 23.21 13.43 22.43L22.43 13.43C23.21 12.65 23.21 11.35 22.43 10.57ZM14 14.5V12H10V15H8V11C8 10.45 8.45 10 9 10H14V7.5L17.5 11L14 14.5Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Rating & Details Row */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1 text-[#5f6368]">
                <span className="font-semibold text-[#202124]">4.8</span>
                <span className="text-[#fbbc04] text-[12px] leading-none">★</span>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline"
                >
                  (38)
                </a>
                <span
                  title="Verified Information"
                  className="inline-flex items-center justify-center w-3 h-3 text-[9px] text-[#70757a] border border-[#dadce0] rounded-full cursor-help ml-0.5"
                >
                  i
                </span>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a73e8] hover:underline font-medium text-[11px]"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
