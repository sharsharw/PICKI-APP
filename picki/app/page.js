'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginAnimation from './login/loginAnimation/loginAnimation'; // Adjust path as needed
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [animationDone, setAnimationDone] = useState(false);
  const router = useRouter();

  // When animation is done, navigate to /login
  const handleAnimationComplete = () => {
    setAnimationDone(true);
    router.push('/login/loginPage');
  };

  return (
    <div className={styles.mobileFrame}>
      <LoginAnimation onComplete={handleAnimationComplete} />
    </div>
  );
}
