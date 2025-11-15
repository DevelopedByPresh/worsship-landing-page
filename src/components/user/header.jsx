
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Users, Star, Menu, X, ArrowUpRight } from "lucide-react";

import lines from "../images/lines.png";
import Group from "../images/Group.png";
import logos from "../images/logos.png";
import logo from "../images/Header.png";

export default function HeroHeader({ mode, setMode }) {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navLinks = ["Home", "Product", "FAQ", "Blog", "About Us"];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative overflow-hidden">

   
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4FF] via-[#F3EFFF] to-white" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute right-[-220px] top-[-220px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(92,62,255,0.45)_0%,transparent_70%)] pointer-events-none"
      />

      {/* NAVBAR */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
          isSticky ? "bg-[#2B04DB] shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src={isSticky ? logo : logos}
              alt="Worsship Logo"
              className={`transition-all duration-300 object-contain ${
                isSticky ? "w-8" : "w-30"
              }`}
            />
          </div>

          {/* CENTER NAV LINKS */}
          <div className="hidden md:flex flex-1 justify-center">
            <div
              className={`flex items-center gap-8 font-medium ${
                isSticky ? "text-white" : "text-gray-700"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                  className="hover:opacity-90 transition-colors text-sm"
                  style={{ color: isSticky ? "#ffffff" : undefined }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — LOGIN + CTA */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <a
              className="hover:opacity-90 transition-colors text-sm cursor-pointer"
              style={{ color: isSticky ? "#ffffff" : undefined }}
            >
              Login
            </a>

            <a
              href="#"
              className={`px-5 py-1 rounded-full text-sm shadow-md ${
                isSticky ? "bg-white text-[#100076]" : "bg-[#2B04DB] text-white"
              }`}
            >
              Join The WaitList
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden p-1 ${
              isSticky ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setNavOpen((s) => !s)}
          >
            {navOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#100076] text-white px-6 py-4 space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                  onClick={() => setNavOpen(false)}
                  className="block text-lg font-medium hover:opacity-90"
                >
                  {link}
                </a>
              ))}
            </div>




              {/* SWITCH BUTTONS ON MOBILE */}
            <div className="flex gap-2 mb-3 mt-2">
              <button
                onClick={() => setMode("church")}
                className={`px-3 py-1.5 text-sm rounded-full transition ${
                  mode === "church" ? "bg-white text-indigo-700 font-semibold" : "text-white border border-white/40"
                }`}
              >
                As a Church
              </button>

              <button
                onClick={() => setMode("user")}
                className={`px-3 py-1.5 text-sm rounded-full transition ${
                  mode === "user" ? "bg-white text-indigo-700 font-semibold" : "text-white border border-white/40"
                }`}
              >
                As a User
              </button>
            </div>

            <button className="mt-4 w-full rounded-full bg-white flex items-center justify-center gap-2 py-2 font-semibold text-[#100076]">
              Join the Waitlist
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#100076] text-white">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </motion.div>
        )}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-40 pt-28 pb-20 px-6 md:px-10 max-w-7xl mx-auto">

        {/* TOGGLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3 justify-center">
              <div className="flex items-center gap-2 mb-3 bg-white/70 backdrop-blur-md border border-white/30 rounded-full p-1">

                <button
                  onClick={() => setMode?.("church")}
                  className={`px-3 py-1.5 text-sm cursor-pointer rounded-full transition ${
                    mode === "church"
                      ? "bg-[#2B04DB] text-white font-semibold"
                      : "text-[#2B04DB] font-semibold"
                  }`}
                >
                  As a Church
                </button>

                <button
                  onClick={() => setMode?.("user")}
                  className={`px-3 py-1.5 text-sm cursor-pointer rounded-full transition ${
                    mode === "user"
                      ? "bg-[#2B04DB] text-white font-semibold"
                      : "text-[#2B04DB]"
                  }`}
                >
                  As a User
                </button>

              </div>
            </div>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#100076] leading-tight tracking-tight mb-6">
              Your Ministry.
              <br />
              Your People.
              <br />
              One Platform.
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "310px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <img src={lines} alt="" className="max-w-full" />
            </motion.div>

            <p className="text-[#4D4E57] text-sm leading-relaxed max-w-lg mt-4">
              Empower churches, ministries, and believers with tools for
              streaming, community, engagement, and spiritual growth — all in
              one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="bg-[#2B04DB] text-white px-7 py-1 rounded-full text-base text-sm font-semibold shadow-lg shadow-[#4C35F1]/30 hover:shadow-xl transition"
              >
                Join The WaitList
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 cursor-pointer text-gray-800 hover:text-[#4C35F1] font-semibold transition"
              >
                <span className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full shadow-sm">
                  <Play size={18} />
                </span>
                View Demo
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <img src={Group} alt="hero visual" className="w-full max-w-md" />
          </motion.div>

        </div>
      </div>
    </header>
  );
}
