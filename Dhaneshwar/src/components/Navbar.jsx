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
        <header className="fixed top-0 left-0 z-50 w-full bg-[#192B3C] shadow-sm">
            <Container>
                <nav className="flex h-[72px] sm:h-[82px] items-center">

                    {/* Logo */}

                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Dhaneshwar Realty"
                            className="h-8 sm:h-10 w-auto object-contain"
                        />
                    </NavLink>

                    {/* Right Side */}

                    <div className="ml-auto flex items-center gap-3 sm:gap-4 md:gap-14">
                        <ul className={`${menuOpen ? "flex animate-fade-in shadow-2xl border-t border-white/10" : "hidden"} absolute left-0 right-0 top-[72px] sm:top-[82px] flex-col gap-4 bg-[#192B3C]/98 backdrop-blur-md px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-12 md:bg-transparent md:p-0 md:shadow-none md:border-t-0`}>
                            {navLinks.map((item) => (
                                <li key={item.title} className="w-fit">
                                    <NavLink
                                        to={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `relative inline-block text-base sm:text-[16px] font-normal transition-all duration-300 group py-1.5 md:py-1 ${isActive
                                                ? "text-[#BFECE8] font-medium"
                                                : "text-white hover:text-[#BFECE8]"
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span>{item.title}</span>
                                                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#BFECE8] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="h-9 sm:h-10 rounded-sm bg-[#B08A1E] px-3.5 text-xs font-medium text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-sm hover:shadow-md active:translate-y-0 sm:px-5 sm:text-sm md:h-8 md:px-8"
                            onClick={() => setShowInquiry(true)}
                        >
                            Inquire
                        </button>

                        <button
                            type="button"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            className="p-1.5 text-white md:hidden transition-transform duration-300 hover:scale-110"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? <X size={24} className="rotate-90 transition-transform duration-300" /> : <Menu size={24} className="transition-transform duration-300" />}
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