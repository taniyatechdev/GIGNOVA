import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <div className="about-label">
          ✦ ABOUT GIGNOVA
        </div>

        <h1>Building GigNova</h1>

        <p>
          GigNova is a freelancing platform designed to connect
          clients with talented freelancers. This project was
          developed step-by-step using React and simple
          interactive features.
        </p>

      </section>

      <section className="about-intro">

        <h2>What is GigNova?</h2>

        <p>
          GigNova allows users to explore available freelance gigs,
          view project details, post their own projects and manage
          their posted gigs. The goal is to create a simple,
          user-friendly and interactive freelancing platform.
        </p>

      </section>

      <section className="project-track">

        <div className="track-heading">

          <h2>🚀 Project Development Track</h2>

          <p>
            The journey of GigNova from a basic website to
            an interactive React project.
          </p>

        </div>

        <div className="timeline">

          <div className="track-item">
            <div className="track-number">1</div>

            <div className="track-card">
              <h3>Phase 1 — Basic Website</h3>

              <ul>
                <li>Created the basic GigNova structure.</li>
                <li>Designed the Home page.</li>
                <li>Added Navbar and Footer.</li>
                <li>Created Browse Gigs page.</li>
                <li>Created Post a Gig page.</li>
              </ul>
            </div>
          </div>

          <div className="track-item">
            <div className="track-number">2</div>

            <div className="track-card">
              <h3>Phase 2 — React Conversion</h3>

              <ul>
                <li>Converted the website into React.</li>
                <li>Created reusable components.</li>
                <li>Created GigCard component.</li>
                <li>Used React props.</li>
                <li>Used useState for dynamic features.</li>
              </ul>
            </div>
          </div>

          <div className="track-item">
            <div className="track-number">3</div>

            <div className="track-card">
              <h3>Phase 3 — Gig Features</h3>

              <ul>
                <li>Added gig search.</li>
                <li>Added category filtering.</li>
                <li>Created Gig Details.</li>
                <li>Added Post Gig form.</li>
                <li>Added Dashboard.</li>
                <li>Added Delete Gig functionality.</li>
              </ul>
            </div>
          </div>

          <div className="track-item">
            <div className="track-number">4</div>

            <div className="track-card">
              <h3>Phase 4 — Authentication</h3>

              <ul>
                <li>Created Login page.</li>
                <li>Created Signup page.</li>
                <li>Added email validation.</li>
                <li>Added login and logout.</li>
                <li>Used browser storage.</li>
              </ul>
            </div>
          </div>

          <div className="track-item">
            <div className="track-number">5</div>

            <div className="track-card">
              <h3>Phase 5 — UI & User Experience</h3>

              <ul>
                <li>Improved overall design.</li>
                <li>Added Pista Green and Cream theme.</li>
                <li>Improved cards and forms.</li>
                <li>Added responsive design.</li>
                <li>Improved page navigation.</li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      <section className="current-status">

        <div className="status-box">

          <h2>📌 Current Project Status</h2>

          <p>
            GigNova is currently a React-based freelancing
            platform with interactive gig management,
            authentication, search, filtering and browser
            storage features.
          </p>

          <div className="status-badge">
            ✓ React Project — In Development
          </div>

        </div>

      </section>

      <section className="future-section">

        <h2>🔮 Future Improvements</h2>

        <div className="future-grid">

          <div className="future-card">
            <div>🌐</div>
            <h3>Real Backend</h3>
            <p>
              Connect GigNova with a backend and database
              for online data storage.
            </p>
          </div>

          <div className="future-card">
            <div>💼</div>
            <h3>Proposal System</h3>
            <p>
              Allow freelancers to send proposals to clients.
            </p>
          </div>

          <div className="future-card">
            <div>💳</div>
            <h3>Online Payments</h3>
            <p>
              Add secure payment functionality in the future.
            </p>
          </div>

          <div className="future-card">
            <div>👤</div>
            <h3>Freelancer Profiles</h3>
            <p>
              Add detailed profiles with skills and portfolios.
            </p>
          </div>

          <div className="future-card">
            <div>🔔</div>
            <h3>Notifications</h3>
            <p>
              Add notifications for gigs and project updates.
            </p>
          </div>

          <div className="future-card">
            <div>📱</div>
            <h3>Mobile Experience</h3>
            <p>
              Further improve the mobile experience.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;