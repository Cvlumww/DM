import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ReactGA from "react-ga";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactGA.initialize("G-M8KGQPEHCS");
ReactGA.pageview(window.location.pathname + window.location.search);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
