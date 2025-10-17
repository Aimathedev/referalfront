import React from "react";
import "../css/notification.css";
import { useNavigate } from "react-router-dom";

const Notification = () => {
    const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      user: "John Doe",
      message: "liked your post",
      time: "2 mins ago",
      profileImg: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      user: "Emily Smith",
      message: "commented on your picture",
      time: "10 mins ago",
      profileImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      id: 3,
      user: "David Johnson",
      message: "started following you",
      time: "1 hour ago",
      profileImg: "https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg",
    },
  ];

  return (
    <div className="notification-container">
      <h2 className="notification-heading">Notifications</h2>
      <div className="notification-list">
        {notifications.map((notif) => (
          <div key={notif.id} className="notification-card">
            <img
              src={notif.profileImg}
              alt={notif.user}
              className="notification-avatar"
            />
            <div className="notification-content">
              <p>
                <strong>{notif.user}</strong> {notif.message}
              </p>
              <span className="notification-time">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
