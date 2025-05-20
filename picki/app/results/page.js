'use client';
import { useState } from 'react';
import styles from './result.module.css';
import LocationCard from '../components/LocationCards/LocationCard';
import Image from 'next/image';

const locations = [
    {
      image: "/speeders.jpg",
      title: "SPEEDERS Richmond",
      location: "Richmond, British Columbia",
      link: "https://app.goo.gl/your-speeders-link",
    },
    {
      image: "./clay.jpg",
      title: "Claymates Ceramics Studio",
      location: "Vancouver, British Columbia",
      link: "https://app.goo.gl/your-claymates-link",
    },
    {
      image: "./soho.jpg",
      title: "SOHO Bar and Billiards",
      location: "Vancouver, British Columbia",
      link: "https://app.goo.gl/your-soho-link",
    },

  ];

  

  export default function ResultsPage() {
    const handleExit = () => {
      // For example, navigate away, close modal, or call a prop function
      // router.push('/'); // or any other route
    };

    return (
      <div className={styles.resultsContainer}>
    <button className={styles.exitIcon} onClick={handleExit}>
     <img src="/exitIcon.svg" alt="Exit" />
    </button>
        <h2 className={styles.heading}>We think you'd like...</h2>
        {locations.map((loc) => (
          <LocationCard
            key={loc.title}
            image={loc.image}
            title={loc.title}
            location={loc.location}
            link={loc.link}
          />
        ))}
        <div className={styles.refreshQuiz}>
          Don't like it? <span className={styles.purpleText}>Take the quiz again!</span>
          <img src="./refreshIcon.svg" alt="Refresh" className={styles.refreshIcon} />
        </div>
        <div className={styles.explorePage}>
        <span className={styles.purpleText}>Go to the Explore Page</span>
        </div>
      </div>
    );
  }






