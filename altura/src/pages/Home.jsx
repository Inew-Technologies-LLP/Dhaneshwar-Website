import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectOverview from "../components/ProjectOverview";
import FlatConfig from "../components/FlatConfig";
import FeatureBanner from "../components/FeatureBanner";
import ArchitectsNote from "../components/ArchitectsNote";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Specification from "../components/Specification";
import LocationDetails from "../components/LocationDetails";
import LocationHighlights from "../components/LocationHighlights";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";

const Home = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => setIsInquiryOpen(true);
  const handleCloseInquiry = () => setIsInquiryOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#1D65AD] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections matching reference layout */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 3. Project Overview Section */}
        <ProjectOverview />

        {/* 4. Flat Config Section */}
        <FlatConfig />

        {/* 5. Wide Feature Render Banner */}
        <FeatureBanner />

        {/* 6. Architects Note Section */}
        <ArchitectsNote />

        {/* 7. Amenities Section */}
        <Amenities />

        {/* 8. Gallery Section */}
        <Gallery />

        {/* 9. Specification Section */}
        <Specification onOpenInquiry={handleOpenInquiry} />

        {/* 10. Location Details Section */}
        <LocationDetails />

        {/* 11. Location Highlights Section */}
        <LocationHighlights />

        {/* 12. FAQ Accordion Section */}
        <FAQ />
      </main>

      {/* 13. Get in Touch / Footer */}
      <Footer />

      {/* Lead Inquiry Modal Popup */}
      <InquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
    </div>
  );
};

export default Home;