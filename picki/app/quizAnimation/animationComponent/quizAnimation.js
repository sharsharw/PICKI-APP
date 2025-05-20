'use client';

import React, { useEffect, useState } from "react";
import styles from "./quizAnimation.module.css";

const guys = [
  { src: "/Images/purpleGuy.svg", alt: "Purple Guy" },
  { src: "/Images/pinkGuy.svg", alt: "Pink Guy" },
  { src: "/Images/yellowGuy.svg", alt: "Yellow Guy" },
  { src: "/Images/greenGuy.svg", alt: "Green Guy" },
];

const DropStackAnimation = () => {
  const [startMoveDown, setStartMoveDown] = useState(false);

  useEffect(() => {
    // Start move-down after all drops are done (e.g., 2s)
    const timer = setTimeout(() => setStartMoveDown(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.phoneContainer}>
      <div className={`${styles.stackContainer} ${startMoveDown ? styles.moveDown : ""}`}>
        {guys.map((guy, i) => (
          <img
          key={guy.alt}
          src={guy.src}
          alt={guy.alt}
          className={styles.guy}
          style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </div>
  );
};

const QuizResult = () => {}

export default DropStackAnimation;