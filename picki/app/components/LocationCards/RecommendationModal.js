import React from "react";
import LocationCard from "./LocationCard"; // Adjust path as needed
import styles from "./RecommendationModal.module.css"; // Create this CSS module


const locations = [
  {
    image: "./public/Images/speeders.jpg",
    title: "SPEEDERS Richmond",
    location: "Richmond, British Columbia",
    link: "https://www.google.com/search?sca_esv=218665eea446f0ac&rlz=1C5CHFA_enCA1126CA1126&sxsrf=AHTn8zpJtxNppR_eVGmdQGEGD4n6WLICyQ:1743107324039&kgmid=/g/11cmd3ptr4&q=SPEEDERS+Richmond&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=f8f9354fa719d8b7",
  },
  {
    image: "/Images/clay.jpg",
    title: "Claymates Ceramics Studio",
    location: "Vancouver, British Columbia",
    link: "https://www.google.com/search?sca_esv=50f645eafaad8718&rlz=1C5CHFA_enCA929CA929&sxsrf=AHTn8zr_xlReLT02HOPwvi8eipVuF003yA:1743229353463&kgmid=/g/11h0tq3cc2&q=Claymates+Ceramics+Studio&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=f10107bc9d1db0b2",
  },
  {
    image: "./soho.jpg",
    title: "SOHO Bar and Billiards",
    location: "Vancouver, British Columbia",
    link: "https://www.google.com/search?sca_esv=218665eea446f0ac&rlz=1C5CHFA_enCA1126CA1126&sxsrf=AHTn8zoX44KpWpctfLgnadv2f_tvy0R8Rw:1743109454204&kgmid=/g/1tdfbt88&q=Soho+Bar+%26+Billiards&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=c12c169dabed43e4",
  },
];

export function RecommendationModal(props) {
  return (
      <div className={styles.modal}>
        {locations.map((loc, idx) => (
          <LocationCard
            key={loc.title}
            image={loc.image}
            title={loc.title}
            location={loc.location}
            link={loc.link}
            style={{ marginBottom: idx < locations.length - 1 ? "24px" : 0 }}
          />
        ))}
      </div>
  );
}

export default RecommendationModal;
