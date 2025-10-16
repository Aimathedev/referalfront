import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/forgot.css";

const ForgotPassword = () => {
  let navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Forgot Password</h2>

        <form className="forgot-form" onSubmit={handleSendOTP}>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input"
            required
          />

          {!showOTP ? (
            <button type="submit" className="forgot-button">
              Send OTP
            </button>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                className="form-input"
                required
              />
              <input
                type="password"
                placeholder="Enter new password"
                className="form-input"
                required
              />
              <button type="submit" className="forgot-button">
                Reset Password
              </button>
            </>
          )}
        </form>

        <div className="forgot-links">
          <p>
            Back to{" "}
            <Link to="/" className="login-link" onClick={() => navigate("/")}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;