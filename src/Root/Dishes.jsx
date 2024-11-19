import React, { useState } from "react";
import {
  LINK,
  JUICE,
  BURGER,
  SNACK,
  PIZZA,
  SALAD,
  SMOOTHIE,
  FOOD,
} from "../constants";
import DishCard from "../components/DishCard";
import { motion } from "motion/react";

const Dishes = () => {
  // Set default to "Juice"
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setSelectedCategory(targetId);
  };

  // Combine all items into one list with category labels for easier filtering
  const allItems = [
    ...FOOD.map((item) => ({ ...item, category: "Food" })),
    ...SNACK.map((item) => ({ ...item, category: "Snack" })),
    ...BURGER.map((item) => ({ ...item, category: "Burger" })),
    ...PIZZA.map((item) => ({ ...item, category: "Pizza" })),
    ...SALAD.map((item) => ({ ...item, category: "Salad" })),
    ...SMOOTHIE.map((item) => ({ ...item, category: "Smoothie" })),
    ...JUICE.map((item) => ({ ...item, category: "Juice" })),
  ];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      className="container flex flex-col  items-center mx-auto py-16"
      id="menu"
    >
      <div className=" m-8 md:m-10 ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 text-center text-3xl tracking-wide lg:text-4xl text-primaryText-light font-bold dark:text-primaryText-dark "
        >
          Our Signature Dishes
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="m-10 text-secondaryText-light dark:text-secondaryText-dark"
        >
          <motion.p
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="tracking-wider text-center"
          >
            Explore our mouth-watering menu, crafted with the freshest
            ingredients and boldest flavors. Whether you're craving burgers,
            pasta, or pizza, we have something for every taste!
          </motion.p>
        </motion.div>
        {/* Link to the 9 items to select */}
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className=" grid grid-cols-3 gap-5 md:grid-flow-col md:justify-center md:space-x-2  "
          >
            {LINK.map((link, index) => (
              <a
                key={index}
                href={`#${link.targetId}`}
                className={`bg-bgSecondary-light text-xs md:text-sm font-semibold rounded-full flex justify-center items-center w-20 p-1 shadow-lg ${
                  selectedCategory === link.targetId
                    ? "bg-yellow-400 text-black font-bold tracking-wide shadow-xl"
                    : ""
                } ${
                  index !== 0 ? "p-3 text-center" : ""
                } hover:bg-yellow-500 hover:text-black`}
                onClick={(e) => handleScroll(e, link.targetId)}
              >
                {link.text}
              </a>
            ))}
          </motion.div>
        </div>
        {/* Display filtered items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 my-8 p-5 "
        >
          {filteredItems.map((project, index) => (
            <DishCard key={index} projet={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Dishes;
