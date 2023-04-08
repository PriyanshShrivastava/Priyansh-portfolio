import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import Socials from "../components/Socials";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <div className="py-10 md:py-24 transition-all duration-300 min-h-screen">
        <React.StrictMode>
          <Header />
        </React.StrictMode>
        <main className="mb-6">{children}</main>
        <Socials />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "Priyansh Shrivastava",
  description: "Priyansh Shrivastava personal portfolio site. ",
  keywords: "react developer MERN portfolio",
};

export default Layout;
