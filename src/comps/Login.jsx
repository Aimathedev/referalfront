import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      localStorage.setItem("email", data.user.email);
      localStorage.setItem("userId", data.user.id);

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">Login</div>

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

        <div className="login-links">
          <Link to="/signup" className="login-link">
            Signup
          </Link>
          <Link to="/forgot-password" className="login-link">
            Forget Password
          </Link>
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
//git check