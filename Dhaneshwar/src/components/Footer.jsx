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
                className="pointer-events-none absolute -bottom-32 left-1/2 block h-auto w-[220%] max-w-none -translate-x-1/2 scale-[1.15] object-cover select-none opacity-40"
            />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 flex flex-col justify-between min-h-[460px] lg:min-h-[520px]">
                {/* Top Section */}
                <div>
                    {/* Header */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 lg:mb-10">
                        Get in Touch
                    </h2>

                    {/* 5 Column Navigation & Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
                        {/* Pune / Address */}
                        <div className="space-y-3">
                            <h3 className="text-xl lg:text-2xl font-medium text-white mb-2">
                                Pune
                            </h3>
                            <p className="text-sm font-semibold text-white/90">Address</p>
                            <div className="space-y-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                                <div>
                                    <p className="font-medium text-white/90">Office address:</p>
                                    <p>Sector 3, Plot 78/17,18, Indrayani Nagar, Bhosari I.E., Bhosari, Pimpri Chinchwad, Pune-411026</p>
                                </div>
                                <div>
                                    <p className="font-medium text-white/90">Site address:</p>
                                    <p>S. No. 50, Dudulgaon, Dehu-Alandi Road, Pune -412105</p>
                                </div>
                                <div className="pt-1 space-y-1">
                                    <p><span className="font-medium text-white/90">Email:</span> info@dhaneshwarrealty.com</p>
                                    <p><span className="font-medium text-white/90">Mobile:</span> +91 7707975737</p>
                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-medium text-white mb-4">
                                Projects
                            </h3>
                            <div className="space-y-2 text-xs sm:text-sm text-white/75">
                                <a
                                    href="https://altura.dhaneshwarrealty.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block transition hover:text-white"
                                >
                                    Altura
                                </a>
                            </div>
                        </div>

                        {/* Our Company */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-medium text-white mb-4">
                                Our Company
                            </h3>
                            <div className="space-y-2 text-xs sm:text-sm text-white/75">
                                <a href="/about" className="block transition hover:text-white">About Us</a>
                                <p className="transition hover:text-white cursor-pointer">Testimonials</p>
                            </div>
                        </div>

                        {/* Media */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-medium text-white mb-4">
                                Media
                            </h3>
                            <div className="space-y-2 text-xs sm:text-sm text-white/75">
                                <p className="transition hover:text-white cursor-pointer">Blogs</p>
                                <p className="transition hover:text-white cursor-pointer">News</p>
                            </div>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-medium text-white mb-4">
                                Legal
                            </h3>
                            <div className="space-y-2 text-xs sm:text-sm text-white/75">
                                <p className="transition hover:text-white cursor-pointer">Privacy &amp; Policy</p>
                                <p className="transition hover:text-white cursor-pointer">Terms &amp; Condition</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 lg:mt-12 pt-4">
                    {/* On Desktop: Left (Socials lg:order-1), Right (Logo lg:order-2). On Mobile: Logo first (order-1), Socials below logo (order-2) */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                        {/* Logo: order-1 on mobile, lg:order-2 on desktop */}
                        <div className="order-1 lg:order-2 flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Dhaneshwar Realty"
                                className="w-[130px] sm:w-[160px] lg:w-[190px] h-auto object-contain"
                            />
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
                                    className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white text-[#192B3C] transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
                                >
                                    <Icon className="text-[13px] lg:text-[16px]" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Centered Copyright at bottom */}
                    <div className="mt-6 lg:mt-8 text-center">
                        <p className="text-xs sm:text-sm text-white/60">
                            ©2026 Dhaneshwar Realty. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;