function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Bali",
      country: "Indonesia",
      description:
        "Relax on beautiful beaches, explore temples, and experience Bali's unique culture.",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Dubai",
      country: "United Arab Emirates",
      description:
        "Experience luxury, modern architecture, desert adventures, and unforgettable city views.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Paris",
      country: "France",
      description:
        "Discover iconic landmarks, charming streets, world-class food, and romantic experiences.",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Maldives",
      country: "Maldives",
      description:
        "Enjoy crystal-clear waters, tropical islands, peaceful beaches, and luxurious resorts.",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      name: "Switzerland",
      country: "Switzerland",
      description:
        "Explore breathtaking mountains, beautiful lakes, scenic villages, and unforgettable landscapes.",
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      name: "Goa",
      country: "India",
      description:
        "Enjoy sunny beaches, Portuguese architecture, local cuisine, nightlife, and coastal adventures.",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main className="destinations-page">

      <section className="destinations-header">
        <p>EXPLORE THE WORLD</p>

        <h1>Popular Destinations</h1>

        <p>
          Discover amazing places and find your perfect destination
          for your next adventure.
        </p>
      </section>

      <section className="destinations-grid">

        {destinations.map((destination) => (
          <article className="destination-card" key={destination.id}>

            <img
              src={destination.image}
              alt={destination.name}
            />

            <div className="destination-content">

              <h2>{destination.name}</h2>

              <h4>{destination.country}</h4>

              <p>{destination.description}</p>

              <button className="destination-btn">
                Explore
              </button>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}

export default Destinations;