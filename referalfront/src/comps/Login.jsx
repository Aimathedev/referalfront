
import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">Login</div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group" style={{ animationDelay: "0.1s" }}>
            <input type="email" placeholder="Email" className="form-input" />
          </div>

          <div className="form-group" style={{ animationDelay: "0.2s" }}>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-input"
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
          <Link to="#" className="login-link">
            Forget Password
          </Link>
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
