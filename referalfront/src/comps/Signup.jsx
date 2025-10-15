
import React from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create an Account</h2>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input
              className="form-input"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="form-input"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          <input
            className="form-input"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="form-input"
            type="password"
            placeholder="Enter Password"
            required
          />
          <input
            className="form-input"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <input
            className="form-input"
            type="text"
            placeholder="Referral Code (Optional)"
          />

          <button className="signup-button" type="submit">
            Create Account
          </button>

          <div className="signup-links">
            <p>
              If you already have an account{" "}
              <Link to="/" className="login-link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
