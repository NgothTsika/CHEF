import React, { useState } from "react";
import NavBar from "./Root/NavBar";
import Hero from "./Root/Hero";
import Dishes from "./Root/Dishes";
import About from "./Root/About";
import Promo from "./Root/Promo"; // Assuming NavBar is in components folder
import Testmoney from "./components/Testmoney";
import Contact from "./Root/Contact";
import Footer from "./Root/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <main
      className="h-full w-full bg-bgPrimary-light dark:bg-bgPrimary-dark overflow-y-hidden antialiased "
      id="/"
    >
      <NavBar onThemeSwitch={handleThemeSwitch} theme={theme} />
      <Hero />
      <Promo />
      <Dishes />
      <About />
      <Testmoney />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
