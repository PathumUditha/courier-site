import "../styles/about.css";

function About() {
  return (
    <section className="about reveal" id="about">
      <div className="about-content">
        <span className="section-tag">About JMS</span>
        <h2>Connecting Sri Lanka with the global marketplace</h2>

        <p>
          The JMS Worldwide Express (Pvt) Ltd. is a Sri Lankan courier and logistics
          solutions provider focused on seamless door-to-door shipping, reliable parcel
          movement, and professional customer support.
        </p>

        <p>
          We specialize in South East Asian trade routes including Hong Kong, China,
          South Korea, Taiwan, Singapore, Malaysia, Thailand, Japan, and Indonesia.
          Beyond Asia, we support shipping needs across the Middle East, Europe, and
          North America with careful handling and transparent communication.
        </p>
      </div>

      <div className="about-card-stack">
        <div className="about-card dark">
          <h3>Global Reach</h3>
          <p>Courier and logistics solutions for regional and international destinations.</p>
        </div>
        <div className="about-card light">
          <h3>Door-to-Door Focus</h3>
          <p>From pickup in Sri Lanka to final delivery overseas.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
