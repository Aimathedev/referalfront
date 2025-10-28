import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ Correct import

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("⚠️ Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:3000/register", {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      setMessage("✅ " + res.data.message);
      console.log("User Registered:", res.data.user);

      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error(error);
      if (error.response) {
        setMessage("❌ " + error.response.data.message);
      } else {
        setMessage(" Network Error: Could not connect to server");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
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

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create an Account</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            required
          />

          <input
            type="text"
            name="referralCode"
            placeholder="Referral Code (Optional)"
            value={formData.referralCode}
            onChange={handleChange}
            className="form-input"
          />

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {message && (
            <p
              style={{
                color: message.includes("✅") ? "green" : "red",
                marginTop: "10px",
              }}
            >
              {message}
            </p>
          )}

          <div className="signup-links">
            <p>
              Already have an account?{" "}
              <Link to="/" className="login-link">
                Login
              </Link>
            </p>
            <br />
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
