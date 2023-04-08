import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Layout title="Blogs - Priyansh Shrivastava">
      <div className="w-full sm:w-5/6 md:w-full lg:w-4/5 mx-auto py-10 md:py-16 flex flex-col space-y-3 md:space-y-6 px-8 md:pl-32 md:pr-40 transition-all duration-200 ">
        <h1 className="w-full text-zinc-600 dark:text-white font-semibold text-xl md:text-3xl lg:w-4/5 mx-auto">
          Blogs
        </h1>
        <Link
          className=" w-full flex justify-between items-center dark:hover:bg-neutral-900 hover:bg-neutral-100 rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group"
          to="https://priyanshshrivastava.hashnode.dev/destructuring-arrays-in-javscript"
          target="_blank"
        >
          <div id="blog-desc" className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              How Destructuring works in JavaScript
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              An in depth explanation about How Destructuring works in
              JavaScript by examples and code explanation.
            </p>
          </div>
          <i className="fa-solid fa-arrow-right hidden sm:block group-hover:dark:text-white dark:text-zinc-500 text-neutral-400 group-hover:text-zinc-600"></i>
        </Link>
        <Link
          className=" w-full flex justify-between items-center dark:hover:bg-neutral-900 hover:bg-neutral-100 rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group"
          to="https://priyanshshrivastava.hashnode.dev/hoisting-in-javascript"
          target="_blank"
        >
          <div id="blog-desc" className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              Understanding Hoisting in JavaScript.
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              Hoisting is one of the most important concept of JavaScript and
              also most incorrectly understood too. So I tried to make it easy
              for everyone.
            </p>
          </div>
          <i className="fa-solid fa-arrow-right hidden sm:block group-hover:dark:text-white dark:text-zinc-500 text-neutral-400 group-hover:text-zinc-600"></i>
        </Link>
        <Link
          className=" w-full flex justify-between items-center dark:hover:bg-neutral-900 hover:bg-neutral-100  rounded-md lg:w-4/5 mx-auto py-6 md:px-4 group"
          to="https://priyanshshrivastava.hashnode.dev/git-and-github-how-i-understand-it-part-1"
          target="_blank"
        >
          <div id="blog-desc" className="flex flex-col space-y-3">
            <h2 className="text-zinc-800 dark:text-white font-semibold text-sm md:text-lg">
              Git and GitHub Guide in 2023.
            </h2>
            <p className="text-zinc-600 dark:text-white text-sm md:text-md w-11/12">
              {" "}
              A detailed explanation of GIT with an exiting and real life
              example.
            </p>
          </div>
          <i className="fa-solid fa-arrow-right hidden sm:block group-hover:dark:text-white dark:text-zinc-500 text-neutral-400 group-hover:text-zinc-600"></i>
        </Link>
      </div>
    </Layout>
  );
};

export default Blog;
