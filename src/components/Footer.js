import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer fade-up">

      <div className="footer-top">

        <div className="footer-section">
          <h3>JMS Worldwide Express</h3>
          <p>
            Reliable courier, cargo, and logistics solutions
            across Sri Lanka and worldwide.
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

          <a href="tel:+94112889845">
            📞 +94 112 889 845
          </a>

          <a href="mailto:Info@jmsworlde.com">
            ✉ Info@jmsworlde.com
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Sri+Lanka"
            target="_blank"
            rel="noreferrer"
          >
             No. 239/14/2A, Finco Watta, Polgahahena, Ragama, Sri Lanka.
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