
import React from "react";
import "../css/page.css";
import { Copy, Bell, Edit, DollarSign, Users, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="page-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-icon">
            <Users size={40} />
          </div>

          <div className="profile-info">
            <h2 className="profile-name">Aima Aziz</h2>
            <p className="profile-id">ID: 1</p>
          </div>

          <div className="profile-actions">
            <button className="icon-btn" onClick={() => navigate("/notifications")}>
  <Bell size={18} />
</button>


           <button className="icon-btn" onClick={goToEditProfile}>
  <Edit size={18} />
</button>

          </div>
        </div>

        <hr className="divider" />

        <div className="referral-section">
          <p className="referral-label">Personal Referral Link</p>
          <div className="referral-box">
            <span className="referral-link">
              theeagles.io/PersonalLink?id=1
            </span>
            <button className="copy-btn">
              <Copy size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <DollarSign size={20} />
          <h3>Total Profit</h3>
          <p>$37,692</p>
        </div>

        <div className="stat-card cyan">
          <DollarSign size={20} />
          <h3>Daily Profit</h3>
          <p>$3,617</p>
        </div>

        <div className="stat-card green">
          <UserPlus size={20} />
          <h3>Directs</h3>
          <p>2067</p>
          <span className="growth">↑ 4</span>
        </div>

        <div className="stat-card purple">
          <Users size={20} />
          <h3>Teams</h3>
          <p>41277</p>
          <span className="growth">↑ 173</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
