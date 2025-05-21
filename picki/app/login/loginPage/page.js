'use client';
import React, { useState } from "react";
import styles from './loginPage.module.css'; // Adjust path if needed
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <div className={styles.mobileFrame}>
      <img src="/Images/mascotFace.svg" alt="Mascot" className={styles.mascot} />
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.loginButton} type="submit">
          Log in
        </button>
      </form>
      <div className={styles.switchText}>
        Don't have an account?{" "}
        <span
          className={styles.signUpLink}
          onClick={() => router.push('/login/signUp')}
        >
          Sign up
        </span>
      </div>
    </div>
  );
}
