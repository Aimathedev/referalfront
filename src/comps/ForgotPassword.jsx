// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../css/forgot.css";

// const ForgotPassword = () => {
//   let navigate = useNavigate();
//   const [showOTP, setShowOTP] = useState(false);

//   const handleSendOTP = (e) => {
//     e.preventDefault();
//     setShowOTP(true);
//   };

//   return (
//     <div className="forgot-container">
//       <div className="forgot-box">
//         <h2 className="forgot-title">Forgot Password</h2>

//         <form className="forgot-form" onSubmit={handleSendOTP}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="form-input"
//             required
//           />

//           {!showOTP ? (
//             <button type="submit" className="forgot-button">
//               Send OTP
//             </button>
//           ) : (
//             <>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 className="form-input"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Enter new password"
//                 className="form-input"
//                 required
//               />
//               <button type="submit" className="forgot-button">
//                 Reset Password
//               </button>
//             </>
//           )}
//         </form>

//         <div className="forgot-links">
//           <p>
//             Back to{" "}
//             <Link to="/" className="login-link" onClick={() => navigate("/")}>
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/forgot.css";

const ForgotPassword = () => {
  let navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Send OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/resetPass", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setShowOTP(true);
        setMessage("OTP sent to your email. It will expire in 1 minute.");
      } else {
        setMessage(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      setMessage("Something went wrong. Try again later.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/verifyupdate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, password: newPassword }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Password updated successfully!");
        setTimeout(() => navigate("/"), 1500);
      } else {
        setMessage(data.message || "Failed to update password");
      }
    } catch (err) {
      console.error("Error resetting password:", err);
      setMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Forgot Password</h2>

        {!showOTP ? (
          <form className="forgot-form" onSubmit={handleSendOTP}>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="forgot-button">
              Send OTP
            </button>
          </form>
        ) : (
          <form className="forgot-form" onSubmit={handleResetPassword}>
            <input
              type="text"
              placeholder="Enter OTP"
              className="form-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter new password"
              className="form-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit" className="forgot-button">
              Reset Password
            </button>
          </form>
        )}

        {message && <p className="message-text">{message}</p>}

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
