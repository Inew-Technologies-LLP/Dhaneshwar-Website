import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AlturaLogo from "./AlturaLogo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer
      id="contact-us"
      className="relative pt-16 pb-8 text-[#000000] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A5E9D 0%, #72BFF8 35%, #BADFFB 70%, #F3F8FC 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Section Header */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] mb-8 sm:mb-12 tracking-tight">
          Get in Touch
        </h2>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 items-start">
          {/* Column 1: Pune & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-bold text-base text-[#000000]">Pune</h3>
            <p className="text-xs font-semibold text-[#000000]/90">Address</p>
            <div className="text-xs text-[#000000]/80 space-y-2.5 leading-relaxed max-w-sm">
              <div>
                <p className="font-semibold text-[#000000]">Office address:</p>
                <p>Sector 3, Plot 78/17,18, Indrayani Nagar, Bhosari I.E., Bhosari, Pimpri Chinchwad, Pune-411026</p>
              </div>
              <div>
                <p className="font-semibold text-[#000000]">Site address:</p>
                <p>S. No. 50, Dudulgaon, Dehu-Alandi Road, Pune -412105</p>
              </div>
              <div className="pt-1 space-y-1">
                <p><span className="font-semibold text-[#000000]">Email:</span> info@dhaneshwarrealty.com</p>
                <p><span className="font-semibold text-[#000000]">Mobile:</span> +91 7707975737</p>
              </div>
            </div>

            {/* Social Icons in White Circles */}
            <div className="flex items-center space-x-3 pt-3">
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

          {/* Column 2: Projects (2 cols - text removed per request) */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="font-bold text-sm text-[#000000]">Projects</h3>
            <ul className="space-y-1.5 text-xs text-[#000000]/80">
            </ul>
          </div>

          {/* Column 3: Our Company (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="font-bold text-sm text-[#000000]">Our Company</h3>
            <ul className="space-y-1.5 text-xs text-[#000000]/80">
              <li><a href="#architect-note" className="hover:underline">About Us</a></li>
              <li><a href="#architect-note" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 4: Media (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="font-bold text-sm text-[#000000]">Media</h3>
            <ul className="space-y-1.5 text-xs text-[#000000]/80">
              <li><a href="#press" className="hover:underline">Blogs</a></li>
              <li><a href="#news" className="hover:underline">News</a></li>
            </ul>
          </div>

          {/* Column 5: Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="font-bold text-sm text-[#000000]">Legal</h3>
            <ul className="space-y-1.5 text-xs text-[#000000]/80 font-medium">
              <li><a href="#privacy" className="hover:underline">Privacy & Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms & Condition</a></li>
            </ul>
          </div>
        </div>

        {/* Middle / Bottom Row: Subscribe Form & ALTURA Wave Logo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12">
          {/* Subscribe Block (Left / Center) */}
          <div className="md:col-span-7 space-y-3">
            <h3 className="font-bold text-base text-[#000000]">
              Subscribe for news updates
            </h3>
            {subscribed ? (
              <div className="text-xs bg-white text-emerald-700 p-2.5 rounded-md font-semibold max-w-md shadow-xs">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full bg-white px-4 py-2.5 text-xs rounded-none border border-slate-300 text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#0A5E9D] shadow-2xs"
                />
                <div>
                  <button
                    type="submit"
                    className="bg-[#75777A] hover:bg-[#5A5C5E] text-white px-6 py-2 text-xs font-medium rounded-sm transition-colors shadow-xs"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ALTURA Logo (Right Side) */}
          <div className="md:col-span-5 flex justify-start md:justify-end items-center max-w-full overflow-hidden">
            <AlturaLogo className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto" />
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-6 border-t border-[#000000]/10 text-center text-xs text-[#000000] font-semibold">
          ©2026 Dhaneshwar Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;