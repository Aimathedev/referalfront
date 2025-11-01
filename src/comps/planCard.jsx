import React from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlanCard = ({ img, title, cashback, withdrawals, tasks }) => {
  const navigate = useNavigate();

  const handleBuy = () => {
    console.log("Navigating to success...");
    navigate("/success", { state: { plan: title } });
  };

  return (
    <div className="box">
      <img src={img} alt={title} />
      <h3>{title}</h3>

      <p>{cashback}</p>
      <p>{withdrawals}</p>
      <p>{tasks}</p>

      <button className="buy-btn" onClick={handleBuy}>
        <ShoppingCart size={16} />
        Buy
      </button>
    </div>
  );
};

export default PlanCard;
