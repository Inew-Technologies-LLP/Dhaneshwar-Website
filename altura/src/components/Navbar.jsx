import { useState } from "react";
import { Menu, X } from "lucide-react";
import AlturaLogo from "./AlturaLogo";

const Navbar = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Flat Config", href: "#flat-config" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-xs border-b border-[#BADFFB]/50"
      style={{
        background: "linear-gradient(90deg, #F3F8FC 0%, #BADFFB 30%, #72BFF8 60%, #BADFFB 85%, #F3F8FC 100%)"
      }}
    >
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-6 lg:px-10 h-16 sm:h-24 flex items-center justify-between">
        {/* Brand Logo with Wave Curve */}
        <a href="#home" className="flex items-center shrink-0">
          <AlturaLogo />
        </a>

        {/* Desktop Navigation & CTA Button (Right Aligned) */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
          <nav className="flex items-center space-x-6 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium py-1 transition-all duration-300 group ${
                  link.active ? "text-black font-bold" : "text-[#1A3561] hover:text-[#0A5E9D]"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0A5E9D] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenInquiry}
            className="w-[132px] h-[38px] flex items-center justify-center bg-[#0A5E9D] hover:bg-[#084B7E] text-white rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Inquire
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenInquiry}
            className="bg-[#0A5E9D] hover:bg-[#084B7E] text-white px-2.5 sm:px-4 py-1.5 rounded-sm text-[11px] sm:text-xs font-medium transition-all duration-300 shadow-xs hover:shadow-sm active:scale-95"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1A3561] p-1 sm:p-1.5 focus:outline-none transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} className="transition-transform duration-300 rotate-90" /> : <Menu size={22} className="transition-transform duration-300" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown with smooth animation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#BADFFB] px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#1A3561] hover:text-[#0A5E9D] py-2 border-b border-gray-100 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;