import { motion } from "framer-motion";
import { Play, MessageSquare, Users, Church, BookImage, MessageSquareText } from "lucide-react";
import logo from './images/logo.png'
import centerImage from "./images/Features.png"; 

export default function Discover() {
  const features = [
    {
      title: "My Church",
      description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
      icon: <Church size={32} className="text-red-500" />,
      bg: "bg-red-50",
    },
    {
      title: "Live Stream",
      description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
      icon: (
        <span className="text-white font-bold text-2xl tracking-tight"><img src={logo}/></span>
      ),
      bg: "bg-gradient-to-b from-[#573EFF] to-[#100076] text-white shadow-xl",
      highlight: true,
    },
    {
      title: "Request",
      description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
      icon: <MessageSquareText size={32} className="text-purple-500" />,
      bg: "bg-purple-50",
    },
    {
      title: "My Community",
      description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
      icon: <Users size={32} className="text-blue-400" />,
      bg: "bg-blue-50",
    },

      {
      title: "Merchandize",
      description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
      icon: <BookImage size={32} className="text-purple-500" />,
      bg: "bg-purple-50",
    },
  ];

  return (
    <section
      id="discover"
      className="w-full bg-white py-20 flex flex-col items-center justify-center text-center px-6 md:px-10"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E0E62] mb-4">
          Discover Our App Features
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-10">
          Explore how Worsship enhances your faith journey
        </p>
      </motion.div>

      {/* Scrollable Cards */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex gap-6 overflow-x-auto pb-6 w-full max-w-7xl justify-start"
  style={{
    scrollbarWidth: "none", 
    msOverflowStyle: "none" 
  }}
>
  {features.map((feature, index) => (
 

    <div
  key={index}
  className={`flex flex-col justify-between p-4 rounded-2xl min-w-[220px] h-[200px] ${feature.bg} transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer duration-300`}
>
  <div className="flex flex-col items-start">
    <div className="mb-3">{feature.icon}</div>
    <h3
      className={`text-base font-semibold ${
        feature.highlight ? "text-white" : "text-gray-800"
      }`}
    >
      {feature.title}
    </h3>
    <p
      className={`mt-1 text-sm ${
        feature.highlight ? "text-gray-200" : "text-gray-600"
      }`}
    >
      {feature.description}
    </p>
  </div>
</div>

  ))}
</motion.div>











      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <button className="bg-[#2B04DB] text-white font-semibold px-10 py-2 cursor-pointer rounded-full hover:opacity-90 transition">
          Get Started
        </button>

        <button className="flex items-center gap-2 text-gray-800 cursor-pointer hover:text-[#2B04DB] transition font-medium">
          <span className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full">
            <Play size={18} />
          </span>
          Watch Video
        </button>


      </motion.div>
      <br/>
      <br/>



      
{/* 
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
                  className="w-[120%] max-w-none md:w-auto md:max-w-full object-contain scale-110 md:scale-100 cursor-pointer"
              />
          </motion.div> */}






<motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex justify-center overflow-hidden"
>
    <img
        src={centerImage}
        alt="Worship Feature"
        className="w-[120%] max-w-none object-contain scale-110 cursor-pointer md:w-[70%] md:max-w-full md:scale-100"
    />
</motion.div>














    </section>
  );
}
