
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Search, Church, Package2 } from "lucide-react";
import bg from "./images/bg.png";
import logo from "./images/Header.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navLinks = ["Home", "Features", "About", "Contact Us"];

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="header" className="relative h-[100vh] w-full overflow-hidden flex flex-col">
            {/* Background */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 10%, rgba(168,141,255,0.7) 0%, rgba(255,255,255,0.9) 50%, rgba(86,49,196,0.55) 100%),
            url(${bg})
          `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.95,
                }}
            ></div>

            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

            {/* Sticky nav wrapper */}
            <div
                className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${isSticky ? "bg-[#100076] shadow-md" : "bg-transparent"
                    }`}
            >
                {/* NAVBAR */}
                <motion.nav
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center justify-between max-w-7xl mx-auto w-full px-6 md:px-10 py-5"
                >
                    {/* LOGO */}
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Worsship Logo"
                            className="w-10 h-10 rounded-full object-cover shadow-sm border border-white/20"
                        />
                        <span className="font-semibold text-white text-xl tracking-tight">Worsship</span>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className={`hidden md:flex gap-8 font-medium ${isSticky ? "text-white" : "text-black/60"}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                                className="hover:text-gray-300 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* CTA BUTTON */}
                    <button
                        className={`hidden md:flex items-center gap-2 px-5 cursor-pointer py-2 rounded-full font-semibold transition ${isSticky
                                ? "border border-white text-white hover:bg-blue-800"
                                : "border border-white/60 text-white hover:bg-white/10 backdrop-blur-sm"
                            }`}
                    >
                        <span>Download App</span>
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                            <ArrowUpRight size={16} className="text-[#2B04DB]" />
                        </span>
                    </button>

                    {/* MOBILE TOGGLE */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </motion.nav>

                {/* MOBILE MENU */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-[70px] left-0 w-full bg-[#100076] text-white px-6 py-4 space-y-3 font-medium z-50"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-gray-300"
                            >
                                {link}
                            </a>
                        ))}
                        <button className="w-full border border-white text-white px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-800">
                            Download App
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                                <ArrowUpRight size={16} className="text-[#2B04DB]" />
                            </span>
                        </button>
                    </motion.div>
                )}
            </div>

            {/* HERO CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 30 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto px-6 mt-[4vh] pt-[80px]"
            >
                <span className="inline-flex items-center gap-2 bg-white text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow">
                    <Package2 size={16} className="text-indigo-700" />
                    Your #1 Platform for growing your faith
                </span>

                <h1 className="text-2xl md:text-6xl font-700 text-[#100076] mb-4 leading-tight tracking-tight">
                    Join the Global Faith <br className="hidden md:block" /> Community
                </h1>

                <p className="text-gray-900 text-lg md:text-xl font-small max-w-2xl mx-auto mb-8 leading-relaxed">
                    Worsship empowers believers and churches to connect, grow, and make a difference.
                </p>

                {/* SEARCH BAR */}
                <form className="w-full max-w-2xl flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex flex-col sm:flex-row flex-1 bg-white shadow-md border border-gray-200 overflow-hidden rounded-xl sm:rounded-full w-full">
                        <div className="flex items-center px-4 py-2 sm:py-3 flex-1 border-b sm:border-b-0 sm:border-r border-gray-300">
                            <Search size={18} className="text-indigo-700 mr-2" />
                            <input
                                type="text"
                                placeholder="e.g. Pentecostal"
                                className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm"
                            />
                        </div>

                        <div className="flex items-center px-4 py-2 sm:py-3 flex-1">
                            <Church size={18} className="text-indigo-700 mr-2" />
                            <input
                                type="text"
                                placeholder="e.g. House on the Rock"
                                className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 text-white font-semibold px-10 py-2 rounded-full hover:opacity-90 transition w-full sm:w-auto mt-3 sm:mt-0"
                        style={{ backgroundColor: "#2B04DB", cursor: "pointer" }}
                    >
                        <span>Search</span>
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
