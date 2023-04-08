import React, { useState } from "react";
import { ThemeState } from "../contexts/Themecontext";
import Navlink from "../helper/Navlink";

const Header = () => {
  const [isThemeChanged, setIsThemeChanged] = useState(false);
  const { theme, setTheme } = ThemeState();
  const [mobileNav, setMobileNav] = useState(false);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsThemeChanged((prev) => !prev);
  };

  console.log(theme);

  return (
    <div className="flex w-full sm:w-4/5 mx-auto items-center justify-evenly">
      <div
        id="img-container"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full shadow-sm transition-all duration-200"
      >
        <img src="assets/1.jpg" className="w-full rounded-full brightness-90" />
      </div>
      <div className="flex flex-col space-y-2 lg:space-y-6">
        <h1 className="text-black dark:text-white font-semibold text-lg md:text-2xl">
          {" "}
          Priyansh Shrivastava
        </h1>
        <div className="space-x-4 items-center hidden transition-all md:flex ">
          <Navlink />
        </div>
      </div>
      <button
        className="rounded-lg w-8 h-8 border-[0.025rem] dark:border-slate-400 border-slate-500 focus:outline-none active:outline-none"
        onClick={handleThemeSwitch}
      >
        {" "}
        <i
          className={`fa-regular fa-${
            isThemeChanged ? "sun" : "moon"
          } dark:text-white text-black cursor-pointer`}
        ></i>
      </button>
      {/* Mobile menu  */}
      <i
        className="fa-solid fa-bars md:hidden transition-all duration-300 text-lg dark:text-white text-zinc-600"
        onClick={() => setMobileNav(true)}
      ></i>
      {mobileNav && (
        <div
          className="w=full h-screen overflow-y-hidden flex flex-col bg-white dark:bg-black absolute bottom-0 left-0 right-0 top-0 justify-center items-center space-y-10 transition-all duration-1000 font-semibold z-40"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/otis-redding.png")',
          }}
        >
          <button
            className="absolute right-6 top-12 text-xl w-8 h-8 rounded-md border-[0.015rem] border-slate-200"
            onClick={() => setMobileNav(false)}
          >
            {" "}
            <i className="fa-solid fa-xmark dark:text-white text-black cursor-pointer "></i>
          </button>
          <Navlink setMobileNav={setMobileNav} />
        </div>
      )}
    </div>
  );
};

export default Header;
