import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h2 className={styles.logo}>Nischay</h2>
      <nav>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <span>Home</span>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}><a href="#section-a" className={styles.dropdownLink}>Section A</a></li>
              <li className={styles.dropdownItem}><a href="#section-b" className={styles.dropdownLink}>Section B</a></li>
              <li className={styles.dropdownItem}><a href="#section-c" className={styles.dropdownLink}>Section C</a></li>
              <li className={styles.dropdownItem}><a href="#section-d" className={styles.dropdownLink}>Section D</a></li>
              <li className={styles.dropdownItem}><a href="#section-e" className={styles.dropdownLink}>Section E</a></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <span>Location</span>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}><a href="#bangalore" className={styles.dropdownLink}>Bangalore</a></li>
              <li className={styles.dropdownItem}><Link to="/delhi" className={styles.dropdownLink}>Delhi</Link></li>
              <li className={styles.dropdownItem}><a href="#mumbai" className={styles.dropdownLink}>Mumbai</a></li>
              <li className={styles.dropdownItem}><a href="#chennai" className={styles.dropdownLink}>Chennai</a></li>
              <li className={styles.dropdownItem}><a href="#kolkata" className={styles.dropdownLink}>Kolkata</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
