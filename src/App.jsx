// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./comps/Login";
// import Signup from "./comps/Signup";
// import Dashboard from "./comps/Dashboard";
// import ForgotPassword from "./comps/ForgotPassword";
// import Page from "./comps/Page";
// import EditProfile from "./comps/EditProfile";


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Page />} />
//         <Route path="/edit-profile" element={<EditProfile />} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./comps/Login";
import Signup from "./comps/Signup";
import Dashboard from "./comps/Dashboard";
import ForgotPassword from "./comps/ForgotPassword";
import Page from "./comps/Page";
import EditProfile from "./comps/EditProfile";
import Notification from "./comps/Notification";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Page />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/notifications" element={<Notification />} />

    </Routes>
  );
};

export default App;

