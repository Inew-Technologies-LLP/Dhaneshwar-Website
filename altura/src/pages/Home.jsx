import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectOverview from "../components/ProjectOverview";
import Residences from "../components/Residences";
import FeatureBanner from "../components/FeatureBanner";
import ArchitectsNote from "../components/ArchitectsNote";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Specification from "../components/Specification";
import LocationHighlights from "../components/LocationHighlights";
import LocationDetails from "../components/LocationDetails";
import FAQ from "../components/FAQ";
import VisitAltura from "../components/VisitAltura";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";
import FloorPlanModal from "../components/FloorPlanModal";

const Home = () => {
  const [inquiryState, setInquiryState] = useState({
    isOpen: false,
    type: "enquire", // 'enquire', 'brochure', 'site_visit'
    config: "2 BHK",
  });

  const [floorPlanState, setFloorPlanState] = useState({
    isOpen: false,
    selectedConfig: "2 BHK",
  });

  const [isFloorPlanUnlocked, setIsFloorPlanUnlocked] = useState(false);

  const handleOpenInquiry = (options = {}) => {
    setInquiryState({
      isOpen: true,
      type: options.type || "enquire",
      config: options.config || "2 BHK",
    });
  };

  const handleCloseInquiry = () => {
    setInquiryState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenFloorPlan = (config = "2 BHK") => {
    setFloorPlanState({
      isOpen: true,
      selectedConfig: config,
    });
  };

  const handleCloseFloorPlan = () => {
    setFloorPlanState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleUnlockFloorPlan = () => {
    setIsFloorPlanUnlocked(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#0A5E9D] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 3. Introducing Altura / Project Overview Section */}
        <ProjectOverview />

        {/* 4. Residences (Flat Config) Section */}
        <Residences onOpenFloorPlan={handleOpenFloorPlan} />

        {/* 5. Feature Banner */}
        <FeatureBanner />

        {/* 6. Designed With Purpose (Architects Note) Section */}
        <ArchitectsNote />

        {/* 7. Amenities Section */}
        <Amenities />

        {/* 8. Gallery Section with Category Filters */}
        <Gallery />

        {/* 9. Specification Section with Interactive Accordions */}
        <Specification onOpenInquiry={handleOpenInquiry} />

        {/* 10. Location Highlights Section with Category Icons & Centered Table */}
        <LocationHighlights />

        {/* 11. Location Details / Map Section */}
        <LocationDetails />

        {/* 12. FAQ Section: Good to Know */}
        <FAQ />

        {/* 13. Visit Altura Section before Footer */}
        <VisitAltura onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* General Inquiry / Brochure / Site Visit Modal */}
      <InquiryModal
        isOpen={inquiryState.isOpen}
        onClose={handleCloseInquiry}
        initialData={inquiryState}
      />

      {/* Interactive Floor Plan Modal with Instant Viewer */}
      <FloorPlanModal
        isOpen={floorPlanState.isOpen}
        onClose={handleCloseFloorPlan}
        selectedConfig={floorPlanState.selectedConfig}
        isUnlocked={isFloorPlanUnlocked}
        onUnlockSuccess={handleUnlockFloorPlan}
      />
    </div>
  );
};

export default Home;