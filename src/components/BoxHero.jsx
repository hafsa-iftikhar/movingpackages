import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./BoxHero.css";

export default function PackingHero({
  boxSrc = "/images/box.png", 
  chairSrc = "/images/icon1.png", 
  sofaSrc = "/images/icon2.png", 
  clothingSrc = "/images/icon3.png",
  electronicsSrc = "/images/icon4.png", 
  booksSrc = "/images/icon5.png",
  plantSrc = "/images/icon6.png",      
  lampSrc = "/images/icon7.png"
}) {
  const containerRef = useRef(null);

  // Setup the scroll timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ==========================================================================
  // LEFT SIDE: FIXED PERMANENT LOCK 
  // Stays 100% visible and holds its position all the way through the end (1.0)
  // ==========================================================================
  const leftSideFade = useTransform(scrollYProgress, [0, 0.2], [1, 1]); 
  const leftSideY = useTransform(scrollYProgress, [0, 0.2], ["0px", "0px"]);

  const companyOpacity = useTransform(scrollYProgress, [0, 0.12, 1.0], [0, 1, 1]);
  const companyY = useTransform(scrollYProgress, [0, 0.12, 1.0], ["30px", "0px", "0px"]);
  const nameLetterSpacing = useTransform(scrollYProgress, [0.12, 0.4, 1.0], ["0.02em", "0.08em", "0.08em"]);

  // ==========================================================================
  // RIGHT SIDE: BOX ARRAYS AND STAYS PERMANENTLY AT 0px
  // Once it hits 0.40, it sits firmly at 0px and opacity 1.0 all the way to 1.0
  // ==========================================================================
  const boxY = useTransform(scrollYProgress, [0, 0.15, 0.40, 1.0], ["-100vh", "-80vh", "0px", "0px"]);
  const boxOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 1.0], [0, 0, 1, 1]);

  // ==========================================================================
  // THE TRAILING QUEUE ENGINE (7 ITEMS - HUGE SIZE & BIGGER GAPS)
  // ==========================================================================

  // ITEM 1: CHAIR
  const chairY = useTransform(scrollYProgress, [0.40, 0.65, 1.0], ["-50px", "260px", "260px"]);
  const chairRotate = useTransform(scrollYProgress, [0.40, 0.65, 1.0], [-25, 12, 12]);
  const chairScale = useTransform(scrollYProgress, [0.40, 0.65, 1.0], [2.2, 1.6, 1.6]);
  const chairOpacity = useTransform(scrollYProgress, [0, 0.38, 0.40, 0.60, 0.65], [0, 0, 1, 1, 0]);

  // ITEM 2: SOFA (Added 250px gap from Item 1)
  const sofaY = useTransform(scrollYProgress, [0.40, 0.70, 1.0], ["-300px", "260px", "260px"]);
  const sofaRotate = useTransform(scrollYProgress, [0.40, 0.70, 1.0], [15, -15, -15]);
  const sofaScale = useTransform(scrollYProgress, [0.40, 0.70, 1.0], [2.2, 1.6, 1.6]);
  const sofaOpacity = useTransform(scrollYProgress, [0, 0.42, 0.45, 0.65, 0.70], [0, 0, 1, 1, 0]);

  // ITEM 3: CLOTHING (Added 250px gap from Item 2)
  const clothingY = useTransform(scrollYProgress, [0.40, 0.75, 1.0], ["-550px", "260px", "260px"]);
  const clothingRotate = useTransform(scrollYProgress, [0.40, 0.75, 1.0], [-5, 20, 20]);
  const clothingScale = useTransform(scrollYProgress, [0.40, 0.75, 1.0], [2.15, 1.55, 1.55]);
  const clothingOpacity = useTransform(scrollYProgress, [0, 0.48, 0.50, 0.70, 0.75], [0, 0, 1, 1, 0]);

  // ITEM 4: ELECTRONICS (Added 250px gap from Item 3)
  const electronicsY = useTransform(scrollYProgress, [0.40, 0.80, 1.0], ["-800px", "260px", "260px"]);
  const electronicsRotate = useTransform(scrollYProgress, [0.40, 0.80, 1.0], [-18, -8, -8]);
  const electronicsScale = useTransform(scrollYProgress, [0.40, 0.80, 1.0], [2.1, 1.5, 1.5]);
  const electronicsOpacity = useTransform(scrollYProgress, [0, 0.52, 0.55, 0.75, 0.80], [0, 0, 1, 1, 0]);

  // ITEM 5: BOOKS (Added 250px gap from Item 4)
  const booksY = useTransform(scrollYProgress, [0.40, 0.85, 1.0], ["-1050px", "260px", "260px"]);
  const booksRotate = useTransform(scrollYProgress, [0.40, 0.85, 1.0], [22, 5, 5]);
  const booksScale = useTransform(scrollYProgress, [0.40, 0.85, 1.0], [2.05, 1.45, 1.45]);
  const booksOpacity = useTransform(scrollYProgress, [0, 0.58, 0.62, 0.80, 0.85], [0, 0, 1, 1, 0]);

  // ITEM 6: NEW PRODUCT - PLANT (Added 250px gap from Item 5)
  const plantY = useTransform(scrollYProgress, [0.40, 0.92, 1.0], ["-1300px", "260px", "260px"]);
  const plantRotate = useTransform(scrollYProgress, [0.40, 0.92, 1.0], [-10, 15, 15]);
  const plantScale = useTransform(scrollYProgress, [0.40, 0.92, 1.0], [2.0, 1.4, 1.4]);
  const plantOpacity = useTransform(scrollYProgress, [0, 0.64, 0.68, 0.88, 0.92], [0, 0, 1, 1, 0]);

  // ITEM 7: NEW PRODUCT - LAMP (Highest in the queue, enters last)
  const lampY = useTransform(scrollYProgress, [0.40, 1.0], ["-1550px", "260px"]);
  const lampRotate = useTransform(scrollYProgress, [0.40, 1.0], [15, -5]);
  const lampScale = useTransform(scrollYProgress, [0.40, 1.0], [1.95, 1.35]);
  const lampOpacity = useTransform(scrollYProgress, [0, 0.72, 0.76, 0.95, 1.0], [0, 0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="mp-hero-scroll-container">
      
      {/* AMBIENT BACKGROUND SYSTEM */}
      <div className="mp-ambient-backdrop">
        <div className="mp-radial-lens-glow" />
        <div className="mp-editorial-fine-grid" />
      </div>

      <div className="mp-sticky-window">
        <div className="mp-outer-card-border">
          <div className="mp-split-layout">
            
            {/* LEFT SIDE: LUXURY BRAND HEADER PLATFORM */}
            <motion.div 
              className="mp-left-brand-column"
              style={{ opacity: leftSideFade, y: leftSideY }}
            >
              <div className="mp-premium-content-capsule">
                <div className="mp-luxury-badge">
                    <span className="mp-badge-accent-dot" />
                    <span className="mp-badge-string">
                      CUSTOM PACKAGING MANUFACTURER
                    </span>
                  </div>

                <motion.h1
  className="mp-company-title"
  style={{
    opacity: companyOpacity,
    y: companyY,
    letterSpacing: nameLetterSpacing
  }}
>
  Premium
  <span className="mp-serif-italic-text"> Packaging</span>
</motion.h1>

<p className="mp-editorial-subtext">
  We specialize in designing and manufacturing premium custom packaging solutions that help businesses protect their products, strengthen their brand identity, and create memorable customer experiences. From luxury rigid boxes and retail packaging to corrugated shipping cartons, product boxes, and fully customized packaging systems, every solution is crafted with precision, durability, and exceptional attention to detail. By combining innovative design, quality materials, and advanced production techniques, we deliver packaging that not only safeguards your products throughout the supply chain but also enhances their presentation on store shelves and in the hands of your customers. Whether you're a growing startup or an established brand, our packaging solutions are tailored to meet your unique requirements while maintaining the highest standards of quality, functionality, and visual appeal.

</p>

<div className="mp-cta-button-container">
  <button className="mp-editorial-action-btn">
    <span className="mp-btn-label-text">
      Explore Our Packaging
    </span>

    <svg
      className="mp-btn-arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </button>
</div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: OPEN-VIEWPORT STAGE */}
            <div className="mp-right-stage-column">
              <div className="mp-viewport-box-anchor">
                
                {/* THE CLIPPER: This acts as the physical opening of the box */}
                <div className="mp-box-chute-clipper">
                  
                  {/* CHAIR */}
                  <motion.div className="mp-item-frame" style={{ y: chairY, rotate: chairRotate, scale: chairScale, opacity: chairOpacity }}>
                    <img src={chairSrc} alt="Chair" className="mp-product-img" />
                  </motion.div>

                  {/* SOFA */}
                  <motion.div className="mp-item-frame" style={{ y: sofaY, rotate: sofaRotate, scale: sofaScale, opacity: sofaOpacity }}>
                    <img src={sofaSrc} alt="Sofa" className="mp-product-img" />
                  </motion.div>

                  {/* CLOTHING */}
                  <motion.div className="mp-item-frame" style={{ y: clothingY, rotate: clothingRotate, scale: clothingScale, opacity: clothingOpacity }}>
                    <img src={clothingSrc} alt="Clothing" className="mp-product-img" />
                  </motion.div>

                  {/* ELECTRONICS */}
                  <motion.div className="mp-item-frame" style={{ y: electronicsY, rotate: electronicsRotate, scale: electronicsScale, opacity: electronicsOpacity }}>
                    <img src={electronicsSrc} alt="Electronics" className="mp-product-img" />
                  </motion.div>

                  {/* BOOKS */}
                  <motion.div className="mp-item-frame" style={{ y: booksY, rotate: booksRotate, scale: booksScale, opacity: booksOpacity }}>
                    <img src={booksSrc} alt="Books" className="mp-product-img" />
                  </motion.div>

                  {/* PLANT (Item 6) */}
                  <motion.div className="mp-item-frame" style={{ y: plantY, rotate: plantRotate, scale: plantScale, opacity: plantOpacity }}>
                    <img src={plantSrc} alt="Plant" className="mp-product-img" />
                  </motion.div>

                  {/* LAMP (Item 7) */}
                  <motion.div className="mp-item-frame" style={{ y: lampY, rotate: lampRotate, scale: lampScale, opacity: lampOpacity }}>
                    <img src={lampSrc} alt="Lamp" className="mp-product-img" />
                  </motion.div>
              
                </div>

                {/* THE BOX GRAPHIC */}
                <motion.div 
                  className="mp-box-graphic-wrapper"
                  style={{ y: boxY, opacity: boxOpacity }}
                >
                  <img src={boxSrc} alt="Moving Box" className="mp-actual-box-asset" />
                  <div className="mp-box-ground-shadow" />
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}