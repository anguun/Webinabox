import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// PSEUDOCODE:
// 1. Find the HTML element with id="root"
// 2. Create a React root at that element
// 3. Render the App component inside React.StrictMode
//    (StrictMode helps catch bugs during development)
// 4. StrictMode wraps the entire App for safety checks

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
