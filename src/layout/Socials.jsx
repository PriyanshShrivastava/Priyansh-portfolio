import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex w-full md:w-2/3 mx-auto items-center justify-between px-8 md:pl-32 md:pr-40">
      <div className="flex space-x-4 ">
        <Link to="https://github.com/PriyanshShrivastava" target="_blank">
          <i className="fa-brands fa-github text-lg md:text-2xl text-zinc-500 dark:text-slate-300 cursor-pointer hover:text-zinc-800 hover:dark:text-slate-200"></i>
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
        to="https://read.cv/priyansh"
        target="_blank"
        className=" text-zinc-700 dark:text-white flex space-x-2 items-center "
      >
        <span className="font-semibold text-lg md:text-xl">Resume</span>
        <i className="fa-solid fa-arrow-up-right-from-square text-zinc-700 dark:text-white font-semibold text-xs md:text-md"></i>
      </Link>
      <Link
        to="https://twitter.com/shadow_priyansh?t=D-l9Zh6MX-6UXWagMQjt7Q&s=09"
        target="_blank"
      >
        <i className="fa-brands fa-twitter text-lg md:text-2xl text-zinc-500 dark:text-slate-300 cursor-pointer hover:text-zinc-800 hover:dark:text-slate-200"></i>
      </Link>
    </div>
  );
};

export default Socials;
