'use client';
import React, { useState, useEffect } from "react";
import ArrowButton from '../../components/arrowButton/ArrowButton'; // Adjust path as needed
import styles from './onboarding.module.css'; 
import image from 'next/image';
import { useRouter } from 'next/navigation';

const onboardingSteps = [
  {
    title: "Welcome to",
    logo: "/Images/pickiLogo.svg", // Your logo image
    description: "",
    showArrows: false,
    showDots: false,
  },
  {
    image: "/Images/mascotGroup.svg",
    title: "Indecision? Solved!",
    description: "No more endless discussions. Let us help you make a choice when no one can agree.",
    showArrows: true,
    showDots: true,
  },
  {
    image: "/Images/mascotCalendar.svg",
    title: "Create an event and invite your friends!",
    description: "Easily organize your next hangout and keep your plans all in one place!",
    showArrows: true,
    showDots: true,
  },
  {
    image: "/Images/mascotPick.svg",
    title: "We'll pick for you!",
    description: "Can't decide where to go? Everyone gets a say! We'll generate the best option based on everyone's picks.",
    showArrows: true,
    showDots: true,
  },
  {
    image: "/Images/mascotGroup.svg",
    title: "Start Exploring Now!",
    description: "Open the app, share your preferences, and get your next adventure started!",
    showArrows: true,
    showDots: true,
  },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  // Auto-advance from the logo page after 2 seconds
  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const goNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      router.push('/events/home');
    }
  };

  const goPrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const current = onboardingSteps[step];

  return (
    <div className={styles.mobileFrame}>
      <div className={styles.skip}>
        {step > 0 && <span className={styles.skipText} onClick={() => router.push('/events/home')}>Skip</span>}
      </div>
      <div className={styles.content}>
        {step === 0 ? (
          <>
            <h2 className={styles.welcome}>Welcome to</h2>
            <img src={current.logo} alt="Picki Logo" className={styles.logo} />
          </>
        ) : (
          <>
            <img src={current.image} alt="" className={styles.image} />
            <h2 className={styles.title}>{current.title}</h2>
            <p className={styles.description}>{current.description}</p>
          </>
        )}
      </div>
      {current.showDots && (
        <div className={styles.dots}>
          {onboardingSteps.slice(1).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${step - 1 === i ? styles.activeDot : ""}`}
            />
          ))}
        </div>
      )}
      {current.showArrows && (
        <div className={styles.arrows}>
          <ArrowButton direction="left" onClick={goPrev} disabled={step === 1} />
          <ArrowButton direction="right" onClick={goNext} />
        </div>
      )}
    </div>
  );
}

