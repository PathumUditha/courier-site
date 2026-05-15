import "../styles/contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact reveal" id="contact">
      <div className="contact-heading">
        <span>Contact JMS</span>
        <h2>Need courier support? We are ready to help.</h2>
        <p>
          Reach JMS Worldwide Express for pickup requests, shipment inquiries,
          delivery updates, and international courier support.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>

          <h3>Phone</h3>

          <a href="tel:+94741926764">+94 741 926 764</a>
          <a href="tel:+94112889845">+94 112 889 845</a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <h3>Email</h3>

          <a href="mailto:Info@jmsworlde.com">Info@jmsworlde.com</a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>

          <h3>Address</h3>

          <a
            href="https://www.google.com/maps?q=6.8648625,79.870718&z=17&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            No. 150, Hospital Road, Kalubovila, Dehiwala, Sri Lanka.
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaClock />
          </div>

          <h3>Working Hours</h3>

          <p>Monday - Saturday</p>
          <p>8.00 AM - 6.00 PM</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;