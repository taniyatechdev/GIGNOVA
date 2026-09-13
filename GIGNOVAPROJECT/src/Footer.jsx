import React from "react";
import "./Footer.css";

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <h2>
            Gig<span>Nova</span>
          </h2>

          <p>
            Connecting talented freelancers with exciting
            opportunities.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("browse")}>
            Browse Gigs
          </button>

          <button onClick={() => setPage("about")}>
            About
          </button>

          <button onClick={() => setPage("contact")}>
            Contact
          </button>
        </div>

        <div className="footer-connect">
          <h3>Connect With Us</h3>

          <p>📧 support@gignova.com</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 GigNova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;