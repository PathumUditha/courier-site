import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img src="/images/logo.png" alt="JMS Logo" />
      </div>

      <div className="contact-box">
        <div className="contact-row">
          <a href="tel:+94112889845" className="contact-item">
            <span className="contact-icon">☎</span>
            <span>+94 112 889 845</span>
          </a>

          <a href="mailto:info@jmsworldwide.com" className="contact-item">
            <span className="contact-icon">✉</span>
            <span>Info@jmsworlde.com</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Sri+Lanka"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">📍</span>
            <span>Sri Lanka.</span>
          </a>
        </div>

        <div className="contact-row second">
          <a href="tel:+94741926764" className="contact-item">
            <span className="contact-icon">📱</span>
            <span>+94 741 926 764</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;