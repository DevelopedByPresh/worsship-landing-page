
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Search, Church, Package2, Mail } from "lucide-react";
import bg from "../images/bg.png";
import logo from "../images/Header.png";

export default function Header({ mode, setMode }) {
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
        className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
          isSticky ? "bg-[#100076] shadow-md" : "bg-transparent"
        }`}
      >
        {/* NAVBAR */}
        <motion.nav
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between max-w-7xl mx-auto w-full px-6 md:px-10 py-5 relative"
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
            className={`hidden md:flex items-center gap-2 px-5 cursor-pointer py-2 rounded-full font-semibold transition ${
              isSticky
                ? "border border-white text-white hover:bg-blue-800"
                : "border border-white/60 text-white hover:bg-white/10 backdrop-blur-sm"
            }`}
          >
            <span>Join the WaitList</span>
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

            <button className="w-full border  bg-[white] border-white text-[#2B04DB] px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-800">
              Join the WaitList
              <span className="flex items-center  bg-[#2B04DB] justify-center w-6 h-6 rounded-full">
                <ArrowUpRight size={16} className="text-white" />
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
        {/* SWITCH BUTTONS  */}
        <div className="flex items-center gap-2 mb-6 bg-white/70 backdrop-blur-md border border-white/30 rounded-full p-1">
          <button
            onClick={() => setMode("church")}
            className={`px-4 py-1.5 text-sm  cursor-pointer rounded-full transition ${
              mode === "church" ? "bg-[#2B04DB]  text-white font-semibold" : "bg-white text-white"
            }`}
          >
            As a Church
          </button>

          <button
            onClick={() => setMode("user")}
            className={`px-4 py-1.5 text-sm  cursor-pointer rounded-full transition ${
              mode === "user" ? "bg-white text-indigo-700 font-semibold" : "text-[#2B04DB] font-semibold"
            }`}
          >
            As a User
          </button>
        </div>

        <span className="inline-flex items-center gap-2 bg-white text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow">
          <Package2 size={16} className="text-indigo-700" />
          Your #1 Platform for growing your faith
        </span>

        <h1 className="text-3xl md:text-6xl font-bold text-[#100076] mb-4 leading-tight tracking-tight">
          Join the Global Faith <br className="hidden md:block" /> Community
        </h1>

        <p className="text-gray-900 text-lg md:text-xl font-small max-w-2xl mx-auto mb-8 leading-relaxed">
        Join the Waitlist to be among the first to  <br/>  Experience   Worsship, where  Technology meets Faith.
        </p>

 {/* SEARCH BAR */}
<div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-3 w-full max-w-xl mx-auto mt-2">

    {/* INPUT FIELD */}
    <div className="flex items-center bg-white rounded-full px-6 py-3 w-full shadow-md md:flex-1">
        <Mail className="w-4 h-4 text-[#2B04DB] mr-3" />
        <input
            type="email"
            placeholder="enter your email address"
            className="outline-none flex-1 text-sm placeholder:text-[12px]"
        />
    </div>

    {/* BUTTON */}
    <button className="
        bg-[#2B04DB] cursor-pointer text-white text-[12px]
        px-14 py-3 rounded-full shadow-md
        w-full md:w-auto
        hover:bg-[#2C20C7] transition
        md:h-full
    ">
        Join the WaitList
    </button>

</div>

  <p className="text-[#000000] text-[12px] mt-3 font-small max-w-2xl mx-auto mb-8 leading-relaxed">
    *Get early access, exclusive updates, and a special launch gift.
        </p>

      </motion.div>
    </section>
  );
}

