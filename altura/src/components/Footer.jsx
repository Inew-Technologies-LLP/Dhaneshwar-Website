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
      className="relative pt-12 sm:pt-16 pb-8 text-[#000000] overflow-hidden border-t border-[#BADFFB]/40"
      style={{
        background:
          "linear-gradient(135deg, #0A5E9D 0%, #72BFF8 35%, #BADFFB 70%, #F3F8FC 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Upper Content Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          {/* Mobile-Only Logo Block */}
          <div className="lg:hidden">
            <AlturaLogo className="w-[140px] sm:w-[180px] h-auto mb-1" />
            <p className="text-sm font-normal text-[#000000]/85 italic mt-0.5">
              The Sky Belongs to All.
            </p>
          </div>

          {/* Left Column: Address & Sales Enquiries */}
          <div className="space-y-4 max-w-xl">
            {/* Address */}
            <div className="text-xs sm:text-sm text-[#000000]/90 space-y-1 leading-relaxed">
              <p className="font-bold text-[#000000]">Address</p>
              <p>S. No. 50, Dudulgaon,</p>
              <p>Dehu–Alandi Road, Pune – 412105</p>
            </div>

            {/* Sales Enquiries */}
            <div className="pt-1 text-xs sm:text-sm text-[#000000]/90 space-y-1 leading-relaxed">
              <p className="font-bold text-[#000000]">Sales Enquiries</p>
              <p>
                <a href="tel:+917707975737" className="hover:underline font-medium">
                  +91 77079 75737
                </a>
              </p>
              <p>
                <a href="mailto:info@dhaneshwarrealty.com" className="hover:underline">
                  info@dhaneshwarrealty.com
                </a>
              </p>
              <p>
                <a href="mailto:Sales@dhaneshwarrealty.com" className="hover:underline">
                  Sales@dhaneshwarrealty.com
                </a>
              </p>
            </div>
          </div>

          {/* Desktop-Only Logo & Tagline (Positioned Bottom-Right of Upper Section) */}
          <div className="hidden lg:flex flex-col items-end text-right">
            <AlturaLogo className="w-[200px] xl:w-[230px] h-auto mb-1" />
            <p className="text-sm font-normal text-[#000000]/85 italic mt-0.5">
              The Sky Belongs to All.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[#000000]/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#000000]/80">
          {/* Left: Copyright */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-xs text-[#000000]/75 font-medium">
              © 2026 Dhaneshwar Realty. All rights reserved.
            </p>
          </div>

          {/* Center: Project by Dhaneshwar Realty (Clickable) */}
          <div className="text-center order-1 lg:order-2">
            <p className="text-xs text-[#000000]/90 font-medium">
              Project by{" "}
              <a
                href="https://www.dhaneshwarrealty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#000000] hover:underline cursor-pointer"
              >
                Dhaneshwar Realty
              </a>
            </p>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex gap-3 items-center justify-center order-3">
            {[
              { Icon: FaFacebookF, label: "Facebook" },
              { Icon: FaXTwitter, label: "Twitter" },
              { Icon: FaInstagram, label: "Instagram" },
            ].map(({ Icon, label }, index) => (
              <button
                key={index}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#192B3C] transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 shadow-xs cursor-pointer"
              >
                <Icon className="text-[13px]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;