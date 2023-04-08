import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex w-full md:w-full lg:w-2/3 mx-auto items-center justify-between px-8 md:pl-32 md:pr-40 mb-10">
      <div className="flex space-x-4 ">
        <Link
          to="https://twitter.com/shadow_priyansh?t=D-l9Zh6MX-6UXWagMQjt7Q&s=09 "
          target="_blank"
        >
          <i className="fa-brands fa-twitter text-lg md:text-2xl text-zinc-500 dark:text-slate-300 cursor-pointer hover:text-zinc-800 hover:dark:text-slate-200"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/priyansh-shrivastava-184355145/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin text-lg md:text-2xl text-zinc-500 dark:text-slate-300 cursor-pointer hover:text-zinc-800 hover:dark:text-slate-200"></i>
        </Link>
        <Link to="https://priyanshshrivastava.hashnode.dev/" target="_blank">
          <i className="fa-brands fa-hashnode text-lg md:text-2xl text-zinc-500 dark:text-slate-300 cursor-pointer hover:text-zinc-800 hover:dark:text-slate-200"></i>
        </Link>
      </div>
      <Link
        to="https://drive.google.com/file/d/1tlBkqQNFaZRifZ4KLyAXWgahn1_eDLu4/view?usp=sharing"
        target="_blank"
        className=" text-zinc-700 dark:text-white flex space-x-2 items-center  border-[0.025rem] px-3 md:px-6 py-2 dark:border-zinc-800 border-slate-200 rounded-md"
      >
        <span className="font-semibold text-md md:text-xl">Resume</span>
        <i className="fa-regular fa-file text-zinc-700 dark:text-white font-semibold text-sm md:text-lg"></i>
      </Link>
      <div className="flex space-x-4">
        <Link to="https://github.com/PriyanshShrivastava" target="_blank">
          <i className="fa-brands fa-github text-lg md:text-2xl text-zinc-500 dark:text-slate-300 cursor-pointer hover:text-zinc-800 hover:dark:text-slate-200"></i>
        </Link>
        <Link to="https://www.youtube.com/@inyour20s46" target="_blank">
          <i className="fa-brands fa-youtube text-lg md:text-2xl text-zinc-500 dark:text-slate-300 cursor-pointer hover:text-zinc-800 hover:dark:text-slate-200"></i>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
