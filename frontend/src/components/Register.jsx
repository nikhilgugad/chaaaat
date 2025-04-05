import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import showAlert from "./AlertPopup";
import "./Form.css";

function Register() {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobile.length < 10 || name.length === 0 || password.length < 4) {
      showAlert("Please fill all fields properly.");
      return;
    }

    try {
      const usersRef = collection(db, "users");
      await addDoc(usersRef, { mobile, name, password });
      showAlert("Registration successful!");
      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      console.error(error);
      showAlert("Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 4 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p className="switch-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
