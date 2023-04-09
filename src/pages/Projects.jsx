import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Layout title="Projects - Priyansh Shrivastava">
      <div className="w-full sm:w-5/6 md:w-full lg:w-4/5 mx-auto py-10 md:py-16 flex flex-col space-y-3 md:space-y-6 px-8 sm:px-16 md:px-24 lg:px-10 xl:px-28 transition-all duration-200 ">
        <h1 className="w-full text-zinc-600 dark:text-white font-semibold text-xl md:text-3xl lg:w-4/5 mx-auto">
          Projects
        </h1>
        <div className=" w-full flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between md:items-center rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group">
          <div className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              Kool Kicks
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              Kool kicks is a fully functional online sneaker store. Build using
              <span className="font-semibold"> MERN</span> stack.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md  dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://kool-kicks-exclusives.netlify.app/"
              target="_blank"
            >
              Live
            </Link>
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://github.com/PriyanshShrivastava/kool-kicks"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div className="md:hidden w-2/3 h-[0.025rem] dark:bg-slate-500 bg-zinc-400 "></div>
        </div>
        <div className=" w-full flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:items-center rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group">
          <div className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              Blockwatch
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              A Crypto tracker project tracks cryptocurrency performance in
              <span className="font-semibold"> real-time </span>with
              comprehensive charts.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md  dark:hover:bg-neutral-800 hover:bg-neutral-100 "
              to="https://block-watch.vercel.app/"
              target="_blank"
            >
              Live
            </Link>
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://github.com/PriyanshShrivastava/BlockWatch"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div className="md:hidden w-2/3 h-[0.025rem] dark:bg-slate-500 bg-zinc-400 "></div>
        </div>
        <div className=" w-full flex flex-col md:flex-row  space-y-6 md:space-y-0 justify-between md:items-center rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group">
          <div className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              Cowrite
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              It is a collaborative text editor build using{" "}
              <span className="font-semibold"> Socket.io</span> and{" "}
              <span className="font-semibold"> Reactjs</span>.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md  dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://cowrite-production.up.railway.app/"
              target="_blank"
            >
              Live
            </Link>
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://github.com/PriyanshShrivastava/CoWrite"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div className="md:hidden w-2/3 h-[0.025rem] dark:bg-slate-500 bg-zinc-400 "></div>
        </div>
        <div className=" w-full flex flex-col md:flex-row  space-y-6 md:space-y-0 justify-between md:items-center rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group">
          <div className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              Github Finder
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              It will give you a curated and highlighting stats and details
              about the profile you search.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md  dark:hover:bg-neutral-800 hover:bg-neutral-100 "
              to="https://shadow-github-finder.netlify.app/"
              target="_blank"
            >
              Live
            </Link>
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://github.com/PriyanshShrivastava/Github-Finder"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div className="md:hidden w-2/3 h-[0.025rem] dark:bg-slate-500 bg-zinc-400 "></div>
        </div>
        <div className=" w-full flex flex-col md:flex-row  space-y-6 md:space-y-0 justify-between md:items-center rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group">
          <div className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              Skywatch
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              A well designed weather App, which gives you details about a city
              climate.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md  dark:hover:bg-neutral-800 hover:bg-neutral-100 "
              to="https://shadow-skywatch.netlify.app/"
              target="_blank"
            >
              Live
            </Link>
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://github.com/PriyanshShrivastava/SkyWatch"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div className="md:hidden w-2/3 h-[0.025rem] dark:bg-slate-500 bg-zinc-400 "></div>
        </div>
        <div className=" w-full flex flex-col md:flex-row  space-y-6 md:space-y-0 justify-between md:items-center rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group">
          <div className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              UrbanRider
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              UrbanRider is a bike rental service UI only website where you can
              see all the bikes and choose the one to rent.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md  dark:hover:bg-neutral-800 hover:bg-neutral-100 "
              to="https://urbanrider.netlify.app/"
              target="_blank"
            >
              Live
            </Link>
            <Link
              className="text-zinc-700 dark:text-white border-[0.025rem] px-3 py-2 dark:border-zinc-800 border-slate-200 rounded-md dark:hover:bg-neutral-800 hover:bg-neutral-100"
              to="https://github.com/PriyanshShrivastava/urbanRider"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div className="md:hidden w-2/3 h-[0.025rem] dark:bg-slate-500 bg-zinc-400 "></div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
