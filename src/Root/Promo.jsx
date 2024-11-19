import React from "react";
import { PROMO } from "../constants";
import PromoCard from "../components/PromoCard";
import { motion } from "framer-motion";

const Promo = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-10 bg-bgSecondary-light dark:bg-bgSecondary-dark "
      id="promo"
    >
      <div className="m-5 md:m-10 ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 text-center text-3xl tracking-wider lg:text-4xl text-primaryText-light font-bold dark:text-primaryText-dark font-Nunito"
        >
          Promo
        </motion.h2>
        <motion.div
          className="container flex flex-col justify-center gap-5 md:flex lg:grid lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // Trigger animation when 20% of the section is visible
        >
          {PROMO.map((props, index) => (
            <motion.div
              key={index}
              variants={cardVariants} // Apply individual card animation
            >
              <PromoCard props={props} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Promo;
