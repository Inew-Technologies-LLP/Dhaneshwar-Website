import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

// import logo from "../assets/logo/logo.png";

const Footer = () => {
    return (
        <footer className="mt-20 bg-[#192B3C] text-white">

            <div className="mx-auto max-w-[1440px] px-9 py-16">

                {/* Heading */}

                <h2 className="text-[56px] font-light leading-none">
                    Get in Touch
                </h2>

                {/* Links */}

                <div className="mt-14 grid grid-cols-5 gap-12">

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

                <div className="mt-16 grid items-start gap-10 lg:grid-cols-[220px_1fr_220px]">

                    {/* Icons */}

                    <div className="flex gap-4 pt-[58px]">

                        {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, index) => (

                            <button
                                key={index}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#192B3C] transition hover:scale-105"
                            >
                                <Icon size={18} />
                            </button>

                        ))}

                    </div>

                    {/* Newsletter */}

                    <div className="max-w-[470px]">

                        <h3 className="mb-5 text-[30px] font-normal">
                            Subscribe for news updates
                        </h3>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
            h-[42px]
            w-full
            border
            border-[#D6D6D6]
            bg-[#EFEFEF]
            px-4
            text-[15px]
            text-[#192B3C]
            placeholder:text-[#8F8F8F]
            outline-none
        "
                        />

                        <button
                            className="
            mt-4
            h-[40px]
            border
            border-[#D6D6D6]
            bg-[#EFEFEF]
            px-7
            text-[15px]
            text-[#192B3C]
            transition
            hover:bg-[#E4E4E4]
        "
                        >
                            Subscribe
                        </button>

                    </div>
                    {/* Logo */}

                    <div className="flex justify-end pt-5">

                        <img
                            // src={logo}
                            alt="Dhaneshwar Realty"
                            className="w-[170px]"
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