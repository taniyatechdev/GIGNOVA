import React, { useState } from "react";
import "./BrowseGigs.css";

import GigCard from "./GigCard";

function BrowseGigs({ gigs, onView }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing"
  ];

  const filteredGigs = gigs.filter((gig) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      gig.title.toLowerCase().includes(searchText) ||
      gig.category.toLowerCase().includes(searchText) ||
      gig.skills.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" ||
      gig.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="browse-page">

      <section className="browse-header">
        <span>✦ FIND YOUR NEXT OPPORTUNITY</span>

        <h1>Browse Gigs</h1>

        <p>
          Explore freelance projects and find the right
          opportunity for your skills.
        </p>
      </section>

      <section className="browse-content">

        <div className="browse-tools">

          <input
            type="text"
            placeholder="Search gigs, skills or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        <div className="browse-result">
          <h2>
            Available Gigs
          </h2>

          <p>
            {filteredGigs.length} project
            {filteredGigs.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {filteredGigs.length > 0 ? (
          <div className="gigs-grid">

            {filteredGigs.map((gig) => (
              <GigCard
                key={gig.id}
                gig={gig}
                onView={onView}
              />
            ))}

          </div>
        ) : (
          <div className="no-gigs">
            <div>🔍</div>

            <h3>No gigs found</h3>

            <p>
              Try changing your search or category filter.
            </p>
          </div>
        )}

      </section>

    </div>
  );
}

export default BrowseGigs;