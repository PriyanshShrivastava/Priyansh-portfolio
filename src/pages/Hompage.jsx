import React from "react";
import Layout from "../layout/Layout";

const Hompage = () => {
  return (
    <Layout>
      <div className="w-full sm:w-4/5 md:w-2/3 transition-all duration-300 mx-auto py-10 md:py-16 flex flex-col space-y-6">
        <h2 className="text-zinc-600 dark:text-white font-semibold text-xl md:text-2xl px-8 md:px-32 ">
          Who am I ?
        </h2>
        <p className="text-zinc-600 dark:text-white text-md md:text-lg px-8 md:px-32">
          As a{" "}
          <span className="text-zinc-800 dark:text-white font-semibold underline underline-offset-2 ">
            Full stack developer{" "}
          </span>
          with a passion for crafting beautiful and intuitive{" "}
          <span className="text-zinc-800 dark:text-white font-semibold underline underline-offset-2 ">
            user interfaces
          </span>
          , I bring a unique blend of technical expertise and design flair to
          every project.
        </p>
        <p className="text-zinc-600 dark:text-white text-md md:text-lg px-8 md:px-32">
          {" "}
          I'm constantly exploring new ways to enhance my skills and deliver
          exceptional results. Whether I'm working on a new project or sharing
          my journey on social media, I'm committed to bringing my best to the
          world of web development.
        </p>
      </div>
    </Layout>
  );
};

export default Hompage;
