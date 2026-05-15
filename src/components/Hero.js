import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-shell">
        <div className="hero-image">
          <picture>
            <source media="(max-width: 900px)" srcSet="/images/hero-mobile.png" />
            <img
              src="/images/hero-desktop.png"
              alt="JMS cargo aircraft, containers, and shipment boxes"
            />
          </picture>
        </div>

        <div className="hero-content-panel">
          <span className="hero-badge">JMS Worldwide Express</span>

          <h1>
            Ship faster.
            <br />
            Track smarter.
            <br />
            Deliver worldwide.
          </h1>

          <p className="hero-text">
            Reliable courier, cargo, e-commerce logistics, and international
            shipping solutions from Sri Lanka to global destinations.
          </p>

          <div className="hero-actions">
            <a href="#tracking" className="hero-btn primary">
              Track Shipment
            </a>

            <a href="#booking" className="hero-btn secondary">
              Book Shipment
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>SEA</strong>
              <span>Regional Expertise</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;