import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Info, 
  Package, 
  Box, 
  Truck, 
  PhoneCall, 
  X 
} from "lucide-react"; // Import the icons
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "header-small" : ""}`}>
        <div className="logo">MovingPackages</div>

        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <nav className="nav">
          <Link to="/"> Home</Link>
          <Link to="/about"> About Us</Link>
          <Link to="/aboutbox"> About Boxes</Link>
          <Link to="/products"> Products</Link>
          <Link to="/ourservices"> Services</Link>
          <Link to="/contact"> Contact </Link>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <span className="close-btn animate-close" onClick={() => setMenuOpen(false)}>
          <X size={20} />
        </span>

        <Link to="/" onClick={() => setMenuOpen(false)}>
          <Home size={20} /> Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <Info size={20} /> About Us
        </Link>
        <Link to="/aboutbox" onClick={() => setMenuOpen(false)}>
          <Box size={20} /> About Boxes
        </Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>
          <Package size={20} /> Products
        </Link>
        <Link to="/ourservices" onClick={() => setMenuOpen(false)}>
          <Truck size={20} /> Services
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <PhoneCall size={20} /> Contact
        </Link>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
}

export default Header;