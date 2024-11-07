import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./src/Root";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Root element is the entry point */}
    <Root />
  </React.StrictMode>
);