import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

import logo from "../images/footerlogo.png";

const Footer = () => {
    return (
        <footer className="mt-12 sm:mt-16 lg:mt-20 bg-[#192B3C] text-white">

            <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-9 sm:py-16">

                {/* Heading */}

                <h2 className="text-3xl font-light leading-none sm:text-5xl lg:text-[56px]">
                    Get in Touch
                </h2>

                {/* Links */}

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:mt-14 lg:grid-cols-5">

                    <div>

                        <h3 className="mb-3 sm:mb-6 text-xl sm:text-2xl lg:text-[32px] font-normal">
                            Pune
                        </h3>

                        <div className="space-y-2 sm:space-y-3 text-sm sm:text-[16px] leading-relaxed text-white/70">

                            <p className="font-medium text-white/90">Address</p>

                            <p>
                                Dhaneshwar Realty, Commercial Boulevard,
                                Alandi Road, Pune, Maharashtra 412105.
                            </p>

                            <p className="pt-2">
                                Email: info@dhaneshwar.com
                            </p>

                            <p>
                                Phone: +91 9876543210
                            </p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-3 sm:mb-6 text-xl sm:text-2xl lg:text-[32px] font-normal">
                            Projects
                        </h3>

                        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">

                            <p className="transition hover:text-white cursor-pointer">Altura</p>

                            <p className="transition hover:text-white cursor-pointer">Skyline Residency</p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-3 sm:mb-6 text-xl sm:text-2xl lg:text-[32px] font-normal">
                            Our Company
                        </h3>

                        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">

                            <p className="transition hover:text-white cursor-pointer">Story</p>

                            <p className="transition hover:text-white cursor-pointer">Testimonials</p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-3 sm:mb-6 text-xl sm:text-2xl lg:text-[32px] font-normal">
                            Media
                        </h3>

                        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">

                            <p className="transition hover:text-white cursor-pointer">Blogs</p>

                            <p className="transition hover:text-white cursor-pointer">News</p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-3 sm:mb-6 text-xl sm:text-2xl lg:text-[32px] font-normal">
                            Legal
                        </h3>

                        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">

                            <p className="transition hover:text-white cursor-pointer">Privacy Policy</p>

                            <p className="transition hover:text-white cursor-pointer">Terms & Conditions</p>

                        </div>

                    </div>

                </div>

                {/* Bottom Row */}

                <div className="mt-10 flex flex-col items-start gap-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between border-t border-white/10 pt-8">

                    {/* Social Icons */}

                    <div className="flex gap-3 sm:gap-4">

                        {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, index) => (

                            <button
                                key={index}
                                aria-label="Social Link"
                                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-[#192B3C] transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                            >
                                <Icon size={16} />
                            </button>

                        ))}

                    </div>

                    {/* Logo */}

                    <div>

                        <img
                            src={logo}
                            alt="Dhaneshwar Realty"
                            className="w-[140px] sm:w-[170px] h-auto object-contain"
                        />

                    </div>

                </div>

                {/* Copyright */}

                <div className="mt-8 text-center text-xs sm:text-[15px] text-white/60">

                    ©2026 Dhaneshwar Realty. All rights reserved.

                </div>
            </div>

        </footer>
    );
};

export default Footer;