import "../styles/footer.css";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer fade-up">
      <div className="footer-top">
        <div className="footer-section footer-brand">
          <h3>JMS Worldwide Express</h3>
          <p>
            Reliable courier, cargo, and logistics solutions across Sri Lanka and worldwide.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#tracking">Tracking</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <a href="tel:+94112889845" className="footer-contact-link">
            <FaPhoneAlt />
            <span>+94 112 889 845</span>
          </a>

          <a href="tel:+94741926764" className="footer-contact-link">
            <FaMobileAlt />
            <span>+94 741 926 764</span>
          </a>

          <a href="mailto:Info@jmsworlde.com" className="footer-contact-link">
            <FaEnvelope />
            <span>Info@jmsworlde.com</span>
          </a>

          <a
            href="https://www.google.com/maps?q=6.8648625,79.870718&z=17&hl=en"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-link"
          >
            <FaMapMarkerAlt />
            <span>Dehiwala, Sri Lanka</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 JMS Worldwide Express. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;