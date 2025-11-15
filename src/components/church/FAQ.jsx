
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What is worsship?",
      answer:
        "Worsship is a platform designed to connect people through faith-based experiences, music, and communities.",
    },
    {
      id: 2,
      question: "Is worsship free?",
      answer:
        "Yes, Worsship is free to use with optional premium features for deeper engagement and exclusive events.",
    },
    {
      id: 3,
      question: "Can I receive request from my members?",
      answer:
        "Absolutely. You can share your testimonies and experiences with others to inspire and connect.",
    },
    {
      id: 4,
      question: "Can I find my congregation?",
      answer:
        "Absolutely. Worsship helps you locate and follow churches near or dear to you.",
    },
    {
      id: 5,
      question: "Can I customize my preferences?",
      answer:
        "Yes, Worsship allows you to personalize your feed, events, and worship experiences.",
    },
  ];

  const [activeId, setActiveId] = useState(4);

  const toggleFAQ = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold text-center text-[#2C2C31] mb-16"

      >
        Frequently asked Questions
      </motion.h2>

      {/* FAQ Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => {
          const isActive = activeId === faq.id;

          return (
            <motion.div
              key={faq.id}
              layout
              transition={{ layout: { duration: 0.4, ease: "easeOut" } }}
              className={`flex flex-col justify-between border rounded-xl cursor-pointer p-4 md:p-5 transition-all duration-300 ${isActive
                ? "bg-blue-50 border-blue-200 shadow-md"
                : "bg-white border-gray-200 hover:shadow-sm"
                }`}
              onClick={() => toggleFAQ(faq.id)}
            >
              {/* Top Row */}
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  {/* Number Circle */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold ${isActive
                      ? "bg-blue-100 text-[#100076]"
                      : "bg-gray-100 text-[#100076]"
                      }`}
                  >
                    {String(faq.id).padStart(2, "0")}
                  </div>

                  {/* Question */}
                  <p
                    className={`text-[#2C2C31] font-medium text-sm md:text-base leading-snug ${isActive ? "text-[#1E0E62]" : ""
                      }`}
                  >
                    {faq.question}
                  </p>
                </div>

                {/* Icon */}
                <motion.div
                  initial={false}
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-1 flex-shrink-0"
                >
                  {isActive ? (
                    <X size={16} className="text-[#100076]" />
                  ) : (
                    <Plus size={16} className="text-[#100076]" />
                  )}
                </motion.div>
              </div>

              {/* Answer Section */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 text-xs md:text-sm mt-2 ml-[3rem] leading-snug">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
