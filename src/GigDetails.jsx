import React from "react";
import "./GigDetails.css";

function GigDetails({ gig, onBack }) {
  if (!gig) {
    return (
      <div className="gig-details-empty">
        <h2>Gig not found</h2>

        <button onClick={onBack}>
          ← Back to Gigs
        </button>
      </div>
    );
  }

  const handleProposal = () => {
    alert(
      "Proposal feature will be available in a future version."
    );
  };

  return (
    <div className="details-page">

      <section className="details-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back to Gigs
        </button>

        <span>{gig.category}</span>

        <h1>{gig.title}</h1>

        <p>
          Posted by 👤 {gig.postedBy}
        </p>

      </section>

      <section className="details-content">

        <div className="details-main">

          <div className="details-card">

            <h2>Project Description</h2>

            <p className="details-description">
              {gig.description}
            </p>

          </div>

          <div className="details-card">

            <h2>Required Skills</h2>

            <div className="details-skills">

              {gig.skills.split(",").map((skill, index) => (
                <span key={index}>
                  {skill.trim()}
                </span>
              ))}

            </div>

          </div>

          <div className="details-card">

            <h2>Project Requirements</h2>

            <ul>
              <li>
                Experience: {gig.experience}
              </li>

              <li>
                Deadline: {gig.deadline}
              </li>

              <li>
                Category: {gig.category}
              </li>
            </ul>

          </div>

        </div>

        <aside className="details-sidebar">

          <div className="budget-box">

            <p>Project Budget</p>

            <h2>{gig.budget}</h2>

            <button
              onClick={handleProposal}
            >
              Send Proposal →
            </button>

          </div>

          <div className="quick-info">

            <div>
              <span>📅</span>
              <p>
                <strong>Deadline</strong>
                <br />
                {gig.deadline}
              </p>
            </div>

            <div>
              <span>📊</span>
              <p>
                <strong>Experience</strong>
                <br />
                {gig.experience}
              </p>
            </div>

            <div>
              <span>👤</span>
              <p>
                <strong>Posted By</strong>
                <br />
                {gig.postedBy}
              </p>
            </div>

          </div>

        </aside>

      </section>

    </div>
  );
}

export default GigDetails;