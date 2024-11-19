import React from "react";
import { ABOUT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="bg-bgSecondary-light dark:bg-bgSecondary-dark">
      <div className="p-9 md:p-11" id="about">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10 text-center text-3xl lg:text-4xl text-primaryText-light dark:text-primaryText-dark tracking-wide font-bold"
        >
          About Us
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full p-4 lg:w-1/2"
          >
            <video
              autoPlay
              loop
              muted
              src={ABOUT.image}
              type="video/mov"
              className="rounded-3xl lg:-rotate-3 rotate-3 duration-75"
            ></video>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full px-2 lg:w-1/2"
          >
            <h2 className="text-4xl tracking-tighter lg:text-6xl dark:text-primaryText-dark">
              {ABOUT.header}
            </h2>
            <div className="mb-8 mt-1 h-2 w-36 bg-yellow-300 lg:-rotate-3"></div>
            <p className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl dark:text-secondaryText-dark">
              {ABOUT.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
