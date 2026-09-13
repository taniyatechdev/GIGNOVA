import React from "react";
import "./Home.css";

function Home({ onBrowse, onPost }) {
  const categories = [
    {
      icon: "💻",
      title: "Web Development",
      text: "Build modern websites and web applications."
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      text: "Find creative designers for your projects."
    },
    {
      icon: "✍️",
      title: "Content Writing",
      text: "Get quality content for your business."
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      text: "Grow your brand with digital experts."
    }
  ];

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="home-hero">

        <div className="hero-content">

          <div className="hero-label">
            ✦ Welcome to GigNova
          </div>

          <h1>
            Find the right
            <span> freelancer </span>
            for your project.
          </h1>

          <p>
            GigNova connects businesses with talented freelancers
            who can turn ideas into reality.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={onBrowse}
            >
              Browse Gigs →
            </button>

            <button
              className="secondary-btn"
              onClick={onPost}
            >
              Post a Gig
            </button>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/6392968/pexels-photo-6392968.jpeg"
            alt="Freelancers working"
          />
        </div>

      </section>

      {/* Stats */}
      <section className="home-stats">

        <div>
          <h2>100+</h2>
          <p>Freelancers</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Projects</p>
        </div>

        <div>
          <h2>25+</h2>
          <p>Categories</p>
        </div>

        <div>
          <h2>95%</h2>
          <p>Happy Clients</p>
        </div>

      </section>

      {/* Categories */}
      <section className="categories-section">

        <div className="section-heading">
          <span>EXPLORE</span>

          <h2>
            Popular Categories
          </h2>

          <p>
            Explore different freelance services available
            on GigNova.
          </p>
        </div>

        <div className="category-grid">

          {categories.map((category, index) => (
            <div
              className="category-card"
              key={index}
              onClick={onBrowse}
            >
              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p>{category.text}</p>

              <button>
                Explore →
              </button>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="home-cta">

        <div>
          <span>START TODAY</span>

          <h2>
            Ready to bring your idea to life?
          </h2>

          <p>
            Find skilled freelancers or post your project
            on GigNova.
          </p>
        </div>

        <button onClick={onPost}>
          Post Your Gig →
        </button>

      </section>

    </div>
  );
}

export default Home;