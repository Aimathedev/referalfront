import React, { useState } from "react";
import "../css/signup.css"; 
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react"; 

const EditProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", { username, profilePic });
    alert("✅ Profile updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Edit Your Profile</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="profile-pic-section">
            <div className="profile-pic-wrapper">
              <img
                src={preview || "https://via.placeholder.com/100"}
                alt="Profile"
                className="profile-pic-preview"
              />
              <label htmlFor="profilePicUpload" className="camera-icon">
                <Camera size={20} />
              </label>
              <input
                type="file"
                id="profilePicUpload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <input
            type="text"
            name="username"
            placeholder="Enter new username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            required
          />

          <button type="submit" className="signup-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
