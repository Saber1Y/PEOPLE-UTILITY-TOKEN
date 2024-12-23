import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Whether animation should happen only once
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
