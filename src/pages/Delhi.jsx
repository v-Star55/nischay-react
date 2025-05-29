import React from "react";
import styles from "../Styles/Delhi.module.css";

export default function Delhi() {
  return (
    <main className={styles.container}>
      <h1>Delhi</h1>
      <p>Click the button below to go to the Intake Form.</p>
      <a
        href="https://power-innovation-8457--developer.sandbox.my.site.com/pentusHealthPortal"
      
        rel="noopener noreferrer"
        className={styles.ctaButton}
      >
        Go to Form
      </a>
    </main>
  );
}
