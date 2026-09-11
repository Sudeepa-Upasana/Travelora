function About() {
  return (
    <main className="about-page">

      {/* About Header */}

      <section className="about-header">
        <p>WHO WE ARE</p>

        <h1>About Travelora</h1>

        <p>
          We believe that every journey should create memories
          that last a lifetime.
        </p>
      </section>


      {/* About Story */}

      <section className="about-story">

        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80"
            alt="Beautiful travel destination"
          />
        </div>

        <div className="about-story-content">

          <p className="about-small-title">
            OUR STORY
          </p>

          <h2>
            Making Travel Simple & Memorable
          </h2>

          <p>
            Travelora is a travel agency created to help travelers
            discover amazing destinations without the stress of
            planning everything themselves.
          </p>

          <p>
            From relaxing beach holidays to exciting adventures,
            we carefully design travel experiences that match
            your interests, budget, and expectations.
          </p>

          <p>
            Our goal is simple: to make your journey enjoyable
            from the moment you start planning until you return home.
          </p>

        </div>

      </section>


      {/* Why Choose Us */}

      <section className="why-us">

        <div className="why-us-header">

          <p>WHY CHOOSE US</p>

          <h2>
            Travel With Confidence
          </h2>

          <p>
            We take care of the details so you can focus
            on enjoying your journey.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🌍
            </div>

            <h3>
              Amazing Destinations
            </h3>

            <p>
              Explore carefully selected destinations
              around the world.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💰
            </div>

            <h3>
              Affordable Packages
            </h3>

            <p>
              Enjoy memorable trips with packages
              designed for different budgets.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🛡️
            </div>

            <h3>
              Trusted Service
            </h3>

            <p>
              We focus on providing reliable and
              comfortable travel experiences.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💬
            </div>

            <h3>
              Customer Support
            </h3>

            <p>
              Our team is here to help you before,
              during, and after your trip.
            </p>

          </div>

        </div>

      </section>


      {/* Call To Action */}

      <section className="about-cta">

        <h2>
          Ready to Start Your Journey?
        </h2>

        <p>
          Discover your next adventure with Travelora.
        </p>

        <button className="about-cta-btn">
          Explore Packages
        </button>

      </section>

    </main>
  );
}

export default About;