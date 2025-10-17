// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const clientId = "482014132209-80kkelqhkun0ttt7o5092rpne1rlotn0.apps.googleusercontent.com";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <GoogleOAuthProvider clientId={clientId}>
//     <App />
//   </GoogleOAuthProvider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

const clientId =
  "482014132209-80kkelqhkun0ttt7o5092rpne1rlotn0.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
