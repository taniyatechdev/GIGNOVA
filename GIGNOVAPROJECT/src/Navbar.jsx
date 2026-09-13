import React from "react";
import "./Navbar.css";

function Navbar({ user, setPage, onLogout }) {
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => setPage("home")}
      >
        Gig<span>Nova</span>
      </div>

      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>

        <button onClick={() => setPage("browse")}>
          Browse Gigs
        </button>

        <button onClick={() => setPage("about")}>
          About
        </button>

        <button onClick={() => setPage("contact")}>
          Contact
        </button>

        {user ? (
          <>
            <button
              className="nav-dashboard"
              onClick={() => setPage("dashboard")}
            >
              Dashboard
            </button>

            <button
              className="nav-logout"
              onClick={onLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="nav-login"
              onClick={() => setPage("login")}
            >
              Login
            </button>

            <button
              className="nav-signup"
              onClick={() => setPage("signup")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;