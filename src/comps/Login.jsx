import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
<<<<<<< HEAD
import { GoogleLogin } from "@react-oauth/google";
=======
import { GoogleLogin  } from "@react-oauth/google";
>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af
import { jwtDecode } from "jwt-decode"; // ✅ Correct import

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
  // 🔹 Normal Email/Password Login
=======
>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Invalid login credentials");
        return;
      }

      // Store user info
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("userId", data.user.id);

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

<<<<<<< HEAD
  // 🔹 Google Login Handler
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
=======
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google User:", credentialResponse);


    
>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af
      console.log("Google User:", decoded);

      const res = await fetch("http://localhost:3000/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("userId", data.user.id);
        navigate("/dashboard");
      } else {
        alert("Google login failed");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Error while logging in with Google");
    }
  };

  const handleGoogleError = () => {
    alert("Google login failed. Please try again.");
  };

  // 🔹 UI
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">Login</div>

        {/* Normal Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group" style={{ animationDelay: "0.1s" }}>
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group" style={{ animationDelay: "0.2s" }}>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group" style={{ animationDelay: "0.3s" }}>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>

        {/* Links and Google Login */}
        <div className="login-links">
          <Link to="/signup" className="login-link">
            Signup
          </Link>
          <Link to="/forgot-password" className="login-link">
            Forget Password
          </Link>
          <Link to="/dashboard" className="login-link">
            Go to Dashboard
          </Link>
          <br />

<<<<<<< HEAD
          {/* ✅ Google Login Button */}
=======
>>>>>>> 0e8b14cbfa98d868944bea8654f7eafc3ac1e1af
          <div className="google-login">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
