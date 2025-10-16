import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./comps/Login";
import Signup from "./comps/Signup";
import Dashboard from "./comps/Dashboard";
import ForgotPassword from "./comps/ForgotPassword";
import Page from "./comps/Page";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
    </Routes>
   
  

  );

};

export default App;