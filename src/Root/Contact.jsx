import { Mail, PhoneIcon, PinIcon } from "lucide-react";
import React from "react";
import FillForm from "../components/MessageDialog";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div
      className="bg-bgSecondary-light dark:bg-bgSecondary-dark p-9 md:p-11"
      id="contact"
    >
      <div>
        {/* Heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10 text-center text-3xl lg:text-4xl text-primaryText-light dark:text-primaryText-dark tracking-wide font-bold uppercase"
          >
            Contact Us
          </motion.h2>
        </div>

        {/* Main Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:flex-row w-full"
        >
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center items-center space-y-5 dark:text-primaryText-dark"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in Touch with Us!
            </motion.p>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-2"
            >
              <PinIcon width={20} />
              124 Tomato Street, Accra, GHANA
            </motion.h2>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-2"
            >
              <PhoneIcon width={20} />
              +233 123-456-789
            </motion.h2>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-2"
            >
              <Mail width={20} />
              contact@foodhub.com
            </motion.h2>
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center text-center w-full p-5"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10 text-primaryText-light dark:text-primaryText-dark"
            >
              Have questions, suggestions, or feedback? We’re here to help!
              Reach out to us, and we'll get back to you as soon as possible.
            </motion.p>
            {/* Feedback Form */}
            <FillForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
