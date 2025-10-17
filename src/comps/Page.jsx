// import React from "react";
// import "../css/page.css";
// import { Copy } from "lucide-react"; // for copy icon
// import { useNavigate } from "react-router-dom";

// import { Bell, Edit, DollarSign, Users, UserPlus } from "lucide-react";

// const Page = () => {
//   const navigate = useNavigate();

//   const goToEditProfile = () => {
//     navigate("/edit-profile");
//   };
//   return (
//     <div className="page-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <div className="profile-icon">
//             <Users size={40} />
//           </div>
//           <div className="profile-info">
//             <h2 className="profile-name">Aima Aziz</h2>
//             <p className="profile-id">ID: 1</p>
//           </div>
//           <div className="profile-actions">
//             <button className="icon-btn"><Bell size={18} /></button>
//             <button className="icon-btn"><Edit size={18} /></button>
//           </div>
//         </div>

//         <hr className="divider" />

//         <div className="referral-section">
//           <p className="referral-label">Personal Referral Link</p>
//           <div className="referral-box">
//             <span className="referral-link">theeagles.io/PersonalLink?id=1</span>
//             <button className="copy-btn"><Copy size={16} /></button>
//           </div>
//         </div>
//       </div>

//       <div className="stats-grid">
//         <div className="stat-card blue">
//           <DollarSign size={20} />
//           <h3>Total Profit</h3>
//           <p>$37,692</p>
//         </div>

//         <div className="stat-card cyan">
//           <DollarSign size={20} />
//           <h3>Daily Profit</h3>
//           <p>$3,617</p>
//         </div>

//         <div className="stat-card green">
//           <UserPlus size={20} />
//           <h3>Directs</h3>
//           <p>2067</p>
//           <span className="growth">↑ 4</span>
//         </div>

//         <div className="stat-card purple">
//           <Users size={20} />
//           <h3>Teams</h3>
//           <p>41277</p>
//           <span className="growth">↑ 173</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


// import React from "react";
// import { Copy } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import "../css/page.css";

// const Page = () => {
//   const navigate = useNavigate();

//   const goToEditProfile = () => {
//     navigate("/edit-profile");
//   };

//   return (
//     <div className="dashboard-container">
//       <header className="dashboard-header">
//         <h2 className="dashboard-title">Aima Aziz</h2>
//         <div className="referral-link-box">
//           <input
//             type="text"
//             className="referral-link-input"
//             value="https://yourwebsite.com/referral/12345"
//             readOnly
//           />
//           <Copy
//             size={22}
//             className="copy-icon"
//             onClick={goToEditProfile}
//             title="Go to Edit Profile"
//           />
//         </div>
//       </header>

//       <section className="referral-summary-cards">
//         <div className="summary-card">
//           <h4>Total Referrals</h4>
//           <p className="summary-value">45</p>
//         </div>
//         <div className="summary-card">
//           <h4>Active Users</h4>
//           <p className="summary-value">28</p>
//         </div>
//         <div className="summary-card">
//           <h4>Bonus Earned</h4>
//           <p className="summary-value">$320</p>
//         </div>
//       </section>

//       <section className="referral-levels-section">
//         <h3 className="section-title">Referral Levels</h3>
//         <div className="levels-container">
//           <div className="level-card">
//             <h4>Level 1</h4>
//             <p>20 Users</p>
//           </div>
//           <div className="level-card">
//             <h4>Level 2</h4>
//             <p>15 Users</p>
//           </div>
//           <div className="level-card">
//             <h4>Level 3</h4>
//             <p>10 Users</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;


// import React from "react";
// import "../css/page.css";
// import { Copy, Bell, Edit, DollarSign, Users, UserPlus } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Page = () => {
//   const navigate = useNavigate();

//   const goToEditProfile = () => {
//     navigate("/edit-profile");
//   };

//   return (
//     <div className="page-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <div className="profile-icon">
//             <Users size={40} />
//           </div>
//           <div className="profile-info">
//             <h2 className="profile-name">Aima Aziz</h2>
//             <p className="profile-id">ID: 1</p>
//           </div>
//           <div className="profile-actions">
//             <button className="icon-btn"><Bell size={18} /></button>
//             <button className="icon-btn"><Edit size={18} /></button>
//           </div>
//         </div>

//         <hr className="divider" />

//         <div className="referral-section">
//           <p className="referral-label">Personal Referral Link</p>
//           <div className="referral-box">
//             <span className="referral-link">theeagles.io/PersonalLink?id=1</span>

//             <button className="copy-btn" onClick={goToEditProfile}>
//               <Copy size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="stats-grid">
//         <div className="stat-card blue">
//           <DollarSign size={20} />
//           <h3>Total Profit</h3>
//           <p>$37,692</p>
//         </div>

//         <div className="stat-card cyan">
//           <DollarSign size={20} />
//           <h3>Daily Profit</h3>
//           <p>$3,617</p>
//         </div>

//         <div className="stat-card green">
//           <UserPlus size={20} />
//           <h3>Directs</h3>
//           <p>2067</p>
//           <span className="growth">↑ 4</span>
//         </div>

//         <div className="stat-card purple">
//           <Users size={20} />
//           <h3>Teams</h3>
//           <p>41277</p>
//           <span className="growth">↑ 173</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
import React from "react";
import "../css/page.css";
import { Copy, Bell, Edit, DollarSign, Users, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  // ✅ Function to navigate to Edit Profile page
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


            {/* ✅ Edit button navigates to Edit Profile */}
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
