import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import InquiryModal from "./InquiryModal";
import logo from "../images/topbarlogo.png";
import projects from "../data/projects";

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About Us",
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
    const [showProjects, setShowProjects] = useState(false);
    const [projectQuery, setProjectQuery] = useState("");
    const filteredProjects = projects.filter((project) => {
        const searchText = `${project.name} ${project.city} ${project.status}`.toLowerCase();
        return searchText.includes(projectQuery.trim().toLowerCase());
    });

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#192B3C] shadow-sm">
            <Container>
                <nav
                    className="relative flex h-[72px] sm:h-[82px] items-center"
                    onMouseLeave={() => setShowProjects(false)}
                >

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
                                <li
                                    key={item.title}
                                    className="relative w-fit"
                                    onMouseEnter={() => item.title === "Projects" && setShowProjects(true)}
                                >
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

                        <div
                            className={`fixed left-0 right-0 top-[72px] z-50 hidden transition-all duration-200 md:block sm:top-[82px] ${showProjects ? "visible opacity-100" : "invisible opacity-0"}`}
                            onMouseEnter={() => setShowProjects(true)}
                        >
                            <div className="relative min-h-[529px] w-full bg-[#192B3C] px-6 py-6 shadow-2xl ring-1 ring-white/10 sm:px-10">
                                <button
                                    type="button"
                                    aria-label="Close projects preview"
                                    className="absolute right-6 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#192B3C]"
                                    onClick={() => setShowProjects(false)}
                                >
                                    <X size={13} strokeWidth={3} />
                                </button>

                                <div className="absolute right-14 top-7 z-10 w-[230px]">
                                    <input
                                        type="search"
                                        aria-label="Search projects"
                                        placeholder="Search Projects"
                                        value={projectQuery}
                                        onChange={(event) => setProjectQuery(event.target.value)}
                                        className="h-10 w-full rounded-full border-0 bg-white px-4 text-sm text-[#192B3C] outline-none placeholder:text-gray-400"
                                    />

                                </div>

                                <div className="grid grid-cols-1 gap-8 pr-0 md:grid-cols-2 md:gap-12 md:pr-[300px]">
                                    {filteredProjects.map((project) => (
                                        <div key={project.id} className="flex items-start gap-5">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="h-[360px] w-[260px] shrink-0 object-cover"
                                            />

                                            <div className="text-white">
                                                <h2 className="text-4xl font-medium leading-none">
                                                    {project.name}
                                                </h2>
                                                <p className="mt-2 text-base text-white/60">
                                                    {project.city.split(",")[0]}
                                                </p>
                                                <p className="mt-5 max-w-[210px] text-sm leading-relaxed text-white/90">
                                                    Description about the project, Project Image
                                                </p>
                                                <NavLink
                                                    to={`/projects?project=${project.id}`}
                                                    onClick={() => setShowProjects(false)}
                                                    className="mt-5 inline-block text-sm text-white underline underline-offset-4"
                                                >
                                                    View More
                                                </NavLink>
                                            </div>
                                        </div>
                                    ))}

                                    {!filteredProjects.length && (
                                        <p className="text-sm text-white/70">
                                            No projects found.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

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