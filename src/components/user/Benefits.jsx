
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import leftside from "../images/leftside.png";

const benefits = [
  "Simplify Digital Ministry",
  "Build and Grow Community",
  "Go Live Seamlessly",
  "Gain Real-Time Insights",
  "Verified & Trusted Platform",
  "Reach a Global Congregation",
];

export default function Benefits() {
  return (
  <section className="w-full py-10 px-6 md:px-10 bg-gradient-to-r from-white via-white to-[#F1E9FF]">


      <div className="
        max-w-6xl mx-auto 
        flex flex-col md:flex-row 
        items-start md:items-center 
        justify-center 
        gap-10 md:gap-24
      ">
        
        {/* LEFT SIDE */}
        <div className="max-w-md text-left">
          <h2 className="text-3xl md:text-2xl font-sans font-bold text-[#42424A] leading-snug">
            Benefits you will get
          </h2>

          {/* BENEFITS LIST */}
          <div className="mt-8 space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="h-5 w-5 rounded-full bg-[#3A0BFF] flex items-center justify-center">
                  <Check size={13} className="text-white" />
                </div>
                <p className="text-[11px] font-medium text-[#222]">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center w-full md:w-auto">
          <img
            src={leftside}
            className="w-[300px] md:w-[380px] rounded-xl object-cover mx-auto"
          />
        </div>

      </div>
    </section>
  );
}

