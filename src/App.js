import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Booking from "./components/Booking";
import Tracking from "./components/Tracking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Booking />
      <Tracking />
      <Contact />
      <Footer />
      <Whatsapp />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
