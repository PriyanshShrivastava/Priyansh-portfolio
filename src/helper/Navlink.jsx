import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ setMobileNav }) => {
  return (
    <>
      <div>
        <Link to="/" className="dark:text-white text-zinc-700 peer">
          Home
        </Link>
        <div className="w-full bg-black h-[0.075rem] dark:bg-zinc-600 scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      <div>
        <Link to="/blogs" className="dark:text-white text-zinc-700 peer">
          Blogs
        </Link>
        <div className="w-full bg-black h-[0.075rem] dark:bg-zinc-600 scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      <div>
        <Link to="projects" className="dark:text-white text-zinc-700 peer">
          Projects
        </Link>
        <div className="w-full bg-black h-[0.075rem] dark:bg-zinc-600 scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      <div>
        <Link to="contact" className="dark:text-white text-zinc-700 peer">
          Contact
        </Link>
        <div className="w-full bg-black h-[0.075rem] dark:bg-zinc-600 scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      <div>
        <Link to="bookmarks" className="dark:text-white text-zinc-700 peer">
          Bookmarks
        </Link>
        <div className="w-full bg-black h-[0.075rem] dark:bg-zinc-600 scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      <div>
        <Link to="skills" className="dark:text-white text-zinc-700 peer">
          Skills
        </Link>
        <div className="w-full bg-black h-[0.075rem] dark:bg-zinc-600 scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
    </>
  );
};

export default Navlink;
