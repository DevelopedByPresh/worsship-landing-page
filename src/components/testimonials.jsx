import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import works from "./images/works.png"

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









  

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center text-center px-6 md:px-10 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-[#2C2C31] mb-4">
          Testimonials
        </h2>
        <p className="text-gray-[#5E5F6B] text-base md:text-lg mb-12">
          Real People. Real Faith. Real Stories
        </p>
      </motion.div>

      {/* Swipeable / Scrollable Row */}
      <motion.div
        ref={scrollRef}
        className="flex gap-8 md:gap-10 overflow-x-auto pb-10 w-full max-w-6xl scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {testimonials.map((item, i) => {
          const isFocused = i === focused;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              animate={{
                scale: isFocused ? 1.06 : 0.9,
                opacity: isFocused ? 1 : 0.6,
                backgroundColor: isFocused ? "#ffffff" : "#f3f3f3",
                boxShadow: isFocused
                  ? "0 10px 25px rgba(0,0,0,0.08)"
                  : "0 5px 15px rgba(0,0,0,0.05)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="flex-shrink-0 w-[360px] md:w-[440px] rounded-2xl px-10 py-8 relative"
            >
              <p className="text-gray-600 text-base leading-relaxed mb-6 text-center">
                {item.text}
              </p>

              {/* Avatar just below the card */}
              <div className="absolute -bottom-10 flex flex-col items-center w-full left-0">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                <h4 className="mt-3 text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <a
                  href={`https://${item.website}`}
                  className="text-indigo-600 text-sm hover:underline"
                >
                  {item.website}
                </a>
              </div>
            </motion.div>
          );
        })}


      </motion.div>
<br/>
<br/>
<br/>
<br/>
<br/>


   <motion.div
       initial={{ opacity: 0, x: -30 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
       className="flex justify-center overflow-hidden"
   >
       <img
           src={works}
           alt="Worship Feature"
           className="w-[105%] max-w-none object-contain scale-110  md:w-[70%] md:max-w-full md:scale-100"
       />
   </motion.div>

     
     


      {/* Hide scrollbars globally for this section */}
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

































