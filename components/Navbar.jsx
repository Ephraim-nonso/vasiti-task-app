import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navOne}>
        <div className={styles.logo}>
          <h1>
            Vasiti<span className={styles.com}>.com</span>
          </h1>
        </div>
        <ul className={styles.lists}>
          <li className={styles.listItem}>About us </li>
          <li className={styles.listItem}>Stories</li>
          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>Login</li>
          <li className={styles.listItem}>Sign up</li>
        </ul>
      </nav>

      <nav className={styles.navTwo}>
        <ul className={styles.lists}>
          <li className={styles.listItem}>MarketPlace</li>
          <li className={styles.listItem}>Wholesale center</li>
          <li className={styles.listItem}>Seller Center</li>
          <li className={styles.listItem}>Services</li>
          <li className={styles.listItem}>Internships</li>
          <li className={styles.listItem}>Events</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
