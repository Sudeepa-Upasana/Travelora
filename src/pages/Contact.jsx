function Contact() {
  return (
    <main className="contact-page">

      {/* Contact Header */}

      <section className="contact-header">
        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <p>
          Have a question or need help planning your next trip?
          We would love to hear from you.
        </p>
      </section>


      {/* Contact Section */}

      <section className="contact-section">

        {/* Contact Information */}

        <div className="contact-info">

          <p className="contact-small-title">
            CONTACT US
          </p>

          <h2>
            Let's Plan Your Next Adventure
          </h2>

          <p className="contact-description">
            Our travel experts are here to help you choose the
            perfect destination, package, and experience for your trip.
          </p>


          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>Our Office</h3>
                <p>Bhubaneswar, Odisha, India</p>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">
                📞
              </div>

              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <h3>Email</h3>
                <p>hello@travelora.com</p>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">
                🕒
              </div>

              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

        </div>


        {/* Contact Form */}

        <div className="contact-form-container">

          <h2>
            Send Us a Message
          </h2>

          <form className="contact-form">

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                placeholder="What can we help you with?"
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* CTA */}

      <section className="contact-cta">

        <h2>
          Start Planning Your Dream Trip
        </h2>

        <p>
          Let Travelora help you turn your travel dreams into reality.
        </p>

      </section>

    </main>
  );
}

export default Contact;