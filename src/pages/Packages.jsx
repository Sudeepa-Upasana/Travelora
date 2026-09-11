import { useNavigate } from "react-router-dom";

function Packages() {
  const navigate = useNavigate();
  const packages = [
    {
      id: 1,
      title: "Bali Paradise",
      location: "Bali, Indonesia",
      duration: "5 Days / 4 Nights",
      price: 499,
      description:
        "Enjoy beautiful beaches, traditional temples, local cuisine, and unforgettable island experiences.",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Dubai Explorer",
      location: "Dubai, UAE",
      duration: "4 Days / 3 Nights",
      price: 599,
      description:
        "Experience luxury shopping, breathtaking architecture, desert safaris, and exciting city adventures.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Romantic Paris",
      location: "Paris, France",
      duration: "6 Days / 5 Nights",
      price: 899,
      description:
        "Explore iconic landmarks, romantic streets, world-famous museums, and delicious French cuisine.",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Maldives Escape",
      location: "Maldives",
      duration: "5 Days / 4 Nights",
      price: 799,
      description:
        "Relax in a tropical paradise with crystal-clear waters, private beaches, and luxurious resorts.",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "Swiss Adventure",
      location: "Switzerland",
      duration: "7 Days / 6 Nights",
      price: 1099,
      description:
        "Discover breathtaking mountains, beautiful lakes, scenic villages, and unforgettable train journeys.",
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      title: "Goa Beach Holiday",
      location: "Goa, India",
      duration: "4 Days / 3 Nights",
      price: 299,
      description:
        "Enjoy sunny beaches, delicious food, coastal adventures, nightlife, and relaxing beach experiences.",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main className="packages-page">

      <section className="packages-header">
        <p>TRAVEL WITH US</p>

        <h1>Our Tour Packages</h1>

        <p>
          Choose from our carefully designed travel packages
          and start planning your next unforgettable journey.
        </p>
      </section>

      <section className="packages-grid">

        {packages.map((pkg) => (
          <article className="package-card" key={pkg.id}>

            <div className="package-image-container">

              <img
                src={pkg.image}
                alt={pkg.title}
              />

              <span className="package-price">
                ${pkg.price}
              </span>

            </div>

            <div className="package-content">

              <h2>{pkg.title}</h2>

              <p className="package-location">
                📍 {pkg.location}
              </p>

              <p className="package-duration">
                🕒 {pkg.duration}
              </p>

              <p className="package-description">
                {pkg.description}
              </p>

              <button
  className="book-btn"
  onClick={() => navigate(`/booking/${pkg.id}`)}
>
  Book Now
</button>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}

export default Packages;