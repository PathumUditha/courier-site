import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Welcome to The JMS Worldwide <br />
          Express (Pvt) Ltd.
        </h1>

        <p className="subtitle">
          We are one of the leading integrated air express carrier and <br />
          premium logistics service provider.
        </p>

        <p className="website">www.JMSworldwide.com</p>

        <a href="#tracking" className="hero-btn">
          TRACK SHIPMENT
        </a>
      </div>
    </section>
  );
}

export default Hero;