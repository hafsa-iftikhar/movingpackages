import React, { useEffect, useState, useRef } from "react";
import "./About.css";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const fullText = "FACTORY";
  const hasTyped = useRef(false);

  useEffect(() => {
  // 1. Smooth Scroll Parallax CSS Variable
  const handleScroll = () => {
    document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });

  // 2. Observer for Scroll Reveal, Typewriter & Section-Specific Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active", "in-view");

          // Typewriter Trigger for Hero
          if (entry.target.classList.contains("abt-hero") && !hasTyped.current) {
            hasTyped.current = true;
            let i = 0;
            const timer = setInterval(() => {
              if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
              } else {
                clearInterval(timer);
              }
            }, 120);
          }
        }
      });
    },
    { threshold: 0.18 }
  );

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));

  return () => {
    window.removeEventListener("scroll", handleScroll);
    observer.disconnect();
  };
}, []);

  // Reuseable Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

  return (
    <div className="about-page-wrapper">
      
      {/* SECTION 1: HERO / OUR MISSION */}
      <section className="abt-hero reveal">
        <div className="abt-hero-bg"></div>
        <div className="abt-hero-overlay"></div>

        <div className="abt-hero-content">
          <span className="abt-badge-red">CARDBOARD BOX MANUFACTURER</span>
          <h1 className="abt-hero-title">
            CUSTOM CARTONS &amp;<br />
            CORRUGATED BOX <span className="typewriter-word">{typedText}</span>
          </h1>
          <p className="abt-hero-desc">
            Moving Packages is a direct carton manufacturing factory. We make high-quality corrugated boxes, custom packaging cartons, and heavy-duty shipping boxes made to your exact size and specifications.
          </p>
        </div>
      </section>

      {/* SECTION 2: FOUNDER / ABOUT STORY */}
      <section className="abt-story reveal">
        <div className="abt-vertical-title-col">
          <h2 className="abt-vertical-text">ABOUT US</h2>
        </div>

        <div className="abt-story-main">
          <span className="abt-badge-yellow">DIRECT FROM THE FACTORY FLOOR</span>
          <h3 className="abt-story-heading">
            Custom Cardboard Cartons <br />
            <span className="abt-highlight-brush">&amp; Corrugated Box Production</span>
          </h3>

          <div className="abt-story-grid">
            <div className="abt-story-text">
              <p>
                At Moving Packages, we operate our own carton production facility equipped with high-speed corrugating machines, slotters, die-cutters, and box-printing presses.
              </p>
              <p>
                From single-wall mailing boxes to heavy-duty double-wall corrugated cartons, we make strong, reliable cardboard packaging built for safe shipping, product storage, and easy handling.
              </p>
              <a href="#contact" className="abt-btn-red">
                GET FACTORY PRICE QUOTE &rarr;
              </a>
            </div>

            <div className="abt-story-images">
              <div className="abt-img-stacked img-back">
                <img 
                  src="/images/about4.webp" 
                  alt="Carton Manufacturing Factory and Corrugated Box Production" 
                />
              </div>
              <div className="abt-img-stacked img-front">
                <img 
                  src="/images/about3.webp" 
                  alt="Custom Printed Cardboard Cartons and Shipping Boxes" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY WORKING WITH US IS DIFFERENT */}
      <section className="abt-differentiators reveal">
        <div className="abt-diff-header">
          <h2>
            Why Buy Direct From Our <span className="text-yellow"> Factory </span>
          </h2>
        </div>

        <div className="abt-diff-list">
          <div className="abt-diff-item">
            <span className="abt-diff-num">[01]</span>
            <div className="abt-diff-content">
              <h3>Custom Sizes &amp; Exact Box Cutting</h3>
              <p>
                We make cartons tailored to your product dimensions—whether you need small parcel boxes, large master shipping cartons, or custom die-cut box styles.
              </p>
            </div>
          </div>

          <div className="abt-diff-item">
            <span className="abt-diff-num">[02]</span>
            <div className="abt-diff-content">
              <h3>Strong Fluted Cardboard Stock</h3>
              <p>
                We manufacture our corrugated sheets with high-burst cardboard, ensuring your cartons withstand heavy stacking in warehouses and rough transport conditions.
              </p>
            </div>
          </div>

          <div className="abt-diff-item">
            <span className="abt-diff-num">[03]</span>
            <div className="abt-diff-content">
              <h3>Factory Rates &amp; Fast Production Turns</h3>
              <p>
                Since you are dealing directly with the box maker, you get direct factory pricing without agent markups, along with rapid turnarounds on bulk carton orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CAPABILITIES / SERVICES GRID */}
      <section className="abt-capabilities reveal">
  <div className="abt-cap-title-wrapper">
    <span className="abt-badge-black">WHAT WE MAKE</span>
    <h2>Our Cardboard &amp; Carton Products</h2>
  </div>

  <div className="abt-cap-grid">
    <div className="abt-cap-card">
      <div className="abt-cap-card-img">
        <span className="abt-cap-num">01</span>
        <img src="/images/diecut.webp" alt="Custom Die Cut Cardboard Packaging Boxes" />
        <div className="abt-cap-overlay"></div>
      </div>
      <div className="abt-cap-card-info">
        <h3>CUSTOM DIE-CUT CARTONS</h3>
        <p>Tailor-made tuck top boxes, mailers, and presentation packaging crafted directly on our die-cutting machines.</p>
      </div>
    </div>

    <div className="abt-cap-card">
      <div className="abt-cap-card-img">
        <span className="abt-cap-num">02</span>
        <img src="/images/master.webp" />
        <div className="abt-cap-overlay"></div>
      </div>
      <div className="abt-cap-card-info">
        <h3>SHIPPING &amp; MASTER CARTONS</h3>
        <p>Heavy-duty single wall and double wall corrugated RSC shipping cartons built for industrial transport and moving.</p>
      </div>
    </div>

    <div className="abt-cap-card">
      <div className="abt-cap-card-img">
        <span className="abt-cap-num">03</span>
        <img src="/images/printed.webp" />
        <div className="abt-cap-overlay"></div>
      </div>
      <div className="abt-cap-card-info">
        <h3>CUSTOM PRINTED CARTONS</h3>
        <p>Add your brand logo, handling icons, and product info with clear flexographic printing directly onto your boxes.</p>
      </div>
    </div>
  </div>
