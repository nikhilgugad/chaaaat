import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleNewChat = () => {
    const number = prompt("Enter mobile number to chat:");
    if (number) navigate(`/chat/${number}`);
  };

  return (
    <div className="home-container">
      <h2 className="app-title">achat</h2>
      <div className="chats-section">
        <h3 className="section-title">Your chats</h3>
        <div className="chat-list">
          <div className="chat-card">+91 9876543210</div>
          <div className="chat-card">+91 9999999999</div>
        </div>
      </div>
      <button className="new-chat-btn" onClick={handleNewChat}>
        Start New Chat
      </button>
    </div>
  );
}

export default Home;
