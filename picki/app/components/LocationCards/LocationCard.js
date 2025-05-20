import React from "react";
import styles from "./LocationCard.module.css";

export default function LocationCard({ image, title, location, link, style }) {
  return (
    <div className={styles.card} style={style}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.infoRow}>
        <img
          src="/googleMaps.png"
          alt="Google Maps"
          className={styles.mapsIcon}
        />
        <div className={styles.infoText}>
          <div className={styles.title}>{title}</div>
          <div className={styles.location}>{location}</div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.openButton}
        >
          Open
        </a>
      </div>
    </div>
  );
}