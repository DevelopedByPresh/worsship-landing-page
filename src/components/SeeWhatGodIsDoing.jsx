
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Heart, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Img1 from "./images/img1.png"
import Img2 from "./images/img2.png"
import Img3 from "./images/img3.png"




export default function SeeWhatGodIsDoing() {
    const gallery = [
        {
            image: Img1,
            title: "Lorem Ipsum Amet",
            likes: 412,
            comments: 140,
            tags: "#music #concert #conference #london #event #artist #dj #soundtrack #dance",
        },
        {
            image: Img2,
            title: "Lorem Ipsum Amet",
            likes: 412,
            comments: 140,
            tags: "#music #concert #conference #london #event #artist #dj #soundtrack #dance",
        },
        {
            image: Img3,
            title: "Lorem Ipsum Amet",
            likes: 412,
            comments: 140,
            tags: "#music #concert #conference #london #event #artist #dj #soundtrack #dance",
        },
        {
            image:
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
            title: "Lorem Ipsum Amet",
            likes: 412,
            comments: 140,
            tags: "#music #concert #conference #london #event #artist #dj #soundtrack #dance",
        },

        {
            image:
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
            title: "Lorem Ipsum Amet",
            likes: 412,
            comments: 140,
            tags: "#music #concert #conference #london #event #artist #dj #soundtrack #dance",
        },


        {
            image: Img1,
            title: "Lorem Ipsum Amet",
            likes: 412,
            comments: 140,
            tags: "#music #concert #conference #london #event #artist #dj #soundtrack #dance",
        },
    ];

    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const [focused, setFocused] = useState(0);

    useMotionValueEvent(scrollXProgress, "change", (latest) => {
        const index = Math.round(latest * (gallery.length - 1));
        setFocused(index);
    });

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    };

    return (
        <section className="w-full py-1 text-center overflow-hidden">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-4"
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E0E62] mb-4">
                    See What God is Doing
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-10">
                    Worsship changing lives, shaping experiences
                </p>
            </motion.div>

            {/* Arrows + Scrollable Row */}
            <div className="relative w-full flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="hidden md:flex absolute left-2 z-10 p-2 cursor-pointer rounded-full bg-white shadow-md hover:shadow-lg transition -translate-y-1/3 top-1/3"
                >
                    <ChevronLeft size={28} className="text-gray-700" />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="mt-5 flex gap-8 overflow-x-auto px-6 md:px-10 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
                >
                    {gallery.map((item, i) => {
                        const isFocused = i === focused;
                        return (
                            <motion.div
                                key={i}
                                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[260px] flex flex-col text-left transition-transform duration-300 ${isFocused ? "opacity-100" : "opacity-80"
                                    }`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                {/* Image Container - no border radius */}
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-50 object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </div>

                                {/* Post Info */}
                                <div className="flex items-center gap-6 text-gray-600 mt-3 px-1">
                                    <div className="flex items-center gap-1">
                                        <Heart size={18} />
                                        <span className="text-sm">{item.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircle size={18} />
                                        <span className="text-sm">{item.comments}</span>
                                    </div>
                                </div>

                                {/* Title + Tags */}
                                <p className="text-[#2C2C31] text-base md:text-sm">{item.title}</p>
                                <p className="text-gray-500 text-xs mt-1 leading-snug px-1">
                                    {item.tags}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>


                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="hidden md:flex absolute right-2 z-10 p-2 cursor-pointer rounded-full bg-white shadow-md hover:shadow-lg transition -translate-y-1/3 top-1/3"
                >
                    <ChevronRight size={28} className="text-gray-700" />
                </button>
            </div>

            {/* Hide scrollbar */}
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

