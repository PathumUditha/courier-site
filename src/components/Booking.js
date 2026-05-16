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
      <div className="booking-info">
        <span>Book a Shipment</span>

        <h2>Request your courier pickup quickly and easily</h2>

        <p>
          Fill in your pickup, delivery, and package details. Our team will
          contact you to confirm the courier arrangement and delivery process.
        </p>

        <div className="booking-highlights">
          <div>
            <strong>01</strong>
            <p>Fill shipment details</p>
          </div>

          <div>
            <strong>02</strong>
            <p>JMS team confirms pickup</p>
          </div>

          <div>
            <strong>03</strong>
            <p>Package collected and delivered</p>
          </div>
        </div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter sender name" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="07XXXXXXXX"
              pattern="[0-9]{10}"
              maxLength="10"
              required
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label>Pickup Address</label>
          <input type="text" placeholder="Enter pickup address" required />
        </div>

        <div className="form-group">
          <label>Delivery Address</label>
          <input type="text" placeholder="Enter delivery address" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Package Type</label>
            <select required>
              <option value="">Select package type</option>
              <option>Document</option>
              <option>Parcel</option>
              <option>Cargo</option>
              <option>E-Commerce Delivery</option>
            </select>
          </div>

          <div className="form-group">
            <label>Package Weight</label>
            <input type="text" placeholder="Example: 2kg" required />
          </div>
        </div>

        <div className="form-group">
          <label>Additional Message</label>
          <textarea placeholder="Add delivery instructions or special notes"></textarea>
        </div>

        <button type="submit">Request Pickup</button>

        {success && (
          <div className="success-message">
            ✅ Booking request submitted successfully! JMS team will contact you soon.
          </div>
        )}
      </form>
    </section>
  );
}

export default Booking;