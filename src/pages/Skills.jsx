import React from "react";
import Layout from "../layout/Layout";

const Skills = () => {
  return (
    <Layout title="Skills- Priyansh Shrivastava">
      <div className="w-full sm:w-5/6 md:w-full lg:w-4/5 mx-auto py-10 md:py-16 md:space-y-6 px-8 sm:px-16 md:px-24 lg:px-10 xl:px-28 transition-all duration-200 flex flex-col space-y-6">
        <h1 className="w-full text-zinc-600 dark:text-white font-semibold text-xl md:text-3xl lg:w-4/5 mx-auto">
          Skills
        </h1>
        <div className=" w-full  lg:w-4/5 flex flex-col text-zinc-700 dark:text-white space-y-4 border-[0.025rem] py-6 px-4 dark:border-zinc-800 border-slate-200 rounded-md mx-auto items-start">
          <h2 className="w-full text-zinc-600 dark:text-white font-semibold text-md md:text-lg ">
            Front End{" "}
          </h2>
          <div className="flex space-x-4">
            <p>HTML</p>
            <p>CSS</p>
            <p>Tailwindcss</p>
            <p>Bootstrap</p>
            <p>ReactJS</p>
            <p>Material UI</p>
            <p>Redux Toolkit</p>
          </div>
        </div>
        <div className=" w-full  lg:w-4/5 flex flex-col text-zinc-700 dark:text-white space-y-4 border-[0.025rem] py-6 px-4 dark:border-zinc-800 border-slate-200 rounded-md mx-auto items-start">
          <h2 className="w-full text-zinc-600 dark:text-white font-semibold text-md md:text-lg ">
            Back End{" "}
          </h2>
          <div className="flex space-x-4">
            <p>Javascript</p>
            <p>Nodejs</p>
            <p>Express</p>
            <p>Socket.io</p>
          </div>
        </div>
        <div className=" w-full  lg:w-4/5 flex flex-col text-zinc-700 dark:text-white space-y-4 border-[0.025rem] py-6 px-4 dark:border-zinc-800 border-slate-200 rounded-md mx-auto items-start">
          <h2 className="w-full text-zinc-600 dark:text-white font-semibold text-md md:text-lg ">
            Database{" "}
          </h2>
          <div className="flex space-x-4">
            <p>MongoDB</p>
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
