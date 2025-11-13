
import { Instagram, Youtube, Send, Music2 } from "lucide-react";
import { motion } from "framer-motion";
import footerLogo from "./images/foot.png";

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
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1E0E62] leading-snug mb-4">
                        Join millions of believers building a <br className="hidden md:block" />
                        stronger faith community
                    </h2>

                    <p className="text-gray-500 text-base md:text-lg mb-8">
                        Stream, connect and grow in the word, anywhere you are.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a href="#" className="transition-transform hover:scale-105">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                className="h-10 md:h-11 w-auto"
                            />
                        </a>
                        <a href="#" className="transition-transform hover:scale-105">
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                className="h-10 md:h-11 w-auto"
                            />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-[#2C2C31]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
                    {/* Column 1 - Logo & Contact */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src={footerLogo}
                                alt="Worsship Logo"
                                className="w-12 h-12 md:w-8 md:h-8 object-contain drop-shadow-sm"
                            />
                            <span className="text-xl font-semibold text-[#4C35F1] tracking-tight">
                                Worsship
                            </span>
                        </div>

                        <p className="text-sm font-semibold mb-2">Corporate Head Office:</p>
                        <p className="text-[11px] text-gray-600 mb-4 leading-relaxed">
                            3787 Jerry Dove Drive, Florence, South Carolina, 29501, United States.
                        </p>

                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Phone:</span>{" "}
                            <span className="text-[13px] text-gray-600">843-496-7759</span>
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Fax:</span>{" "}
                            <span className="text-[13px] text-gray-600">02-222264303</span>
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Email:</span>{" "}
                            <span className="text-[13px] text-gray-600">info@myworsship.com</span>
                        </p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h4 className="font-semibold text-[#3A3A40] mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-[13px] text-gray-600">
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Jobs</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Employeer</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Contact Us</li>
                        </ul>
                    </div>

                    {/* Column 3 - Others */}
                    <div>
                        <h4 className="font-semibold text-[#3A3A40] mb-3">Others</h4>
                        <ul className="space-y-2 text-[13px] text-gray-600">
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">How it works</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Terms and condition</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">About Us</li>
                        </ul>
                    </div>

                    {/* Column 4 - About Us */}
                    <div>
                        <h4 className="font-semibold text-[#3A3A40] mb-3">About Us</h4>
                        <ul className="space-y-2 text-[13px] text-gray-600">
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Company milestone</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Web mail</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Board of Directors</li>
                            <li className="hover:text-[#1E0E62] cursor-pointer transition-colors">Senior Management</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-12 border-t border-gray-200 pt-5">
                    <p className="text-sm text-[#2B04DB]">
                        ©2025 All rights reserved
                    </p>

                    <div className="flex items-center gap-5 mt-4 md:mt-0 text-[#002B6B]">
                        <Instagram className="w-5 h-5 hover:text-[#4C35F1] cursor-pointer transition-colors" />
                        <Send className="w-5 h-5 hover:text-[#4C35F1] cursor-pointer transition-colors" />
                        <Music2 className="w-5 h-5 hover:text-[#4C35F1] cursor-pointer transition-colors" />
                        <Youtube className="w-5 h-5 hover:text-[#4C35F1] cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

