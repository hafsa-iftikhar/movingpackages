import React, { useEffect, useState } from 'react';
import './Home.css';
import BoxHero from '../components/BoxHero';

////////////////////// SECTION: 04 DATA
const products = [
  {
    id: 1,
    title: "Bespoke Cardboard Boxes",
    tag: "Custom Made",
    img: "/images/bespoke.webp",
  },
  {
    id: 2,
    title: "Postal Boxes",
    tag: "E-Commerce",
    img: "/images/postal.webp",
  },
  {
    id: 3,
    title: "Fittings and Divisions",
    tag: "Internal Protection",
    img: "/images/fitting.webp",
  },
  {
    id: 4,
    title: "Die Cut Packaging",
    tag: "Precision Cut",
    img: "/images/diecut2.webp",
  },
  {
    id: 5,
    title: "Corrugated Boxes",
    tag: "Heavy Duty",
    img: "/images/corrugated.webp",
  },
  {
    id: 6,
    title: "Cardboard Counter Displays",
    tag: "Retail POS",
    img: "/images/counter.webp",
  },
];

const Home = () => {
  //////////////for mobileeee
const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 992);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
///////////////////////////
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger as soon as 10% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));
  
    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/*********** HERO SECTION: 01************************/}
 {isMobile ? (
  <section className="hero-mobile reveal active">
    <div className="hero-mobile-bg"></div>
    <div className="hero-mobile-overlay"></div>
    <h1 className="mobile-bg-text">FACTORY</h1>
    <div className="hero-mobile-content">
      <span className="hero-mobile-badge">
        INDUSTRIAL PACKAGING FACTORY
      </span>

      <h1>
        CORRUGATED <br />
        CARTONS & 
        PACKAGING
      </h1>
      <p>
        Leading manufacturing factory producing custom heavy-duty cartons, shipping boxes, and protective industrial packaging built for all commercial needs.
      </p>
      <button className="hero-mobile-btn">
        Explore Products
      </button>
    </div>
  </section>
) : (
  <section className="hero-split reveal ">
    <div className="hero-left">
      <h1 className="bg-text-faded">FACTORY</h1>
      <div className="hero-content">
        <span className="hero-badge">MANUFACTURING EXCELLENCE</span>
        <h1 className="line-text">Custom Cartons & Packaging Solutions</h1>
        <p className="hero-description">
          We manufacture premium corrugated cartons, custom cardboard boxes, and heavy-duty industrial packaging directly from our factory to your business.
        </p>
        <div className="hero-btns">
          <button className="btn-outline-minimal">Explore Products</button>
        </div>
      </div>
    </div>
    <div className="hero-right">
      <div className="hero-image-wrapper">
        <img src="/images/3.webp" className="right-slide-img" alt="Packaging Cartons Factory" />
        <div className="box-shadow-accent"></div>
      </div>
    </div>
  </section>
)}

      {/* ================= MOVING TEXT STRIP SECTION: 02 ================= */}
      <section className="cross-slider-section">
        {/* TOP SLIDER */}
        <div className="slider slider-top">
          <div className="slider-track">
            <span>PREMIUM BOXES</span><span>•</span>
            <span>CUSTOM PACKAGING</span><span>•</span>
            <span>LUXURY PACKAGING</span><span>•</span>
            <span>ECO FRIENDLY</span><span>•</span>
            <span>FAST DELIVERY</span><span>•</span>
            {/* DUPLICATE */}
            <span>PREMIUM BOXES</span><span>•</span>
            <span>CUSTOM PACKAGING</span><span>•</span>
            <span>LUXURY PACKAGING</span><span>•</span>
            <span>ECO FRIENDLY</span><span>•</span>
            <span>FAST DELIVERY</span><span>•</span>
          </div>
        </div>

        {/* BOTTOM SLIDER */}
        <div className="slider slider-bottom">
          <div className="slider-track reverse">
            <span>SHIPPING CARTONS</span><span>•</span>
            <span>INDUSTRIAL PACKAGING</span><span>•</span>
            <span>CREATIVE BRANDING</span><span>•</span>
            <span>PACKAGING SOLUTIONS</span><span>•</span>
            <span>CORRUGATED BOXES</span><span>•</span>
            {/* DUPLICATE */}
            <span>SHIPPING CARTONS</span><span>•</span>
            <span>INDUSTRIAL PACKAGING</span><span>•</span>
            <span>CREATIVE BRANDING</span><span>•</span>
            <span>PACKAGING SOLUTIONS</span><span>•</span>
            <span>CORRUGATED BOXES</span><span>•</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION : 03 ================= */}
      <section className="minimal-section reveal">
        <div className="minimal-left">
          <span className="minimal-tag">PREMIUM PACKAGING</span>
          <h2>Smart packaging solutions for modern businesses</h2>
          <p>
            We provide high-quality cartons, corrugated boxes, and custom packaging solutions crafted to protect products, improve presentation, and support businesses with reliable, durable, and professionally designed packaging materials for shipping, storage, retail, and brand identity.
          </p>
        </div>

        <div className="minimal-right">
          <div className="image-card">
            <img src="/images/image1.webp" alt="" />
          </div>
        </div>
      </section>
        
      {/* ================= SECTION 4 (FIXED MIXED VARIABLE) ================= */}
      <section className="products-section reveal">
        <div className="section-header">
          <span className="section-subtitle">Our Packaging Solutions</span>
          <h2 className="section-title">Boxes Crafted For Every Industry</h2>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card reveal-card">
              <img
                src={product.img}
                alt={product.title}
                loading="lazy"
                decoding="async"
              />
              
              <div className="product-btn" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <div className="product-overlay">
                <h5 className="product-tag">{product.tag}</h5>
                <h3 className="product-title">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5 : PRODUCTS SHOWCASE ================= */}
      <BoxHero />

      {/* ================= SECTION 6 : PROCESS ================= */}
      <section className="luxury-statement-banner">
      <div className="luxury-banner-glow"></div>
      <div className="luxury-banner-content">
        
        <span className="luxury-word">PRECISION</span>
        <div className="luxury-divider" aria-hidden="true"></div>
        
        <span className="luxury-word">CRAFTSMANSHIP</span>
        <div className="luxury-divider" aria-hidden="true"></div>
        
        <span className="luxury-word">LUXURY FINISHES</span>
        <div className="luxury-divider" aria-hidden="true"></div>
        
        <span className="luxury-word">BRAND IMPACT</span>

      </div>
    </section>
      {/* ================= SECTION: 07 ================= */}
      <section className="showcase-split-section reveal">
      
      {/* LEFT SIDE: VISUAL PRODUCT BRANDING FIELD */}
      <div className="showcase-left-media">
        {/* Large stylized structural text background layers */}
        <span className="side-text left-text">PREMIUM</span>
        <span className="side-text right-text">BOXES</span>
        
        {/* Central floating packaging product mockup */}
        <div className="product-image-container">
          <img 
            src="/images/2.webp" 
            alt="Premium Packaging Mockup" 
            className="floating-product-mockup"
          />
        </div>
      </div>

      {/* RIGHT SIDE: BOLD EDITORIAL STORYTELLING CONTENT */}
      <div className="showcase-right-content">
        <div className="content-wrapper">
          <h2 className="showcase-title">
            THE MAGIC OF CUSTOM PACKAGING IN YOUR BRAND
          </h2>
          
          <p className="showcase-paragraph">
            Our engineers craft structures from scratch daily to fit your unique products perfectly. For the first time ever, you can bring unparalleled unboxing experiences directly to your customer's doorstep.
          </p>
          
          <button className="showcase-pill-btn">
            Shop Our Boxes
          </button>
        </div>
      </div>

    </section>
      
    </div>
  );
};

export default Home;