import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setupIonicReact } from "@ionic/react";
import "./index.css";
import App from "./App";

setupIonicReact(); // Initialize Ionic React

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
