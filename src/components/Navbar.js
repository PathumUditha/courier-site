import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["HOME", "#home"],
    ["ABOUT", "#about"],
    ["SERVICES", "#services"],
    ["WHY CHOOSE US", "#whychoose"],
    ["BOOKING", "#booking"],
    ["TRACKING", "#tracking"],
    ["CONTACT", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="nav-brand">JMS</a>

      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${open ? "show" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
