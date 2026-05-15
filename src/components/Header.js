import "../styles/header.css";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <header className="top-header">
      <div className="header-logo-wrap">
        <img src="/images/logo.png" alt="JMS Worldwide Express Logo" />
      </div>

      <div className="header-info-grid">
        <a href="tel:+94112889845" className="header-info-card">
          <span><FaPhoneAlt /></span>
          <div>
            <small>Call Office</small>
            <strong>+94 112 889 845</strong>
          </div>
        </a>

        <a href="tel:+94741926764" className="header-info-card">
          <span><FaMobileAlt /></span>
          <div>
            <small>Mobile</small>
            <strong>+94 741 926 764</strong>
          </div>
        </a>

        <a href="mailto:Info@jmsworlde.com" className="header-info-card">
          <span><FaEnvelope /></span>
          <div>
            <small>Email</small>
            <strong>Info@jmsworlde.com</strong>
          </div>
        </a>
      </div>

      <div className="mobile-header-actions">
        <a href="tel:+94741926764">Call</a>
        <a href="https://wa.me/94741926764" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Header;