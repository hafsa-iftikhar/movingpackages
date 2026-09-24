import React from "react";
import "./Aboutbox.css";
import { motion } from "framer-motion";

const bgVariants = {
  hidden: { y: 60, scale: 1.12, opacity: 0 },
  visible: {
    y: 0,
    scale: 1.05,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out
    },
  },
};

// Content container delayed until background finishes sliding
const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.65, // Starts near the end of background entrance
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Section 3 : Title Animation
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Card Wrapper Scroll Animation (Fades + slides up on viewport enter)
const cardVariants = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Bullet List Stagger Animation
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 35, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Left-to-Right Slide Animation
const slideLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Right-to-Left Slide Animation
const slideRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const catalogData = [
  {
    id: "rsc",
    title: "Regular Slotted Carton (RSC)",
    img: "/images/rsc.webp",
    alt: "Regular Slotted Carton (RSC)",
    bullets: [
      "Industry-standard corrugated shipping container featuring outer flaps that meet directly in the center.",
      "Includes manufacturer certification stamps verifying wall construction (single, double, or triple wall) and Mullen Bursting or Edge Crush Test (ECT) ratings.",
      "Cost-effective structural design that minimizes material waste while providing high stacking strength.",
    ],
  },
  {
    id: "mdc",
    title: "Multi-Depth Carton (MDC)",
    img: "/images/mdc.webp",
    alt: "Multi-Depth Carton (MDC)",
    bullets: [
      "Engineered with pre-scored horizontal crease lines along side walls for adaptable height adjustments.",
      "Allows easy cutting down to fit varying product volumes without requiring custom box sizes.",
      "Consolidates inventory needs by acting as a versatile multi-size packaging solution.",
    ],
  },
  {
    id: "hsc",
    title: "Half-Slotted Carton (HSC)",
    img: "/images/hsc.webp",
    alt: "Half-Slotted Carton (HSC)",
    bullets: [
      "Constructed with bottom closing flaps only, leaving the top end fully open for fast access.",
      "Designed to slide effortlessly over large products or secure directly to pallet bases.",
      "Frequently used in industrial settings or paired with separate lid caps for reusable storage.",
    ],
  },
  {
    id: "fol",
    title: "Full-Overlap Slotted Carton (FOL)",
    img: "/images/fol.webp",
    alt: "Full-Overlap Slotted Carton (FOL)",
    bullets: [
      "Features full-width length flaps that fold completely over each other on both top and bottom faces.",
      "Provides multi-layer impact cushioning and superior structural support against heavy top loads.",
      "Recommended for harsh distribution channels and high-density product shipments.",
    ],
  },
  {
    id: "fpf",
    title: "Five Panel Folder (FPF)",
    img: "/images/fpf.webp",
    alt: "Five Panel Folder (FPF)",
    bullets: [
      "One-piece corrugated design that wraps securely around long or shallow items.",
      "Overlapping end and side panels create double-wall edge protection along vulnerable borders.",
      "Ideal for shipping extrusions, rods, rolled graphics, and narrow industrial equipment.",
    ],
  },
  {
    id: "sbc",
    title: "Snap-Bottom Carton (SBC)",
    img: "/images/sbc.webp",
    alt: "Snap-Bottom Carton (SBC)",
    bullets: [
      "Also known as an auto-locking bottom container; snaps together instantly without taping.",
      "Drastically lowers fulfillment time and labor costs on high-volume packing lines.",
      "Optimized for lightweight retail products, promotional kits, and e-commerce goods.",
    ],
  },
  {
    id: "ftd",
    title: "Full Telescope Design Carton (FTD)",
    img: "/images/ftd.webp",
    alt: "Full Telescope Design Carton (FTD)",
    bullets: [
      "Two-piece container consisting of a separate top lid that fits fully over a bottom base tray.",
      "Double-wall side construction offers exceptional compression resistance and stacking durability.",
      "Commonly specified for premium merchandise, heavy gear, or presentation packaging.",
    ],
  },
  {
    id: "htd",
    title: "Half Telescope Design Carton (HTD)",
    img: "/images/htd.webp",
    alt: "Half Telescope Design Carton (HTD)",
    bullets: [
      "Comprises two half-slotted cartons where the outer section telescopes partially over the inner box.",
      "Enables variable length or height adjustments to match oversized or irregular cargo perfectly.",
      "Excellent for heavy industrial goods, bulk paper goods, and machinery parts.",
    ],
  },
  {
    id: "csl",
    title: "Two-Piece Carton with Separate Lid (CSL)",
    img: "/images/csl.webp",
    alt: "Two-Piece Carton with Separate Lid (CSL)",
    bullets: [
      "Die-cut open tray paired with a shallow fitted cover cap for quick opening and closing.",
      "Delivers clean aesthetic appeal without requiring hand holes on the outer panels.",
      "Ideal for document storage, retail presentation boxes, and organized inventory stacking.",
    ],
  },
  {
    id: "dc",
    title: "Double Cover Carton (DC)",
    img: "/images/dc.webp",
    alt: "Double Cover Carton (DC)",
    bullets: [
      "Three-piece heavy-duty system combining a central four-panel sleeve with top and bottom caps.",
      "Simplifies loading and unloading of tall, heavy, or bulky items directly from the side.",
      "Frequently used for appliances, furniture, large electronics, and industrial machinery.",
    ],
  },
  {
    id: "opf",
    title: "One-Piece Folder (OPF)",
    img: "/images/opf.webp",
    alt: "One-Piece Folder (OPF)",
    bullets: [
      "Often referred to as bookfolds or bookwraps, featuring a flat base with multi-score creased flaps.",
      "Wraps snugly around flat products to prevent shift and movement during transit.",
      "Typically produced with clean white linerboard for shipping books, artwork, and media.",
    ],
  },
  {
    id: "bb",
    title: "Bin Boxes (BB)",
    img: "/images/bb.webp",
    alt: "Bin Boxes (BB)",
    bullets: [
      "Self-locking, single-piece die-cut shelf containers assembled without tape, staples, or adhesive.",
      "Open-front design provides clear product visibility and easy access to small parts or inventory.",
      "Maximizes shelf space efficiency in warehouses, stockrooms, and retail storage racks.",
    ],
  },
  {
    id: "db",
    title: "Divider Bins (DB)",
    img: "/images/db.webp",
    alt: "Divider Bins (DB)",
    bullets: [
      "Compact open-top inserts designed to fit inside larger bin boxes or shelf organizers.",
      "Creates custom segmented compartments to keep small components sorted and separated.",
      "Prevents part mixing and streamlines picking processes in manufacturing or assembly environments.",
    ],
  },
];

