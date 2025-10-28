import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, LogOut } from "lucide-react";
import "../css/subscribtion.css";

const Subcription = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="dashboard-header">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
            />
          </svg>
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
        <div className="box">
          <img src="/src/images/bronze.png" alt="Bronze" />
          <h3>Bronze</h3>
          <p>
            30% cashback <br />
            on each referral
          </p>
          <p>
            Per week 1 <br />
            withdrawal
          </p>
          <p>3 Tasks</p>
          <button className="buy-btn">
            <ShoppingCart size={16} />
            Buy
          </button>
        </div>

        <div className="box">
          <img src="/src/images/gold.png" alt="Gold" />
          <h3>Gold</h3>
          <p>
            50% cashback <br />
            on each referral
          </p>
          <p>
            Per week 3 <br />
            withdrawals
          </p>
          <p>5 Tasks</p>
          <button className="buy-btn">
            <ShoppingCart size={16} />
            Buy
          </button>
        </div>

        <div className="box">
          <img src="/src/images/diamond.png" alt="Diamond" />
          <h3>Diamond</h3>
          <p>
            70% cashback <br />
            on each referral
          </p>
          <p>
            Per week 5 <br />
            withdrawals
          </p>
          <p>Unlimited Tasks</p>
          <button className="buy-btn">
            <ShoppingCart size={16} />
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Subcription;
