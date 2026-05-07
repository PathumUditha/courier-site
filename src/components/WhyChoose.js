import "../styles/whychoose.css";

function WhyChoose() {
  return (
    <section className="whychoose reveal" id="whychoose">

      <h2>WHY CHOOSE US</h2>

      <div className="why-container">

        <div className="why-card">
          <h3>🌏 Regional Expertise</h3>
          <p>
            In-depth knowledge with over 20 years’ experience of South East Asian trade routes and operation.
          </p>
        </div>

        <div className="why-card">
          <h3>✅ Reliability</h3>
          <p>
            A commitment to safety, ensuring your packages arrive intact and on time.
          </p>
        </div>

        <div className="why-card">
          <h3>🤝 Customer-Centric Approach</h3>
          <p>
            Personalized support and transparent communication throughout the shipping process.
          </p>
        </div>

        <div className="why-card">
          <h3>💰 Competitive Pricing</h3>
          <p>
            Cost-effective international shipping without compromising on service quality.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;