import React from "react";

const Footer = () => {
  return (
    <div className="text-center w-full flex space-x-2 justify-center items-center dark:text-white text-zinc-600 absolute bottom-4 mt-6 ">
      <span>Designed with </span>
      <img src="assets/tailwind-css.svg" className="w-6 h-6 " />
      <span>&</span>
      <i className="fa-brands fa-react dark:text-white text-cyan-500 text-lg"></i>
    </div>
  );
};

export default Footer;
