import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact reveal" id="contact">
      <h2>CONTACT US</h2>

      <div className="contact-container">

        <div className="contact-card">
          <h3>📞 Phone</h3>
            <a href="tel:+94741926764">
               +94 741 926 764
            </a>
            <p>   
                <br></br>
            </p>
            <a href="tel:+94 112 889 845">
               +94 112 889 845
            </a>
    
        </div>

        <div className="contact-card">
          <h3>✉ Email</h3>
      
           <a href="mailto:Info@jmsworlde.com">
              Info@jmsworlde.com
           </a>
         
        </div>

        <div className="contact-card">
          <h3>📍 Address</h3>
          <a
             href="https://maps.app.goo.gl/reqzhszCtdbY3fUh9"
             target="_blank"
             rel="noreferrer"
          >   
             No. 239/14/2A, Finco Watta, Polgahahena, Ragama, Sri Lanka.
          </a>
        </div>

        

        <div className="contact-card">
          <h3>🕒 Working Hours</h3>
          <p>Monday - Saturday</p>
          <p>8.00 AM - 6.00 PM</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;