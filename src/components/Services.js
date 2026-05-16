import "../styles/services.css";
import {
  FaTruck,
  FaBolt,
  FaShoppingCart,
  FaFileInvoice,
  FaPlaneDeparture,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaTruck />,
      title: "Door-to-Door Delivery",
      text: "We are specialists in providing seamless, end-to-end global shipping solutions, with a primary focus on highly efficient door-to-door services.",
    },
    {
      icon: <FaBolt />,
      title: "Express Courier",
      text: "Time-sensitive document and parcel delivery for urgent business needs.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Logistics",
      text: "Tailored shipping solutions for online retailers looking to expand into Asian and international markets.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Customs Brokerage",
      text: "Expert handling of documentation, regulatory compliance, and customs clearance to ensure smooth border crossings.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Freight Forwarding",
      text: "Scalable solutions for larger shipments via air and sea.",
    },
  ];

  return (
    <section className="services reveal" id="services">
      <div className="services-heading">
        <span>Our Services</span>
        <h2>Courier solutions built for local and global delivery</h2>
        <p>
          JMS Worldwide Express provides reliable courier and logistics services
          for individuals, businesses, online sellers, and international
          shipment needs.
        </p>
      </div>

      <div className="service-boxes">
        {services.map((service, index) => (
          <div className="service-card" key={service.title}>
            <div className="service-top">
              <div className="service-icon">{service.icon}</div>
              <span className="service-number">0{index + 1}</span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.text}</p>

            <a href="#booking" className="service-link">
              Book Service
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;