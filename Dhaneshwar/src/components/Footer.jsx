import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

import logo from "../images/footerlogo.png";

const Footer = () => {
    return (
        <footer className="mt-20 bg-[#192B3C] text-white">

            <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-9 sm:py-16">

                {/* Heading */}

                <h2 className="text-4xl font-light leading-none sm:text-[56px]">
                    Get in Touch
                </h2>

                {/* Links */}

                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:mt-14 lg:grid-cols-5">

                    <div>

                        <h3 className="mb-6 text-[32px] font-normal">
                            Pune
                        </h3>

                        <div className="space-y-3 text-[16px] leading-7 text-white/70">

                            <p>Address</p>

                            <p>
                                ipsum dolor sit amet,
                                consectetur adipisicing elit,
                                sed do eiusmod tempor
                                incididunt.
                            </p>

                            <p className="pt-4">
                                email : info@dhaneshwar.com
                            </p>

                            <p>
                                Phone : +91 9876543210
                            </p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-6 text-[32px] font-normal">
                            Projects
                        </h3>

                        <div className="space-y-3 text-white/70">

                            <p>Altura</p>

                            <p>Skyline Residency</p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-6 text-[32px] font-normal">
                            Our Company
                        </h3>

                        <div className="space-y-3 text-white/70">

                            <p>Story</p>

                            <p>Testimonials</p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-6 text-[32px] font-normal">
                            Media
                        </h3>

                        <div className="space-y-3 text-white/70">

                            <p>Blogs</p>

                            <p>News</p>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-6 text-[32px] font-normal">
                            Legal
                        </h3>

                        <div className="space-y-3 text-white/70">

                            <p>Privacy Policy</p>

                            <p>Terms & Conditions</p>

                        </div>

                    </div>

                </div>

                {/* Bottom Row */}

                {/* Bottom Row */}

                <div className="mt-12 flex flex-col items-start gap-8 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">

                    {/* Social Icons */}

                    <div className="flex gap-4">

                        {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, index) => (

                            <button
                                key={index}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#192B3C] transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <Icon size={18} />
                            </button>

                        ))}

                    </div>

                    {/* Logo */}

                    <div>

                        <img
                            src={logo}
                            alt="Dhaneshwar Realty"
                            className="w-[170px] h-auto object-contain"
                        />

                    </div>

                </div>

                {/* Copyright */}

                <div className="mt-10 text-center text-[15px] text-white/60">

                    ©2026 Dhaneshwar Realty. All rights reserved.

                </div>
            </div>

        </footer>
    );
};

export default Footer;