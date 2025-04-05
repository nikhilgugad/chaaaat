import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";

function Chat() {
  const { mobile } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages((prev) => [...prev, { text: message, fromMe: true }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Chat with {mobile}</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.fromMe ? "sent" : "received"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSend}>
        <textarea
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              handleSend(e);
            }
          }}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
