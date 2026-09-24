import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
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
          </div>

          {/* Right Side Links (6 cols): Our Company, Media, Legal */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4">
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
                  <li><a href="#gallery" className="hover:underline">Blogs</a></li>
                  <li><a href="#faq" className="hover:underline">News</a></li>
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6 border-t border-[#000000]/10">
          {/* On Desktop: Left (Socials lg:order-1), Right (Logo lg:order-2). On Mobile: Logo first (order-1), Socials below logo (order-2) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 lg:gap-8">
            {/* Logo: order-1 on mobile, lg:order-2 on desktop */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <AlturaLogo className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto" />
            </div>

            {/* Social Media Icons: order-2 on mobile (below logo), lg:order-1 on desktop (left side) */}
            <div className="order-2 lg:order-1 flex gap-2.5 items-center justify-center">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaXTwitter, label: "Twitter" },
                { Icon: FaInstagram, label: "Instagram" }
              ].map(({ Icon, label }, index) => (
                <button
                  key={index}
                  aria-label={label}
                  className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white text-[#192B3C] transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 shadow-xs cursor-pointer"
                >
                  <Icon className="text-[13px] lg:text-[16px]" />
                </button>
              ))}
            </div>
          </div>

          {/* Centered Copyright at bottom */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-[#000000]/70 font-semibold">
              ©2026 Dhaneshwar Realty. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;