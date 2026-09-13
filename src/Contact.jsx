import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      subject,
      message,
    } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill all the fields.");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">

        <div className="contact-label">
          ✦ CONTACT GIGNOVA
        </div>

        <h1>Let's Connect</h1>

        <p>
          Have a question, suggestion or need help with
          GigNova? We would love to hear from you.
        </p>

      </section>

      <section className="contact-info">

        <div className="contact-info-card">
          <div>📧</div>
          <h3>Email Us</h3>
          <p>support@gignova.com</p>
          <span>We usually respond within 24 hours.</span>
        </div>

        <div className="contact-info-card">
          <div>📞</div>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
          <span>Monday - Friday, 10 AM - 6 PM</span>
        </div>

        <div className="contact-info-card">
          <div>📍</div>
          <h3>Our Location</h3>
          <p>India</p>
          <span>Serving clients and freelancers online.</span>
        </div>

      </section>

      <section className="contact-main">

        <div className="contact-text">

          <span>GET IN TOUCH</span>

          <h2>How can we help?</h2>

          <p>
            Whether you are a client looking to post a gig
            or a freelancer looking for opportunities, feel
            free to contact us.
          </p>

          <div className="contact-points">

            <div>✓ Quick support</div>
            <div>✓ Simple communication</div>
            <div>✓ Help with GigNova features</div>
            <div>✓ Suggestions are welcome</div>

          </div>

        </div>

        <div className="contact-form-card">

          <h2>Send us a message</h2>

          {submitted && (
            <div className="success-message">
              ✓ Message sent successfully!
              Thank you for contacting GigNova.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="contact-row">

              <div className="contact-field">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="contact-field">

              <label>Subject</label>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">
                  Select a subject
                </option>

                <option value="General Question">
                  General Question
                </option>

                <option value="Gig Posting">
                  Gig Posting
                </option>

                <option value="Account Help">
                  Account Help
                </option>

                <option value="Technical Issue">
                  Technical Issue
                </option>

                <option value="Suggestion">
                  Suggestion
                </option>
              </select>

            </div>

            <div className="contact-field">

              <label>Your Message</label>

              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>

      <section className="contact-faq">

        <span>FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">

          <div className="faq-card">
            <h3>How can I post a gig?</h3>
            <p>
              Login to your account and open the Post a Gig
              page. Fill in the project details and submit.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can freelancers browse gigs?</h3>
            <p>
              Yes. Freelancers can browse available gigs
              and view project details.
            </p>
          </div>

          <div className="faq-card">
            <h3>Do I need an account?</h3>
            <p>
              An account is required for features such as
              posting and managing gigs.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can I suggest new features?</h3>
            <p>
              Absolutely! Use the contact form to send
              suggestions and feedback.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;