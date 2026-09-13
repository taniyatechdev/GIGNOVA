import React from "react";
import "./GigCard.css";

function GigCard({ gig, onView }) {
  return (
    <div className="gig-card">

      <div className="gig-card-top">
        <span className="gig-category">
          {gig.category}
        </span>

        <span className="gig-budget">
          {gig.budget}
        </span>
      </div>

      <h3>{gig.title}</h3>

      <p className="gig-description">
        {gig.description}
      </p>

      <div className="gig-skills">
        {gig.skills.split(",").map((skill, index) => (
          <span key={index}>
            {skill.trim()}
          </span>
        ))}
      </div>

      <div className="gig-card-bottom">

        <div className="gig-user">
          👤 {gig.postedBy}
        </div>

        <button onClick={() => onView(gig)}>
          View Gig →
        </button>

      </div>

    </div>
  );
}

export default GigCard;