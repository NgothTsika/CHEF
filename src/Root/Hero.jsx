import React from "react";
import {
  BikeIcon,
  HeartPulse,
  Menu,
  PhoneIcon,
  ShoppingBag,
  SoupIcon,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // import Swiper styles
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules"; // import Autoplay from modules
import { motion } from "framer-motion";
import Button from "../components/Button";
import { HERO } from "../constants";
import HeroCard from "../components/HeroCard";
<Button text="Explore Menu" href="#menu" />;

// Register the Autoplay module
SwiperCore.use([Autoplay]);

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid min-h-[135vh] md:min-h-[100vh] items-center justify-center">
        <div className="mt-20 h-full w-full overflow-hidden grid grid-cols-1 md:grid-cols-2   p-5">
          {/* Swiper Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center"
          >
            <Swiper
              className="w-full md:w-[25rem] flex flex-col justify-center items-center"
              modules={Autoplay}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {HERO.map((props, index) => (
                <SwiperSlide key={index}>
                  <HeroCard props={props} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:basis-1/2 md:text-start lg:basis-2/5 flex flex-col justify-center items-center md:items-start"
          >
            <motion.h1
              className="font-Geist uppercase text-2xl font-extrabold md:text-4xl md:pr-10 lg:text-6xl text-primaryText-light dark:text-primaryText-dark mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Savor Every Bite with Delicious Flavors!
            </motion.h1>
            <motion.p
              className="tracking-wide text-secondaryText-light dark:text-secondaryText-dark text-base mb-6 font-Nunito "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Experience the joy of great food! Our food are crafted to
              perfection, made with fresh ingredients, and served with a side of
              happiness. Ready to indulge? Explore our menu and discover your
              new favorite taste!
            </motion.p>

            {/* Features Section */}
            <motion.div
              className="font-Bebas text-sm flex-wrap flex items-center justify-center gap-3 md:justify-start md:gap-10 text-primaryText-light dark:text-primaryText-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-center flex items-center justify-center gap-2">
                <HeartPulse className="text-red-500" />
                100% Bio
              </div>
              <div className="text-center flex items-center justify-center gap-2">
                <SoupIcon className="text-green-600" />
                Delicious
              </div>
              <div className="text-center flex items-center justify-center gap-2">
                <BikeIcon className="text-yellow-500" />
                Fast Delivery
              </div>
            </motion.div>
            <div className=" flex  gap-5">
              <Button text="Explore Menu" href="#contact" />
              <Button
                text="Order Now"
                href="#contact"
                icon={<ShoppingBag width={20} />}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
