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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo with Wave Curve */}
        <a href="#home" className="flex items-center">
          <AlturaLogo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors py-1 ${
                link.active ? "text-black font-bold" : "text-[#1A3561] hover:text-[#0A5E9D]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenInquiry}
            className="bg-[#0A5E9D] hover:bg-[#084B7E] text-white px-7 py-2.5 rounded-md text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            Inquire
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="bg-[#0A5E9D] text-white px-4 py-1.5 rounded-md text-xs font-medium"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1A3561] p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#BADFFB] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#1A3561] hover:text-[#0A5E9D] py-2 border-b border-gray-100"
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