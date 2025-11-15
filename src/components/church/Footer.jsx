
import { Instagram, Youtube, Send, Music2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import footerLogo from "../images/Header.png";







export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F5F2FF] to-[#D8D1FF]">
            {/* Soft radial glow blending into bottom gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(83,55,252,0.25)_0%,_transparent_70%)] pointer-events-none"></div>

            {/* CTA Section */}
            <section className="w-full flex justify-center py-20 px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full max-w-5xl bg-gradient-to-b from-[#EDEBFF] to-[#FFFFFF] rounded-[32px] shadow-[0_0_60px_5px_rgba(83,55,252,0.25)] flex flex-col items-center text-center py-14 px-6"
                >
                    <h2 className="text-[15px] md:text-2xl font-bold text-[#191A15] leading-snug mb-4">
                      Join Our Community
                    </h2>

                    <p className="text-gray-500 text-base text-[12px] text-[#2C2C31] mb-8">
                      No barriers. Just blessings. Start your Worsship journey today <br/> — free for your first 30 days.
                    </p>

                  

                 <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto mt-2">

    {/* INPUT FIELD */}
    <div className="flex items-center bg-white rounded-full px-6 py-3 w-full shadow-md">
        <Mail className="w-4 h-4 text-[#2B04DB] mr-3" />
        <input
            type="email"
            placeholder="Your official church mail address"
            className="outline-none flex-1 text-sm placeholder:text-[12px]"
        />
    </div>

    {/* BUTTON */}
    <button className="bg-[#2B04DB] cursor-pointer text-white text-[12px] px-6 py-3 rounded-full shadow-md w-full hover:bg-[#2C20C7] transition">
        Join Verified Churches on Worsship
    </button>

</div>

                </motion.div>
            </section>

       {/* Footer Content */}
<div className="relative z-10 w-full bg-[#2B04DB] px-6 py-16 text-white">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">

        {/* Column 1 */}
        <div>
            <div className="flex items-center gap-3 mb-6">
                <img
                    src={footerLogo}
                    alt="Worsship Logo"
                    className="w-12 h-12 md:w-8 md:h-8 object-contain drop-shadow-sm"
                />
            
            </div>

            <p className="text-sm font-semibold mb-2">Corporate Head Office:</p>
            <p className="text-[11px] text-white/80 mb-4 leading-relaxed">
                3787 Jerry Dove Drive, Florence, South Carolina, 29501, United States.
            </p>

            <p className="text-sm">
                <span className="font-semibold">Phone:</span>{" "}
                <span className="text-[13px] text-white/80">843-496-7759</span>
            </p>
            <p className="text-sm">
                <span className="font-semibold">Fax:</span>{" "}
                <span className="text-[13px] text-white/80">02-222264303</span>
            </p>
            <p className="text-sm">
                <span className="font-semibold">Email:</span>{" "}
                <span className="text-[13px] text-white/80">info@myworsship.com</span>
            </p>
        </div>

        {/* Column 2 */}
        <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-[13px]">
                {["Pricing", "Jobs", "Employeer", "Careers", "Contact Us"].map((item, i) => (
                    <li key={i} className="hover:opacity-80 cursor-pointer transition">
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Column 3 */}
        <div>
            <h4 className="font-semibold mb-3 text-white">Others</h4>
            <ul className="space-y-2 text-[13px]">
                {["How it works", "Terms and condition", "Privacy Policy", "About Us"].map((item, i) => (
                    <li key={i} className="hover:opacity-80 cursor-pointer transition">
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Column 4 */}
        <div>
            <h4 className="font-semibold mb-3 text-white">About Us</h4>
            <ul className="space-y-2 text-[13px]">
                {["Company milestone", "Web mail", "Board of Directors", "Senior Management"].map((item, i) => (
                    <li key={i} className="hover:opacity-80 cursor-pointer transition">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>

    {/* Footer Bottom */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-12  pt-5">
        <p className="text-sm text-white">©2025 All rights reserved</p>

        <div className="flex items-center gap-5 mt-4 md:mt-0 text-white">
            <Instagram className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
            <Send className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
            <Music2 className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
            <Youtube className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
        </div>
    </div>
</div>

        </footer>
    );
}

