// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import i18n configuration - This must come before the App import
import "./i18n"; // This will initialize i18next

// Wait for i18next to be initialized before rendering the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
