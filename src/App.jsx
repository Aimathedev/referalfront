// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./comps/Login";
// import Signup from "./comps/Signup";
// import Dashboard from "./comps/Dashboard";
// import ForgotPassword from "./comps/ForgotPassword";
// import Page from "./comps/Page";
// import EditProfile from "./comps/EditProfile";

<<<<<<< HEAD
=======

>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af
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
<<<<<<< HEAD
import Subcription from "./comps/Subcription";
=======

>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af

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
<<<<<<< HEAD
      <Route path="/subc" element={<Subcription />} />
=======

>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af
    </Routes>
  );
};

export default App;
<<<<<<< HEAD
=======

>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af
