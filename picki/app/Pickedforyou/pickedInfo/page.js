'use client';
import React from "react";
import LocationCard from '../../components/LocationCards/LocationCard'; // Adjust path as needed
import styles from './pickedInfo.module.css';
import { useRouter } from 'next/navigation';

const locations = [{
    image: "/Images/dove.png",
    title: "Dovetail",
    location: "Vancouver, British Columbia",
    link: "https://www.google.com/search?sca_esv=50f645eafaad8718&rlz=1C5CHFA_enCA929CA929&sxsrf=AHTn8zpxWF8b6qkFxdaUmiTAmXawiKqeOA:1743229413553&kgmid=/g/11l29tnsfs&q=Dovetail&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=e7b03736dd1415ae",
  },
  ];

export default function PickedInfo() {
  const router = useRouter();

  return (
    <div className={styles.mobileFrame}>
      <img src="/Images/pickedReveal.svg" alt="" className={styles.bgImage} aria-hidden="true" />


      <img
        src="/Images/backArrow.svg"
        alt="Back"
        className={styles.arrow}
        onClick={() => router.push('/Pickedforyou')}
      />


      <div className={styles.content}>
        <h2 className={styles.planTitle}>The plan is all set!</h2>
        {locations.map((loc) => (
          <LocationCard
            key={loc.title}
            image={loc.image}
            title={loc.title}
            location={loc.location}
            link={loc.link}
          />
        ))}

        <div className={styles.sectionPink}>
          <span className={styles.sectionLabel}>for</span>
            <img src="/Images/girlsNight.svg" alt="Girl's Night" className={styles.eventImage} />
            <div className={styles.eventText}>
              <div className={styles.eventTitle}></div>
              <div className={styles.eventDate}></div>
            </div>
        </div>

        <div className={styles.sectionPurple}>
          <span className={styles.sectionLabel}>with</span>
            <img src="/Images/boba.svg" alt="Boba Babies" className={styles.groupImage} />
        </div>

        <div className={styles.seeYou}>See you there!</div>
      </div>
    </div>
  );
}