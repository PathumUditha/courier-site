import "../styles/services.css";

function Services() {
  return (
    <section className="services reveal" id="services">
      <h2>OUR SERVICES</h2>

      <div className="service-boxes">

        <div className="service-card">
          <h3>🚪 Door to Door Delivery</h3>
          <p>
            Our flagship service. We handle the entire journey—from your doorstep in Sri Lanka to the final recipient's desk abroad.
          </p>
        </div>

        <div className="service-card">
          <h3>⚡ Express Courier</h3>
          <p>
            Time-sensitive document and parcel delivery for urgent business needs.
          </p>
        </div>

        <div className="service-card">
          <h3>🛒 E-Commerce Logistics</h3>
          <p>
            Tailored shipping solutions for online retailers looking to expand into Asian and international markets.
          </p>
        </div>

        <div className="service-card">
          <h3>🛃 Customs Brokerage</h3>
          <p>
            Expert handling of documentation and regulatory compliance to ensure smooth border crossings.
          </p>
        </div>

        <div className="service-card">
          <h3>✈ Freight Forwarding</h3>
          <p>
           Scalable solutions for larger shipments via air and sea.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;