import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full flex justify-center py-5 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-gradient-to-b from-[#EDEBFF] to-[#FFFFFF] rounded-[32px] shadow-[0_0_60px_5px_rgba(83,55,252,0.25)] flex flex-col items-center text-center py-14 px-6"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1E0E62] leading-snug mb-4">
          Join millions of believers building a <br className="hidden md:block" />
          stronger faith community
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-base md:text-lg mb-8">
          Stream, connect and grow in the word, anywhere you are.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
  href="#"
  className="transition-transform hover:scale-105"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    alt="Get it on Google Play"
    className="h-10 md:h-11 w-auto"
  />
</a>

<a
  href="#"
  className="transition-transform hover:scale-105"
>
  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="Download on the App Store"
    className="h-10 md:h-11 w-auto"
  />
</a>

        </div>
      </motion.div>
    </section>
  );
}
