
import { motion } from "framer-motion";

import img1 from '../images/feat1.png'
import img2 from '../images/feat2.png'
import img3 from '../images/feat3.png'
import benefits from '../images/benefits3.png'

const features = [
  {
    title: "All in One Dashboard",
    desc: "Track livestreams, donations, events, and members from one place.",
    image: img1
  },
  {
    title: "Secure Donation",
    desc: "Easily manage church funds, merch sales, and transparency.",
    image: img2
  },
  {
    title: "Ministry Admin Tools",
    desc: "Whether you’re a church, interdenominational group, or podcaster — Worsship adapts to your needs.",
    image: img3
  },
];

export default function FeaturesYouWillLike() {
  return (
    <section className="w-full py-16 px-6 md:px-10">

      {/* TOP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row 
        items-start md:items-center justify-between gap-6"
      >
        {/* LEFT */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5E5F6B] leading-tight">
          Features you <br /> will like
        </h2>

        {/* TEXT */}
        <p className="text-[13px] font-medium text-[#5E5F6B] max-w-sm">
          Worsship gives your church or faith organization everything you need 
          to connect, grow, and serve — all from one powerful dashboard.
        </p>

        {/* BUTTON */}
        <button className="bg-[#2B04DB] hover:bg-[#2C20C7] transition 
        text-white px-8 py-2 cursor-pointer rounded-full font-medium">
          Get Started
        </button>




      </motion.div>

      {/* FEATURES GRID */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 gap-14">

        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col "
          >
            {/* IMAGE */}
            <div className="w-full max-w-[400px] h-[200px] rounded-2xl 
            overflow-hidden flex items-center justify-center">
              <img
                src={f.image}
                alt="feature"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-[14px] font-semibold text-[#3A3A40] mt-4">
              {f.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[12px] text-gray-600 mt-2  max-w-[280px] leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}





      </div>


    </section>
  );
}

