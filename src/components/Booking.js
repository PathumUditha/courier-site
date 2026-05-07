import { useState } from "react";
import "../styles/booking.css";

function Booking() {

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);
    e.target.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="booking" id="booking">

      <h2>BOOK A SHIPMENT</h2>

      <p>
        Fill the form below to request a courier pickup.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Sender Name"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          maxLength="10"
          required
          onInput={(e) =>
          e.target.value = e.target.value.replace(/[^0-9]/g, "")
  }
          />
        

        <input
          type="text"
          placeholder="Pickup Address"
          required
        />

        <input
          type="text"
          placeholder="Delivery Address"
          required
        />

        <select required>
          <option value="">
            Package Type
          </option>

          <option>
            Document
          </option>

          <option>
            Parcel
          </option>

          <option>
            Cargo
          </option>

          <option>
            E-Commerce Delivery
          </option>
        </select>

        <input
          type="text"
          placeholder="Package Weight (kg)"
          required
        />

        <textarea
          placeholder="Additional Message"
        ></textarea>

        <button type="submit">
          SUBMIT BOOKING
        </button>

      </form>

      {success && (
        <div className="success-message">
          ✅ Booking Submitted Successfully!
        </div>
      )}

    </section>
  );
}

export default Booking;