const AboutBox = () => {
  return (
    <div className="box-page-root">
      {/* SECTION 1: HERO WITH DARK & BLURRED BG IMAGE */}
      <header className="box-hero">
      {/* Step 1: Background slides up first */}
      <motion.div
        className="box-hero-bg"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Lightened Overlay */}
      <div className="box-hero-overlay" />

      {/* Warm Ambient Glow Accents */}
      <div className="box-hero-glow box-hero-glow-1" />
      <div className="box-hero-glow box-hero-glow-2" />

      {/* Step 2: Content appears sequentially after background */}
      <motion.div
        className="box-hero-content"
        variants={contentContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <span className="box-seq-badge">
            Packaging Guide
          </span>
        </motion.div>

        <motion.h1 className="box-hero-title" variants={itemVariants}>
          Understanding Box Measurements &amp; Structural Specifications
        </motion.h1>
      </motion.div>
    </header>

      {/* SECTION 2 : REST OF THE PAGE: WHITE BACKGROUND */}
      <main className="box-main">
        <div className="box-container">
          
          {/* MEASUREMENTS SECTION */}
          <section className="box-section">
        <motion.h2
          className="box-section-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Measurements
        </motion.h2>

        <div className="box-grid-2col">
          <motion.div
            className="box-text-block"
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p>
              Box sizes are measured by using <strong>inner dimensions</strong> unless
              otherwise specified. The size of your contents actually determines the
              inner box dimensions. These dimensions are usually listed in the following sequence:
            </p>
            <div className="box-seq-badge">
              Length (L) &times; Width (W) &times; Height (H)
            </div>
            <p>
              Dimensions are based on the opening of an assembled box. Looking at the opening,
              the longer of the two sides is considered the <strong>“length”</strong>. The shorter of the two
              sides is the <strong>“width”</strong>. The side perpendicular to the length and width is the <strong>“height”</strong> of the box.
            </p>
            <div className="box-note-box">
              <strong>* Exception:</strong> Exceptions are bookfolds, bin boxes &amp; divider bins where
              <strong> “width”</strong> precedes <strong>“length”</strong> and <strong>“height”</strong> of the measured sequence.
            </div>
          </motion.div>

          <motion.div
            className="box-media-card"
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <img
              src="/images/boxmeasurement.webp"
              alt="Box Dimension Measurement Diagram"
            />
            <div className="box-caption">
              Standard Inner Dimension Measurement: Length &times; Width &times; Depth
            </div>
          </motion.div>
        </div>

        <motion.h3
          className="box-subsection-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          How to measure a box – The quick way
        </motion.h3>

        <motion.p
          className="box-paragraph"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Looking at the opening of the box, measure the longest or length panel first.
          Using a tape measure, place it in the bottom of the box approximately one inch
          from the back wall and measure from left to right. Repeat the process for the
          shorter width panel. Then, folding a side flap inward until it is perpendicular
          to its vertical side wall, place the tape measure at the end of the flap and extend
          it downward until it rests on the inner flap at the bottom of the box. This exercise
          will give you the depth dimension of the box.
        </motion.p>

        <motion.p
          className="box-paragraph"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          One-piece, Die-Cut boxes, such as the “mailer-style” with a tuck-in top, do not have
          flaps when assembled, but the measuring procedure is basically the same. For the box
          depth, use the inside back panel as it has a visible Score line (crease separating back
          panel from lid). For the width of a die cut box, measure between the Score lines found on
          the inside of the top or lid. And, of course, for the length of the box, place your
          measuring rule on the bottom of the box approximately one-inch from the back panel.
          Measure from left to right.
        </motion.p>
      </section>

      {/* BOX STRENGTH SECTION */}
      <section className="box-section">
        <motion.h2
          className="box-section-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Box Strength &amp; Material Flutes
        </motion.h2>

        <div className="box-grid-2col">
          <motion.div
            className="box-text-block"
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p>
              The strength of a corrugated box starts with its material. A corrugated sheet
              consists of two major components – <strong>linerboard</strong> and <strong>medium</strong>.
              Linerboard is the flat paper that covers both sides of the sheet and the medium is the “fluted”
              or arched paper found between both liners.
            </p>
            <p>
              The flute, when anchored to the linerboards with a starch-based adhesive, resists
              bending and pressure from all directions. When placed vertically on its ends, the flutes form
              vertical columns, capable of supporting considerable amounts of weight.
            </p>
            <p>
              Flutes come in five basic heights and shapes – the most common are <strong>“B-flute”</strong>
              (used for Die-Cut boxes) and <strong>“C-flute”</strong> (used for RSCs). B-flute is compressed
              and appears thinner, but is made with more paper to provide stronger side wall protection from blows and punctures.
              C-flute is taller, with more air space, but offers enhanced stacking strength. For excellent graphic reproduction, consider E-flute.
            </p>
            <p>
              The amount of virgin pulp fibers and the length of those fibers in a corrugated sheet substantially
              contribute to box strength. For example, the difference between a 200# test box and a 275# test box is
              that the latter has more pulp fibers in its corrugated linerboard. The 200# test box is rated to hold up to
              65 lbs., the 275# box can hold up to 95 lbs., and a 350# test box is rated to hold up to 120 lbs.
            </p>
          </motion.div>

          <motion.div
            className="box-media-card"
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <img
              src="/images/boxstrength.webp"
              alt="Corrugated Flute Types B and C Profiles"
            />
            <div className="box-caption">
              Corrugated Flute Construction &amp; Wall Profiles
            </div>
          </motion.div>
        </div>

        <div className="box-grid-2col box-reverse-mobile">
          <motion.div
            className="box-media-card"
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <img
              src="/images/boxstamp.webp"
              alt="Box Manufacturer Certificate Stamp"
            />
            <div className="box-caption">
              Manufacturer’s Certification Stamp (Mullen &amp; ECT Ratings)
            </div>
          </motion.div>

          <motion.div
            className="box-text-block"
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="box-subsection-title" style={{ marginTop: 0 }}>
              Look for Manufacturer’s Stamp
            </h3>
            <p>
              A way to be sure that the material of the box that you’re purchasing meets industry
              standards is to look for the <strong>Manufacturer’s Certification Stamp</strong>, usually printed on
              one of the bottom flaps of the box. The stamp identifies the material as “singlewall,” “doublewall” or “triplewall.”
            </p>
            <p>
              It also certifies the <strong>Mullen Bursting Test</strong> (most common is 200 lbs. per square inch) or the
              <strong> Edge Crush Test</strong> (ECT 32 lbs. per inch). The Mullen Test measures the bursting strength of the
              corrugated linerboard while the Edge Crush Test measures linerboard stacking strength.
            </p>
            <p>
              The 200 lbs. Mullen box and the 32 ECT box are comparable in stacking strength. But the Mullen Test box is
              better suited for the protection of heavier contents while the Edge Crush Test box provides lighter weight cartons with good stacking characteristics.
            </p>
          </motion.div>
        </div>
      </section>

          {/*SECTION 3 : BOX STYLES CATALOG SECTION */} 
        <section className="box-section">
      <motion.h2
        className="box-section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        Box Styles Catalog
      </motion.h2>

      <div className="box-styles-catalog">
        {catalogData.map((item) => (
          <motion.div
            key={item.id}
            className="box-style-row-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="box-style-img-wrapper">
              <motion.img
                src={item.img}
                alt={item.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="box-style-content">
              <h3>{item.title}</h3>
              <motion.ul
                className="box-style-bullets"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {item.bullets.map((bullet, idx) => (
                  <motion.li key={idx} variants={bulletVariants}>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
        </div>
      </main>
    </div>
  );
};

export default AboutBox;