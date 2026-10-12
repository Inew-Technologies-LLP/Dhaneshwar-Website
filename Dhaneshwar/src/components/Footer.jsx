import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

import logo from "../images/footerlogo.png";
import design from "../images/design.png";

const Footer = () => {
    return (
        <footer className="relative bg-[#192B3C] text-white overflow-hidden">
            {/* Decorative Pattern Overlay */}
            <img
                src={design}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-30"
            />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
                    
                    {/* Top Left: Office Address, below that Site Address */}
                    <div className="space-y-8">
                        {/* Office Address */}
                        <div className="space-y-2.5 max-w-md">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BFECE8]">
                                Office Address
                            </h4>
                            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                                Sector 3, Plot 78/17,18, Indrayani Nagar Bhosari I.E., Bhosari, Pimpri Chinchwad, Pune-411026
                            </p>
                            <div className="pt-1.5 space-y-1 text-xs sm:text-sm text-white/80">
                                <p><span className="text-white/60">Phone:</span> +91 7707975737</p>
                                <p><span className="text-white/60">Email:</span> info@dhaneshwarrealty.com</p>
                            </div>
                        </div>

                        {/* Site Address */}
                        <div className="space-y-2.5 max-w-md">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BFECE8]">
                                Site Address
                            </h4>
                            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                                S.no-50, Dudulgaon, Dehu-Alandi road, Pune - 412105
                            </p>
                            <div className="pt-1.5 space-y-1 text-xs sm:text-sm text-white/80">
                                <p><span className="text-white/60">Project:</span> Altura (Ongoing)</p>
                                <p><span className="text-white/60">Location:</span> Dudulgaon, Pune</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Right: Logo & Text */}
                    <div className="space-y-4 lg:self-end flex flex-col items-start lg:items-end lg:text-right">
                        <img
                            src={logo}
                            alt="Dhaneshwar Realty"
                            className="w-[160px] sm:w-[190px] h-auto object-contain"
                        />
                        <p className="text-xs sm:text-sm text-white/75 max-w-md leading-relaxed">
                            Creating thoughtfully designed environments where architecture, functionality, nature and craftsmanship come together to elevate everyday life.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar: Copyright (left), Legal Links (center), Social Icons (right) */}
                <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-xs text-white/60">
                    <p className="text-center md:text-left">
                        &copy; 2026 Dhaneshwar Realty. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition">Terms &amp; Conditions</span>
                        <span className="hover:text-white cursor-pointer transition">Statutory Disclaimer</span>
                    </div>

                    <div className="flex justify-center md:justify-end items-center gap-3">
                        {[
                            { Icon: FaFacebookF, label: "Facebook", href: "#" },
                            { Icon: FaXTwitter, label: "Twitter", href: "#" },
                            { Icon: FaInstagram, label: "Instagram", href: "#" }
                        ].map(({ Icon, label, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                aria-label={label}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#B08A1E] hover:text-white hover:scale-110 active:scale-95"
                            >
                                <Icon className="text-xs" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;