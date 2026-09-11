function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">

          <p className="hero-subtitle">
            EXPLORE THE WORLD
          </p>

          <h1>
            Your Journey Begins Here
          </h1>

          <p className="hero-description">
            Discover beautiful destinations, unforgettable experiences,
            and carefully planned trips made just for you.
          </p>

          <button className="explore-btn">
            Explore Destinations
          </button>

          <div className="search-box">
  <input
    type="text"
    placeholder="Where do you want to go?"
  />

  <select defaultValue="">
    <option value="" disabled>
      Select trip type
    </option>
    <option value="beach">Beach</option>
    <option value="mountain">Mountain</option>
    <option value="city">City</option>
    <option value="adventure">Adventure</option>
  </select>

  <button className="search-btn">
    Search
  </button>
</div>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">

        <p className="section-subtitle">
          DISCOVER MORE
        </p>

        <h2>
          Travel. Explore. Experience.
        </h2>

        <p>
          From relaxing beaches to breathtaking mountains,
          we help you discover the perfect destination for your next adventure.
        </p>

      </section>

    </main>
  );
}

export default Home;