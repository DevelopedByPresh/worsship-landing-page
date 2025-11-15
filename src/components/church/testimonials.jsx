
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import works from "../images/works.png";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Johnny Doe",
            website: "ipsum.com",
            avatar:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            name: "Sarah Lin",
            website: "faithconnect.io",
            avatar:
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
            text: "I found a faith community that truly uplifts and supports me. This platform brought me closer to people who share my journey and beliefs.",
        },
        {
            name: "Michael Carter",
            website: "hopeworld.org",
            avatar:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            text: "The personalized worship recommendations helped me grow spiritually. It’s more than an app – it’s a movement.",
        },
        {
            name: "Emily Torres",
            website: "soulpath.net",
            avatar:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
            text: "A truly inspiring space for believers to connect and worship together, wherever they are in the world.",
        },
    ];

    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const [focused, setFocused] = useState(0);

    useMotionValueEvent(scrollXProgress, "change", (latest) => {
        const index = Math.round(latest * (testimonials.length - 1));
        setFocused(index);
    });

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    };






    return (
        <section className="w-full bg-white py-20 flex flex-col items-center text-center overflow-hidden">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E0E62] mb-4">
                    Testimonials
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-10">
                    Real People. Real Faith. Real Stories
                </p>
            </motion.div>

            {/* Arrows & Free-flowing Cards */}
            <div className="relative w-full flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="hidden md:flex absolute left-2 z-10 p-2 cursor-pointer rounded-full bg-white shadow-sm hover:shadow-md transition -translate-y-1/2 top-1/4"
                >
                    <ChevronLeft size={30} className="text-gray-700" />
                </button>

                {/* Scrollable Row */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 md:gap-10 overflow-x-auto pb-40 w-full scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing px-4"
                >
                    {testimonials.map((item, i) => {
                        const isFocused = i === focused;
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                animate={{
                                    scale: isFocused ? 1.06 : 0.92,
                                    opacity: isFocused ? 1 : 0.7,
                                    boxShadow: isFocused
                                        ? "0 15px 30px rgba(0,0,0,0.15)"
                                        : "0 5px 15px rgba(0,0,0,0.05)",
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                className="flex-shrink-0 relative w-[85%] sm:w-[320px] md:w-[420px] bg-white rounded-2xl px-8 md:px-10 py-10"
                            >
                                {/* Text with blue comment icons */}
                                <p className="text-gray-600 text-xs md:text-sm leading-snug mb-6 text-center">
                                    <span className="text-[#2B04DB] text-2xl mr-1">❝</span>
                                    {item.text}
                                    <span className="text-[#2B04DB] text-2xl ml-1">❞</span>
                                </p>


                                {/* Avatar outside the card */}

                                <div className="absolute -bottom-35 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                    <h4 className="mt-4 text-lg font-semibold text-gray-900">
                                        {item.name}
                                    </h4>
                                    <a
                                        href="/"
                                        className="text-indigo-600 text-sm hover:underline"
                                    >
                                        {item.website}
                                    </a>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="hidden md:flex absolute right-6 z-10 p-2 cursor-pointer rounded-full bg-white shadow-sm hover:shadow-md transition -translate-y-1/2 top-1/4"
                >
                    <ChevronRight size={30} className="text-gray-700" />
                </button>
            </div>

            {/* Image below testimonials */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center overflow-hidden mt-10"
            >
                <img
                    src={works}
                    alt="Worship Feature"
                    className="w-[100%] max-w-none object-contain scale-110 md:w-[70%] md:max-w-full md:scale-100"
                />
            </motion.div>

            {/* Hide scrollbars */}
            <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}











