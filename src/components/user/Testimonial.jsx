import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ade from '../images/Ps.png'
import img1 from '../images/ash.png'
import img3 from '../images/chris2.png'

const testimonials = [
    {
        name: "John Peters",
        role: "Lead Pastor · Grace Chapel",
        message:
            "“Using our streaming platform has been an incredibly beautiful and enjoyable experience. It helped us reach more people effortlessly.”",
        img: ade
    },
    {
        name: "Sarah Thompson",
        role: "Worship Leader · Elevate Church",
        message:
            "“The platform is smooth, reliable and easy to use. It makes online ministry feel natural and connected.”",
        img: img1
    },
    {
        name: "Michael Lee",
        role: "Pastor · New Dawn Ministries",
        message:
            "“Our online presence has grown massively since we switched. This is truly the future of digital ministry.”",
        img: img3,
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () =>
        setIndex((index - 1 + testimonials.length) % testimonials.length);

    const current = testimonials[index];

    return (
        <section className="w-full py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2C2C31] mb-10">
                What Our Clients Say
            </h2>


            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-10 items-center">

                {/* LEFT — Testimonial Card */}
                <div className="bg-[#07006C] text-white p-8 rounded-2xl w-full md:w-[60%] min-h-[220px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.45 }}
                        >
                            <p className="text-sm opacity-80 mb-3">
                                {current.name} • {current.role}
                            </p>

                            <p className="text-[13px] md:text-[14px] leading-relaxed">
                                {current.message}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={prev}
                            className="h-10 w-10 flex cursor-pointer items-center justify-center bg-white text-[#07006C] rounded-full shadow"
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <button
                            onClick={next}
                            className="h-10 w-10 flex cursor-pointer items-center justify-center bg-[#4318FF] text-white rounded-full shadow"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* RIGHT — Image */}
                <div className="w-full md:w-[40%]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={current.img}
                            src={current.img}
                            className="w-full h-[260px] object-cover rounded-2xl"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.45 }}
                        />
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
