import React from "react";
import { Routes, Route } from "react-router-dom";
import Hompage from "./pages/Hompage";
import Blog from "./pages/Blog";
import Footer from "./layout/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
