
import { Mail } from "lucide-react";
import bgHero from "../images/shout2.png";
import { motion } from "framer-motion";

export default function JoinMovement() {
    return (
        <section className="w-full flex justify-center px-4 py-10">
            <div
                className="  w-full  max-w-4xl  rounded-3xl  relative overflow-hidden h-[300px] md:h-[270px] flex items-center justify-center ">


                {/* SMALLER CENTERED IMAGE */}
                <motion.img
                    src={bgHero}
                    alt="hero"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="
            absolute 
            inset-0
            w-full h-full 
            object-cover       /* now fills the reduced container */
            opacity-90 
          "
                />

                {/* DARK OVERLAY — also scaled to the smaller container */}
                <div className="absolute inset-0 bg-black/10" />

                {/* CONTENT */}
                <div className="relative text-center px-4 mt-4">
                    <h2 className="text-[20px] font-bold text-[#191A15] mb-3">
                        Join the Movement
                    </h2>

                    <p className="text-[#2C2C31] text-[12px]  max-w-xs mx-auto mb-6 text-sm">
                        Be one of the first to experience a platform created to connect
                        believers and ministries across the world.
                    </p>






                    <div className="flex flex-col items-center gap-3 max-w-xs mx-auto mt-2">

                        {/* INPUT FIELD */}
                        <div className="flex items-center bg-white rounded-full px-5 py-2 w-full shadow-md">
                            <Mail className="w-3 h-3 text-[#2B04DB] mr-3 " />
                            <input
                                type="email"
                                placeholder="Your official church mail address"
                                className="outline-none flex-1 text-sm"
                            />
                        </div>

                        {/* BUTTON  */}
                        <button className="bg-[#2B04DB] cursor-pointer text-white text-[10px] px-5 py-3 rounded-full shadow-md w-full hover:bg-[#2C20C7] transition">
                            Join Verified Churches on Worship
                        </button>

                    </div>


                    {/* DOT */}
                    <div className="mt-5 flex justify-center">
                        <div className="w-2 h-2 rounded-full bg-white/70"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}












