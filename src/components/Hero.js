import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">Premium Courier & Logistics Service</span>

        <h1>
          Ship faster. <br />
          Track smarter. <br />
          Deliver worldwide.
        </h1>

        <p className="subtitle">
          JMS Worldwide Express provides reliable door-to-door courier, cargo,
          e-commerce logistics, and international shipping solutions from Sri Lanka
          to the world.
        </p>

        <div className="hero-actions">
          <a href="#tracking" className="hero-btn primary">Track Shipment</a>
          <a href="#booking" className="hero-btn secondary">Book a Shipment</a>
        </div>

        <div className="hero-mini-stats">
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

      <div className="hero-visual">
        <div className="shipment-card floating">
          <div className="shipment-card-top">
            <span>Active Route</span>
            <strong>JMS0001</strong>
          </div>

          <h3>Colombo → Singapore</h3>

          <div className="route-line">
            <span className="active"></span>
            <span className="active"></span>
            <span></span>
          </div>

          <div className="shipment-status">
            <p>Current Status</p>
            <h4>In Transit</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
