import React from "react";
import ReactDom from "react-dom/client";
import { GlobalStyles } from "./styles/globalstyles.js";
import Home from "./App.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
