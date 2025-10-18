"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();
    const router = useRouter();

    const sections = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
    ];


    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const handleScroll = () => {
            let current = "";
            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop - 120;
                    const sectionHeight = section.offsetHeight;
                    if (
                        window.scrollY >= sectionTop &&
                        window.scrollY < sectionTop + sectionHeight
                    ) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);


    const handleClick = (id) => {
        if (pathname === "/") {
            const section = document.getElementById(id);
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/#${id}`);
        }
    };


    const links = (
        <>
            {sections.map(({ id, label }) => (
                <li key={id}>
                    <button
                        onClick={() => handleClick(id)}
                        className={`transition-all duration-300 ${activeSection === id ? "text-blue-500" : "text-gray-600"
                            } hover:text-blue-400`}
                    >
                        {label}
                    </button>
                </li>
            ))}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md z-50 px-6 md:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a
                    href="/"
                    className="btn btn-ghost normal-case text-xl md:text-2xl rounded-full font-bold text-primary hover:bg-white"
                >
                    Golam Robbani
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end">
                <Link
                    href="#contact"
                    className="btn btn-primary rounded-full md:px-6 py-2 text-white font-semibold shadow-lg hover:shadow-xl transition"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
