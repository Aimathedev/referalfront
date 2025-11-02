import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlanCard = ({ img, title, cashback, withdrawals, tasks }) => {
  const navigate = useNavigate();

 const handleBuy = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      "http://localhost:3000/subscribe",
      { plan: title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    navigate("/success", { state: { plan: title } });
  } catch (error) {
    console.error("Error subscribing:", error.response?.data || error.message);
  }
};



  return (
    <div className="box">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{cashback}</p>
      <p>{withdrawals}</p>
      <p>{tasks}</p>

      <button className="buy-btn" onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
};

export default PlanCard;
