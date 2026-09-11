import streetPhoto from "../images/streetPhoto.png";

const FeatureBanner = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1347px] mx-auto px-4 sm:px-6">
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[547px] rounded-none overflow-hidden border border-slate-200 shadow-md group">
          {/* Full Feature Render Image */}
          <img
            src={streetPhoto}
            alt="Altura Street Level Exterior Render"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ objectPosition: "center 85%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
