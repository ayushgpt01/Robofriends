import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "tachyons";
import App from "./containers/App";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
