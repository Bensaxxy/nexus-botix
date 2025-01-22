/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BackgroundColorProvider } from "./context/BackgroundColorContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BackgroundColorProvider>
      <App />
    </BackgroundColorProvider>
  </StrictMode>
);
