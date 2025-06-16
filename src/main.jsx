import React from "react";
import ReactDOM from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <AppContext/>
    </BrowserRouter>
  </>
);
