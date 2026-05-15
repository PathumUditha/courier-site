import "../styles/whychoose.css";

function WhyChoose() {
  const items = [
    {
      icon: "🌏",
      title: "Regional Expertise",
      text: "In-depth knowledge with over 20 years’ experience of South East Asian trade routes and operation.",
    },
    {
      icon: "✅",
      title: "Reliable Handling",
      text: "A commitment to safety, ensuring your packages arrive intact and on time.",
    },
    {
      icon: "🤝",
      title: "Customer-Centric Approach",
      text: "Personalized support and transparent communication throughout the shipping process.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      text: "Cost-effective international shipping without compromising on service quality.",
    },
  ];

  return (
    <section className="whychoose reveal" id="whychoose">
      <div className="why-heading">
        <span>Why Choose Us</span>
        <h2>Built for speed, trust, and international delivery confidence</h2>
      </div>

      <div className="why-container">
        {items.map((item) => (
          <div className="why-card" key={item.title}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
