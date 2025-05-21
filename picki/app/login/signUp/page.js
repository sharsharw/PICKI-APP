'use client';
import React, { useState } from "react";
import styles from './signUp.module.css'; // Adjust path if needed

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.mobileFrame}>
      <img src="/Images/mascotFace.svg" alt="Mascot" className={styles.mascot} />
      <form className={styles.form}>
        <input
          className={styles.input}
          type="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
}