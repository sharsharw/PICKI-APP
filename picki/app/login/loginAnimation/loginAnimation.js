'use client';
import React, { useEffect, useState } from "react";
import styles from "./loginAnimation.module.css";
import image from "next/image"; // Adjust path as needed

export default function LoginAnimation({ onComplete }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation on mount
    setAnimate(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // Match your animation duration in ms
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={styles.container}>
      <img
        src="/Images/loginMascot.svg"
        alt="login mascot"
        className={`${styles.svg} ${animate ? styles.animate : ""}`}
      />
    </div>
  );
}
