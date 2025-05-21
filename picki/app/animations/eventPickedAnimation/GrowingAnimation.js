'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./GrowingAnimation.module.css";
import { useRouter } from "next/navigation";

const guys = [
  { src: "/Images/pinkGuy.svg", className: `${styles.pink}`, alt: "Pink Guy" },
  { src: "/Images/greenGuy.svg", className: `${styles.green} ${styles.greenGuy}`, alt: "Green Guy" },
  { src: "/Images/yellowGuy.svg", className: `${styles.yellow} ${styles.yellowGuy}`, alt: "Yellow Guy" },
  { src: "/Images/purpleGuy.svg", className: `${styles.purple} ${styles.purpleGuy}`, alt: "Purple Guy" },
];


const GrowingAnimation = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Pickedforyou/reveal');
    }, 3300); // Replace 2500 with your animation duration in ms
    return () => clearTimeout(timer);
  }, [router]);

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


