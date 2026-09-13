import React, { useState } from "react";
import "./Login.css";

function Login({ setPage, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const savedUser = localStorage.getItem("gignovaUser");

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email !== user.email || password !== user.password) {
      alert("Incorrect email or password.");
      return;
    }

    onLogin(user);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          🔐
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to continue using GigNova.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="login-field">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login →
          </button>

        </form>

        <p className="login-signup">
          Don't have an account?

          <button onClick={() => setPage("signup")}>
            Sign Up
          </button>
        </p>

      </div>

    </div>
  );
}

export default Login;