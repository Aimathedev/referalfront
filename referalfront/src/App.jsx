
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./comps/Login";
import Signup from "./comps/Signup";
import Dashboard from "./comps/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
    </Routes>

  );

};

export default App;
