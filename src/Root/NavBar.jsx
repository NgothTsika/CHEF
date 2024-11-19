import { Globe2, MenuIcon, Moon, Sun, X } from "lucide-react";
import React, { useState } from "react";
import { LINKS } from "../constants";
import { motion } from "motion/react";
import Chef from "../components/Chef";

function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  const handleThemeSwitch = () => {
    const html = document.querySelector("html");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    html.classList.toggle("dark", newTheme === "dark");
  };
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="
   fixed top-5 z-50 flex w-screen  flex-col items-center justify-center "
    >
      <motion.div className=" flex  w-full items-center justify-between overflow-y-hidden p-2 backdrop-blur-md lg:w-[50rem] rounded-full shadow-md border font-semibold dark:border-navBg-dark  dark:bg-navBg-dark/70 bg-navBg-light/70 dark:text-primaryText-dark border-navBg-light text-primaryText-light ">
        <a href="/" className="cursor-pointer">
          <Chef className=" text-bgPrimary-dark dark:text-bgPrimary-light" />
        </a>

        <div className=" hidden space-x-6 lg:flex ">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2 " : ""
              } hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className=" flex items-center justify-center">
          <div className=" flex items-center justify-center mr-4">
            <button onClick={handleThemeSwitch}>
              {theme === "light" ? (
                <Sun className="cursor-pointer" />
              ) : (
                <Moon className="cursor-pointer" />
              )}
            </button>
          </div>
          <div className=" lg:hidden flex items-center justify-center  ">
            <button onClick={toggleMobileMenu}>
              {isMobileOpen ? (
                <X width={80} height={22} />
              ) : (
                <MenuIcon width={80} height={22} />
              )}
            </button>
          </div>
        </div>
      </motion.div>
      {isMobileOpen && (
        <div className=" w-full backdrop-blur-lg lg:hidden text-primaryText-light dark:text-primaryText-dark font-semibold   ">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className=" flex justify-center p-4 uppercase tracking-tighter  "
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default NavBar;
