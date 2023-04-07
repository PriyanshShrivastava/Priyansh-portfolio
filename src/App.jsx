import React from "react";
import { Routes, Route } from "react-router-dom";
import Hompage from "./pages/Hompage";
import Blog from "./pages/Blog";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
}

export default App;
