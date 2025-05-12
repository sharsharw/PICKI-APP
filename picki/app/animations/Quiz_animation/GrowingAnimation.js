'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import PinkGuy from "/pinkGuy.svg";
// import GreenGuy from "/greenGuy.svg";
// import YellowGuy from "/yellowGuy.svg";
// import PurpleGuy from "/purpleGuy.svg";
import styles from "./GrowingAnimation.module.css";

const guys = [
  { src: "/pinkGuy.svg", className: `${styles.pink}`, alt: "Pink Guy" },
  { src: "/greenGuy.svg", className: `${styles.green} ${styles.greenGuy}`, alt: "Green Guy" },
  { src: "/yellowGuy.svg", className: `${styles.yellow} ${styles.yellowGuy}`, alt: "Yellow Guy" },
  { src: "/purpleGuy.svg", className: `${styles.purple} ${styles.purpleGuy}`, alt: "Purple Guy" },
];

// const guys = [
//   { src: "/pinkGuy.svg", className: styles.pink, alt: "Pink Guy" },
//   { src: "/greenGuy.svg", className: styles.green, alt: "Green Guy" },
//   { src: "/yellowGuy.svg", className: styles.yellow, alt: "Yellow Guy" },
//   { src: "/purpleGuy.svg", className: styles.purple, alt: "Purple Guy" },
// ];

const GrowingAnimation = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 1000);
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




// const GrowingAnimation = () => {
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setActive(true), 2000); // 2 seconds
//     return () => clearTimeout(timer); // Optionally, you can trigger animation here if you want to use JS for more control
//   }, []);

//   return (
//     <div className={styles.animationContainer}>
//       <Image src="/pinkGuy.svg" alt="Pink Guy" className={`${styles.guy} ${styles.pink}`} width={100} height={100} />
//       <Image src="/greenGuy.svg" alt="Green Guy" className={`${styles.guy} ${styles.green}`} width={100} height={100} />
//       <Image src="/yellowGuy.svg" alt="Yellow Guy" className={`${styles.guy} ${styles.yellow}`} width={100} height={100} />
//       <Image src="/purpleGuy.svg" alt="Purple Guy" className={`${styles.guy} ${styles.purple}`} width={100} height={100} />
//       {/* <img src={PinkGuy} className={`${styles.guy} ${styles.pink}`} />
//       <img src={GreenGuy} className={`${styles.guy} ${styles.green}`} />
//       <img src={YellowGuy} className={`${styles.guy} ${styles.yellow}`} />
//       <img src={PurpleGuy} className={`${styles.guy} ${styles.purple}`} /> */}
//     </div>
//   );
// };

// export default GrowingAnimation;