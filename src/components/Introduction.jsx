import React from 'react';
import { HERO_CONTENT } from "../constants";
import PrfilePic from "../assets/Profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } }
});

function Hero() {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-20 bg-neutral-900 bg-opacity-70 min-h-screen">
      <div className="flex flex-wrap items-stretch min-h-screen">
        {/* Left side (text) */}
        <div className="w-full lg:w-7/12 border-r-2 px-6 lg:px-16 flex flex-col justify-center mt-20">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl lg:text-7xl font-thin tracking-tight text-white mt-12 mb-4"
            >
              Who I Am
            </motion.h1>

            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-3xl py-6 font-light tracking-tighter text-neutral-200"
            >

                {HERO_CONTENT}
                            </motion.p>
          </div>
        </div>
        {/* Right side (image) */}
        <div className="w-full lg:w-5/12 flex justify-center items-center">
          <div className="w-full h-full max-w-screen-lg flex justify-center items-center">
            <img
              src={PrfilePic}
              alt="Profile"
              className=" w-full h-full max-w-[32rem] max-h-[40rem] object-cover  mt-8 lg:mt-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;