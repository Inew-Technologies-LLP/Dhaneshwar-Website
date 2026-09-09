import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import InquiryModal from "./InquiryModal";
import logo from "../images/topbarlogo.png";

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About us",
        href: "/about",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

const Navbar = () => {
    const [showInquiry, setShowInquiry] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#192B3C]">
            <Container>
                <nav className="flex h-[82px] items-center">

                    {/* Logo */}

                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Dhaneshwar Realty"
                            className="h-10 w-auto object-contain"
                        />
                    </NavLink>

                    {/* Right Side */}

                    <div className="ml-auto flex items-center gap-14">
                        <ul className="flex items-center gap-12">
                            {navLinks.map((item) => (
                                <li key={item.title}>
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `text-[16px] font-normal transition-colors ${isActive
                                                ? "text-[#BFECE8]"
                                                : "text-white hover:text-[#BFECE8]"
                                            }`
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setShowInquiry(true)}
                            className="h-8 rounded-sm bg-[#B08A1E] px-8 text-sm font-medium text-white transition hover:brightness-105"
                        >
                            Inquire
                        </button>

                        <InquiryModal
                            open={showInquiry}
                            onClose={() => setShowInquiry(false)}
                        />
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;