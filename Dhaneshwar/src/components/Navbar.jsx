import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    const [menuOpen, setMenuOpen] = useState(false);

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

                    <div className="ml-auto flex items-center gap-4 md:gap-14">
                        <ul className={`${menuOpen ? "flex animate-fade-in shadow-xl" : "hidden"} absolute left-0 right-0 top-[82px] flex-col gap-5 bg-[#192B3C] px-5 py-6 md:static md:flex md:flex-row md:items-center md:gap-12 md:bg-transparent md:p-0 md:shadow-none`}>
                            {navLinks.map((item) => (
                                <li key={item.title}>
                                    <NavLink
                                        to={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `relative text-[16px] font-normal transition-all duration-300 group py-1 ${isActive
                                                ? "text-[#BFECE8]"
                                                : "text-white hover:text-[#BFECE8]"
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {item.title}
                                                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#BFECE8] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="h-10 rounded-sm bg-[#B08A1E] px-3 text-xs font-medium text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-sm hover:shadow-md active:translate-y-0 sm:px-5 sm:text-sm md:h-8 md:px-8"
                            onClick={() => setShowInquiry(true)}
                        >
                            Inquire
                        </button>

                        <button
                            type="button"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            className="text-white md:hidden transition-transform duration-300 hover:scale-110"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? <X size={25} className="rotate-90 transition-transform duration-300" /> : <Menu size={25} className="transition-transform duration-300" />}
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