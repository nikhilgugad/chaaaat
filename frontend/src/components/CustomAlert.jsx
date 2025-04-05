// src/components/CustomAlert.jsx
import React, { useEffect } from "react";
import "./CustomAlert.css";

function CustomAlert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500); // 2.5 seconds me auto-close

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert-box">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default CustomAlert;
