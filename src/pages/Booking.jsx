import { useState } from "react";
import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelers, setTravelers] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            package_id: id,
            name,
            email,
            phone,
            travelers,
            travel_date: travelDate,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Booking confirmed successfully!");

        setName("");
        setEmail("");
        setPhone("");
        setTravelers("");
        setTravelDate("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Unable to connect to server");
    }
  };

  return (
    <main className="booking-page">
      <div className="booking-box">
        <h1>Book Your Trip</h1>

        <p>Package ID: {id}</p>

        <form onSubmit={handleBooking}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Number of Travelers"
            min="1"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            required
          />

          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          />

          <button type="submit">
            Confirm Booking
          </button>
        </form>

        {message && (
          <p className="auth-message">{message}</p>
        )}
      </div>
    </main>
  );
}

export default Booking;