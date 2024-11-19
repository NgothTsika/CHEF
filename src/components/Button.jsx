import { ArrowRightCircleIcon } from "lucide-react";
import "swiper/css";
import { motion } from "framer-motion";

// Button component that accepts text, href and an optional icon prop
// Default icon is ArrowRightCircleIcon from lucide-react
const Button = ({ text, href, icon = <ArrowRightCircleIcon width={20} /> }) => {
  return (
    <div>
      {/* Container for button with spacing and font styling */}
      <div className="space-x-4 font-Geist flex items-center">
        {/* Animated button using Framer Motion
            - Scales up and rotates slightly on hover
            - Scales down on click/tap 
            - Supports light/dark mode with dynamic background */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="bg-navBg-light dark:bg-navBg-dark dark:text-white text-black rounded-md p-2 font-semibold text-base cursor-pointer hover:text-green-800 hover:bg-gray-200 shadow-lg"
        >
          {/* Link wrapper with centered content layout */}
          <a href={href} className="flex justify-center items-center gap-2">
            {text} {icon}
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default Button;
