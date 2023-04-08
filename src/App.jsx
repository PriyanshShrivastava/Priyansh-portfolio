import React from "react";
import { Routes, Route } from "react-router-dom";
import Hompage from "./pages/Hompage";
import Blog from "./pages/Blog";
import Footer from "./layout/Footer";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
