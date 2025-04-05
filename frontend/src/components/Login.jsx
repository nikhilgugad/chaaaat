import React, { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import showAlert from "./AlertPopup";
import "./Form.css";

function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const q = query(
      collection(db, "users"),
      where("mobile", "==", mobile),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      showAlert("Login successful!");
      setTimeout(() => navigate("/home"), 1500);
    } else {
      showAlert("Invalid mobile number or password.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p className="switch-link">
        Don’t have an account? <Link to="/">Register</Link>
      </p>
    </div>
  );
}

export default Login;
