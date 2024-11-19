import {
  FacebookIcon,
  GithubIcon,
  Instagram,
  LucideCopyright,
  Twitter,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="p-9 md:p-11 dark:text-secondaryText-dark">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-5 items-center"
      >
        {/* Social Icons */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            staggerChildren: 0.1,
          }}
          className="space-x-3 cursor-pointer flex justify-center items-center"
        >
          <motion.li
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex gap-2"
          >
            <FacebookIcon />
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Instagram />
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Twitter />
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <YoutubeIcon />
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GithubIcon />
          </motion.li>
        </motion.ul>

        {/* Copyright Text */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center font-medium text-sm gap-2"
        >
          <LucideCopyright width={15} />
          ALL rights reserved 2024
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;
