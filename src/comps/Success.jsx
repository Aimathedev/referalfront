import React from "react";
import { Link, useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const plan = location.state?.plan || "Your Plan";

  return (
    <div className="success-container">
      <h2>🎉 Payment Successful!</h2>
      <p>You have successfully purchased the <strong>{plan}</strong> plan.</p>

      <Link to="/subc" className="back-btn">
        Go back to Subscription
      </Link>
    </div>
  );
};

export default Success;
