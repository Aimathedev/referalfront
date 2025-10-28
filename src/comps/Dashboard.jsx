import React, { useState, useEffect } from "react";
import {
  Users,
  DollarSign,
  Link as LinkIcon,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
const dashboardData = {
  totalReferrals: 15,
  totalEarnings: 125.5,
  referralLink: "https://reactify.com/ref=xy123",
  referrals: [
    { id: 1, user: "alex_j", joined: "2025-10-25", earnings: 10.0 },
    { id: 2, user: "sara_k", joined: "2025-10-24", earnings: 8.5 },
    { id: 3, user: "mike_t", joined: "2025-10-22", earnings: 12.0 },
    { id: 4, user: "jenna_p", joined: "2025-10-21", earnings: 5.0 },
  ],
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
          />
        </svg>
        <h1>Refferal front</h1>
      </div>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#dashboard">Dashboard</a>

        <Link to="/profile">
          <a href="#profile">Profile</a>
        </Link>

        <Link to="/subc">
          <a href="#">Subcription</a>
        </Link>
        <Link to="/">
          <a href="#" className="logout-btn">
            <LogOut size={16} /> Logout
          </a>
        </Link>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
};

const Dashboard = () => {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [loading, setLoading] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dashboardData.referralLink);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy"), 2000);
    } catch {
      setCopyStatus("Failed");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-body">
      <Header />

      <main className="dashboard-container">
        <h1 className="dashboard-title">Your Referral Dashboard</h1>

        <section className="dashboard-grid">
          <div className="main-content">
            <div className="stats-grid">
              {loading ? (
                <>
                  <div className="stat-card shimmer"></div>
                  <div className="stat-card shimmer"></div>
                </>
              ) : (
                <>
                  <div className="stat-card">
                    <div className="card-icon">
                      <Users />
                    </div>
                    <div className="card-content">
                      <h3>Total Referrals</h3>
                      <p>{dashboardData.totalReferrals}</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="card-icon">
                      <DollarSign />
                    </div>
                    <div className="card-content">
                      <h3>Total Earnings</h3>
                      <p>${dashboardData.totalEarnings.toFixed(2)}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div
              className={`referral-link-section ${loading ? "shimmer" : ""}`}
            >
              {!loading && (
                <>
                  <h3>Your Referral Link</h3>
                  <div className="link-wrapper">
                    <LinkIcon size={20} className="link-icon" />
                    <input
                      type="text"
                      value={dashboardData.referralLink}
                      readOnly
                    />
                    <button
                      onClick={handleCopy}
                      className={`copy-button ${
                        copyStatus === "Copied!" ? "copied" : ""
                      }`}
                    >
                      {copyStatus}
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="referral-levels-section">
              <h3>Referral Levels</h3>
              <div className="levels-container">
                <div className="level-card bronze">
                  <img src="/src/images/bronze.png" alt="Bronze Level" />
                  <p>Bronze</p>
                  <p>Level 1</p>
                </div>
                <div className="level-card gold">
                  <img src="/src/images/gold.png" alt="Gold Level" />
                  <p>Gold</p>
                  <p>Level 2</p>
                </div>
                <div className="level-card diamond">
                  <img src="/src/images/diamond.png" alt="Diamond Level" />
                  <p>Diamond</p>
                  <p>Level 3</p>
                </div>
              </div>

              <div className="referral-summary-cards">
                <div className="summary-card">
                  <h4>Direct Referrals</h4>
                  <p className="summary-value">45</p>
                </div>
                <div className="summary-card">
                  <h4>On Chain</h4>
                  <p className="summary-value">18</p>
                </div>
                <div className="summary-card">
                  <h4>Total Earnings</h4>
                  <p className="summary-value">$820</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="ads-sidebar">
            {loading ? (
              <>
                <div className="ad-banner shimmer"></div>
                <div className="ad-banner shimmer"></div>
              </>
            ) : (
              <>
                <div className="ad-banner">
                  <p>Your Ad Banner (300x250)</p>
                </div>
                <div className="ad-banner">
                  <p>Sponsored Content (300x250)</p>
                </div>
              </>
            )}
          </aside>
        </section>

        <section className="referrals-list-section">
          <h2 className="referrals-title">Your Referrals</h2>
          <div className="referrals-list">
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="referral-card shimmer"></div>
                  ))
              : dashboardData.referrals.map((ref) => (
                  <div className="referral-card" key={ref.id}>
                    <div className="ref-item" data-label="User">
                      <span className="ref-user-avatar">
                        {ref.user.charAt(0)}
                      </span>
                      {ref.user}
                    </div>
                    <div className="ref-item" data-label="Joined">
                      {ref.joined}
                    </div>
                    <div className="ref-item ref-earnings" data-label="Earned">
                      ${ref.earnings.toFixed(2)}
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
