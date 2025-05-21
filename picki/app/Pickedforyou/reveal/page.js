'use client';
import React from "react";
import LocationCard from '../../components/LocationCards/LocationCard';
import styles from './finalReveal.module.css';
import { useRouter } from 'next/navigation';

const locations = [{
  image: "/Images/dove.png",
  title: "Dovetail",
  location: "Vancouver, British Columbia",
  link: "https://www.google.com/search?sca_esv=50f645eafaad8718&rlz=1C5CHFA_enCA929CA929&sxsrf=AHTn8zpxWF8b6qkFxdaUmiTAmXawiKqeOA:1743229413553&kgmid=/g/11l29tnsfs&q=Dovetail&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=e7b03736dd1415ae",
},
];

export default function FinalReveal() {
  const router = useRouter();

  return (
    <div className={styles.mobileFrame}>
      <img
        src="/Images/spikes.svg" 
        alt=""
        className={styles.spikes}
        aria-hidden="true"
      />
      <div className={styles.content}>
        <h2 className={styles.title}>Dovetail</h2>
        {locations.map((loc) => (
          <LocationCard
            key={loc.title}
            image={loc.image}
            title={loc.title}
            location={loc.location}
            link={loc.link}
          />
        ))}
        <div
          className={styles.tapText}
          onClick={() => router.push('/Pickedforyou/pickedInfo')}
          style={{ cursor: 'pointer' }}
        >
          Tap to Continue
        </div>
      </div>
    </div>
  );
}