</section>

      {/* SECTION 5: CREATIVE HIGHLIGHT */}
      <section className="abt-creative reveal">
        <div className="abt-creative-container">
          
          {/* Left Column: Image with Frame */}
          <div className="abt-creative-img-wrapper">
            <div className="abt-creative-img-box">
              <img 
                src="/images/about5.webp" 
                alt="Corrugated Box Factory Machine Line" 
              />
            </div>
          </div>

          {/* Right Column: Dynamic Mixed Typography */}
          <div className="abt-creative-content">
            <div className="abt-bg-graphic-symbol">M</div>

            <p className="abt-creative-lead">We manufacture</p>

            <h2 className="abt-creative-heading">
              <span className="script-text text-black">custom sized,</span>
              <span className="script-text text-black sub-line">heavy-duty cardboard</span>
            </h2>

            <p className="abt-creative-desc">
              cartons, corrugated shipping boxes, and packaging materials made directly in our factory for businesses, suppliers, and distributors.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <section className="abt-cta reveal">
  <div className="abt-cta-container">
    <span className="abt-cta-tag">DIRECT FROM THE PLANT</span>
    <h2 className="abt-cta-heading">BUILT HEAVY. CUT FAST. DELIVERED BULK.</h2>
    <p className="abt-cta-quote">
      “Custom corrugated boxes and shipping cartons crafted directly on our plant floor for heavy transport and bulk orders.”
    </p>
    <div className="abt-cta-divider"></div>
  </div>
</section>

    </div>
  );
}