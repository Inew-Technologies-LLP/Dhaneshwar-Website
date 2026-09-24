import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AlturaLogo from "./AlturaLogo";

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="relative pt-10 sm:pt-12 pb-5 text-[#000000] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A5E9D 0%, #72BFF8 35%, #BADFFB 70%, #F3F8FC 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000000] mb-6 sm:mb-8 tracking-tight">
          Get in Touch
        </h2>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-2 items-start">
          {/* Column 1: Pune & Contact Info (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-bold text-base text-[#000000]">Pune</h3>
            <p className="text-xs font-semibold text-[#000000]/90">Address</p>
            <div className="text-xs text-[#000000]/80 space-y-2.5 leading-relaxed max-w-sm">
              <div>
                <p className="font-semibold text-[#000000]">Office address:</p>
                <p>Sector 3, Plot 78/17,18, Indrayani Nagar Bhosari I.E., Bhosari, Pimpri Chinchwad, Pune-411026</p>
              </div>
              <div>
                <p className="font-semibold text-[#000000]">Site address:</p>
                <p>S.no-50, Dudulgaon, Dehu-Alandi road, Pune -412105</p>
              </div>
              <div className="pt-1 space-y-1">
                <p><span className="font-semibold text-[#000000]">Email:</span> info@dhaneshwarrealty.com</p>
                <p><span className="font-semibold text-[#000000]">Mobile:</span> +91 7707975737</p>
              </div>
            </div>

            {/* Social Icons in White Circles */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <FaFacebookF size={13} />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <FaTwitter size={13} />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <FaInstagram size={13} />
              </a>
            </div>
          </div>

          {/* Right Side Container (6 cols): Links + Elevated Logo */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            {/* Links Grid (Our Company, Media, Legal) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {/* Our Company */}
              <div className="space-y-2">
                <h3 className="font-bold text-sm text-[#000000]">Our Company</h3>
                <ul className="space-y-1.5 text-xs text-[#000000]/80">
                  <li><a href="#architect-note" className="hover:underline">About Us</a></li>
                  <li><a href="#architect-note" className="hover:underline">Testimonials</a></li>
                </ul>
              </div>

              {/* Media */}
              <div className="space-y-2">
                <h3 className="font-bold text-sm text-[#000000]">Media</h3>
                <ul className="space-y-1.5 text-xs text-[#000000]/80">
                  <li><a href="#press" className="hover:underline">Blogs</a></li>
                  <li><a href="#news" className="hover:underline">News</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-2">
                <h3 className="font-bold text-sm text-[#000000]">Legal</h3>
                <ul className="space-y-1.5 text-xs text-[#000000]/80 font-medium">
                  <li><a href="#privacy" className="hover:underline">Privacy & Policy</a></li>
                  <li><a href="#terms" className="hover:underline">Terms & Condition</a></li>
                </ul>
              </div>
            </div>

            {/* ALTURA Wave Logo (Kept up in right column, with comfortable top spacing) */}
            <div className="flex justify-start md:justify-end items-center pt-6 lg:pt-10 max-w-full overflow-hidden">
              <AlturaLogo className="w-[200px] sm:w-[280px] md:w-[340px] lg:w-[380px] h-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-3 border-t border-[#000000]/10 text-center text-xs text-[#000000] font-semibold">
          ©2026 Dhaneshwar Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;