import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./contexts/Themecontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContext>
  </BrowserRouter>
);
