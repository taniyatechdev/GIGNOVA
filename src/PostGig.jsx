import React, { useState } from "react";
import "./PostGig.css";

function PostGig({ onAddGig, user }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    budget: "",
    skills: "",
    deadline: "",
    experience: "Beginner",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.description ||
      !formData.budget ||
      !formData.skills ||
      !formData.deadline
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (Number(formData.budget) <= 0) {
      alert("Budget must be greater than 0.");
      return;
    }

    const newGig = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      description: formData.description,
      budget: "₹" + Number(formData.budget).toLocaleString("en-IN"),
      skills: formData.skills,
      deadline: formData.deadline,
      experience: formData.experience,
      postedBy: user ? user.name : "You",
    };

    onAddGig(newGig);

    setFormData({
      title: "",
      category: "",
      description: "",
      budget: "",
      skills: "",
      deadline: "",
      experience: "Beginner",
    });

    alert("Gig posted successfully!");
  };

  return (
    <div className="post-page">

      <section className="post-header">
        <span>✦ CREATE AN OPPORTUNITY</span>

        <h1>Post a Gig</h1>

        <p>
          Tell freelancers about your project and find
          the right person for the job.
        </p>
      </section>

      <section className="post-content">

        <div className="post-form-card">

          <h2>Project Details</h2>

          <form onSubmit={handleSubmit}>

            <div className="post-field">
              <label>Project Title *</label>

              <input
                type="text"
                name="title"
                placeholder="e.g. Build a React Website"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="post-row">

              <div className="post-field">
                <label>Category *</label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Graphic Design">
                    Graphic Design
                  </option>
                  <option value="Content Writing">
                    Content Writing
                  </option>
                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>
                </select>
              </div>

              <div className="post-field">
                <label>Budget (₹) *</label>

                <input
                  type="number"
                  name="budget"
                  placeholder="10000"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="post-field">
              <label>Project Description *</label>

              <textarea
                name="description"
                placeholder="Describe your project..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="post-field">
              <label>Required Skills *</label>

              <input
                type="text"
                name="skills"
                placeholder="React, JavaScript, CSS"
                value={formData.skills}
                onChange={handleChange}
              />

              <small>
                Separate multiple skills using commas.
              </small>
            </div>

            <div className="post-row">

              <div className="post-field">
                <label>Deadline *</label>

                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>

              <div className="post-field">
                <label>Experience Level</label>

                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">
                    Intermediate
                  </option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

            </div>

            <button
              type="submit"
              className="post-submit"
            >
              Post Gig →
            </button>

          </form>
        </div>

      </section>

    </div>
  );
}

export default PostGig;