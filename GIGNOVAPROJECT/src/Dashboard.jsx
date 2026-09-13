import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard({ user, gigs, onDeleteGig, onViewGig }) {
  const [activeTab, setActiveTab] = useState("gigs");

  const myGigs = gigs.filter(
    (gig) => gig.postedBy === (user ? user.name : "You")
  );

  return (
    <div className="dashboard-page">

      <section className="dashboard-header">

        <div>
          <span>✦ YOUR WORKSPACE</span>

          <h1>
            Welcome, {user ? user.name : "User"}!
          </h1>

          <p>
            Manage your gigs and track your freelance activity.
          </p>
        </div>

        <div className="dashboard-avatar">
          {user
            ? user.name.charAt(0).toUpperCase()
            : "U"}
        </div>

      </section>

      <section className="dashboard-content">

        <div className="dashboard-stats">

          <div className="dashboard-stat">
            <span>📁</span>
            <div>
              <h3>{myGigs.length}</h3>
              <p>My Gigs</p>
            </div>
          </div>

          <div className="dashboard-stat">
            <span>💼</span>
            <div>
              <h3>0</h3>
              <p>Proposals</p>
            </div>
          </div>

          <div className="dashboard-stat">
            <span>⭐</span>
            <div>
              <h3>0</h3>
              <p>Completed</p>
            </div>
          </div>

        </div>

        <div className="dashboard-tabs">

          <button
            className={activeTab === "gigs" ? "active" : ""}
            onClick={() => setActiveTab("gigs")}
          >
            My Gigs
          </button>

          <button
            className={activeTab === "proposals" ? "active" : ""}
            onClick={() => setActiveTab("proposals")}
          >
            My Proposals
          </button>

        </div>

        {activeTab === "gigs" && (
          <div className="dashboard-section">

            <div className="dashboard-title">
              <h2>My Posted Gigs</h2>

              <p>
                Projects posted by you
              </p>
            </div>

            {myGigs.length > 0 ? (
              <div className="dashboard-gigs">

                {myGigs.map((gig) => (
                  <div
                    className="dashboard-gig"
                    key={gig.id}
                  >

                    <div className="dashboard-gig-info">

                      <span>
                        {gig.category}
                      </span>

                      <h3>{gig.title}</h3>

                      <p>{gig.description}</p>

                      <div className="dashboard-details">
                        <strong>{gig.budget}</strong>

                        <span>
                          Deadline: {gig.deadline}
                        </span>

                        <span>
                          Experience: {gig.experience}
                        </span>
                      </div>

                    </div>

                    <div className="dashboard-actions">

                      {onViewGig && (
                        <button
                          className="view-dashboard"
                          onClick={() => onViewGig(gig)}
                        >
                          View
                        </button>
                      )}

                      <button
                        className="delete-dashboard"
                        onClick={() => {
                          const confirmDelete =
                            window.confirm(
                              "Are you sure you want to delete this gig?"
                            );

                          if (confirmDelete) {
                            onDeleteGig(gig.id);
                          }
                        }}
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            ) : (
              <div className="empty-dashboard">

                <div>📁</div>

                <h3>No gigs posted yet</h3>

                <p>
                  Your posted gigs will appear here.
                </p>

              </div>
            )}

          </div>
        )}

        {activeTab === "proposals" && (
          <div className="empty-dashboard">

            <div>💼</div>

            <h3>No proposals yet</h3>

            <p>
              Your proposals will appear here in the future.
            </p>

          </div>
        )}

      </section>

    </div>
  );
}

export default Dashboard;