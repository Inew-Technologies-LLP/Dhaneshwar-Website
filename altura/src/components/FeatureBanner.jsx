import streetPhoto from "../images/webp gallary/04_Altura.webp";

const FeatureBanner = () => {
  return (
    <section className="py-6 lg:py-0 bg-white">
      <div className="max-w-[1347px] lg:max-w-none mx-auto px-4 sm:px-6 lg:px-0">
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[calc(100vh-64px)] lg:min-h-[600px] rounded-none overflow-hidden border border-slate-200 lg:border-none shadow-md lg:shadow-none group">
          {/* Full Feature Render Image */}
          <img
            src={streetPhoto}
            alt="Altura Architectural Render"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ objectPosition: "center 90%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
