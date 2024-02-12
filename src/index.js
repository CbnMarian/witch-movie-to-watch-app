import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./starRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} defaultRating={3} />
  </React.StrictMode>
);
