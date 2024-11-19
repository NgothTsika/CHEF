import React from "react";
import { REVIEW } from "../constants";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";

const Testimony = () => {
  return (
    <div className="p-9 md:p-11" id="review">
      <div className="flex flex-col justify-center items-center text-primaryText-light dark:text-primaryText-dark ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10 text-center text-3xl lg:text-4xl tracking-wide font-bold uppercase"
        >
          CUSTOMER Review
        </motion.h2>
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center text-center m-5"
        >
          <h3>Hear from Our Happy Customers</h3>
          <p>
            Our customers love us, and we love them back! Here’s what they have
            to say about our food and service.
          </p>
        </motion.div>
      </div>

      <Swiper
        modules={Autoplay}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {REVIEW.map((props, index) => (
          <SwiperSlide key={index}>
            <ReviewCard projet={props} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimony;
