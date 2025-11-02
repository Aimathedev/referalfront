import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import "../css/subscrption.css";
import PlanCard from "./planCard";

const Subcription = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <header className="dashboard-header">
        <div className="logo">
          <h1>Referral Front</h1>
        </div>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/subc">Subscription</Link>
          <Link to="/" className="logout-btn">
            <LogOut size={16} /> Logout
          </Link>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className="main-container">
        <PlanCard
          img="/src/images/bronze.png"
          title="bronze"
          cashback="30% cashback on each referral"
          withdrawals="Per week 1 withdrawal"
          tasks="3 Tasks"
        />
        <PlanCard
          img="/src/images/gold.png"
          title="gold"
          cashback="50% cashback on each referral"
          withdrawals="Per week 3 withdrawals"
          tasks="5 Tasks"
        />
        <PlanCard
          img="/src/images/diamond.png"
          title="diamond"
          cashback="70% cashback on each referral"
          withdrawals="Per week 5 withdrawals"
          tasks="Unlimited Tasks"
        />
      </div>
    </>
  );
};

export default Subcription;
