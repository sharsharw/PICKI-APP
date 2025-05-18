'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./GrowingAnimation.module.css";

const guys = [
  { src: "/pinkGuy.svg", className: `${styles.pink}`, alt: "Pink Guy" },
  { src: "/greenGuy.svg", className: `${styles.green} ${styles.greenGuy}`, alt: "Green Guy" },
  { src: "/yellowGuy.svg", className: `${styles.yellow} ${styles.yellowGuy}`, alt: "Yellow Guy" },
  { src: "/purpleGuy.svg", className: `${styles.purple} ${styles.purpleGuy}`, alt: "Purple Guy" },
];


const GrowingAnimation = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.animationContainer}>
      {guys.map((guy, i) => (
        <div
          key={guy.alt}
          className={`${styles.guyWrapper} ${active ? styles.active : ""} ${guy.className}`}
          style={{ "--i": i }}
        >
          <img
            src={guy.src}
            className={`${styles.guy} ${guy.className}`}
            alt={guy.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default GrowingAnimation;


