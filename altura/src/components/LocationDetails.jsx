import { MapPin } from "lucide-react";

const LocationDetails = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#1D65AD] mb-3 tracking-tight">
            Location Details
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Conveniently located with seamless connectivity to key infrastructure, IT hubs, and entertainment.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[360px] sm:h-[450px] rounded-xl overflow-hidden border border-slate-300 shadow-md group">
          <iframe
            title="Altura Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30230.123456789!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />

          {/* Location Marker Overlay Card */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-lg border border-slate-200 flex items-center gap-3 max-w-xs z-10">
            <div className="p-2.5 bg-[#1D65AD] text-white rounded-full">
              <MapPin size={22} />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">ALTURA Residences</p>
              <p className="text-xs text-slate-500">Prime Connectivity Sector, Pune</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
