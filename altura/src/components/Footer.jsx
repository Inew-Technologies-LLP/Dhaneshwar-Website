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
        {/* Contact Information on Left */}
        <div className="max-w-xl space-y-4 mb-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-[#000000]">
              ALTURA
            </h3>
            <p className="text-sm font-normal text-[#000000]/85 italic mt-0.5">
              The Sky Belongs to All.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-[#000000]/90 space-y-1 leading-relaxed font-normal">
            <p>S. No. 50, Dudulgaon,</p>
            <p>Dehu–Alandi Road, Pune – 412105</p>
          </div>

          <div className="pt-2 text-xs sm:text-sm text-[#000000]/90 space-y-1 leading-relaxed">
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

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[#000000]/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <AlturaLogo className="w-[140px] sm:w-[180px] md:w-[220px] h-auto" />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 items-center justify-center">
            {[
              { Icon: FaFacebookF, label: "Facebook" },
              { Icon: FaXTwitter, label: "Twitter" },
              { Icon: FaInstagram, label: "Instagram" },
            ].map(({ Icon, label }, index) => (
              <button
                key={index}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#192B3C] transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 shadow-xs cursor-pointer"
              >
                <Icon className="text-[14px]" />
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-xs text-[#000000]/75 font-medium">
              © 2026 Dhaneshwar Realty. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;