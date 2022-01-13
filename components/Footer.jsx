import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.imgContainer}>
          <Image src="/assets/sub.png" width={437} height={437} alt="sub" />
        </div>
        <div className={styles.subContainer}>
          <h4>Be a member of our community 🎉</h4>
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <div className={styles.inputText}>
            <form action="">
              <input type="text" placeholder="enter your email address" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        {/* Company */}
        <ul className={styles.lists}>
          <li className={styles.listItem}>Company</li>
          <li className={styles.listItem}>About us</li>
          <li className={styles.listItem}>Terms of use</li>
          <li className={styles.listItem}>Privacy policy</li>
          <li className={styles.listItem}>Press & Media</li>
        </ul>
        {/* Products */}
        <ul className={styles.lists}>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Marketplace</li>
          <li className={styles.listItem}>Magazine</li>
          <li className={styles.listItem}>Seller</li>
          <li className={styles.listItem}>Wholesale</li>
          <li className={styles.listItem}>Services</li>
        </ul>
        {/* Careers */}
        <ul className={styles.lists}>
          <li className={styles.listItem}>Careers</li>
          <li className={styles.listItem}>Become a Campus Rep</li>
          <li className={styles.listItem}>Become a Vasiti Influencer</li>
          <li className={styles.listItem}>Become a Campus writer</li>
          <li className={styles.listItem}>Become an Affiliate</li>
        </ul>
        {/* Get in touch */}
        <ul className={styles.lists}>
          <li className={styles.listItem}>Get in touch</li>
          <li className={styles.listItem}>Contact us</li>
          <li className={styles.listItem}>Partner with us</li>
          <li className={styles.listItem}>Advertise with us</li>
          <li className={styles.listItem}>Help/FAQs</li>
        </ul>
        {/* Join through Media*/}
        <ul className={styles.lists}>
          <li className={styles.listItem}>Join our community</li>
          <li className={styles.listItem}>
            <span>
              <Image src="/assets/fb.png" width={10} height={10} />
            </span>{" "}
            <span>
              <Image src="/assets/ig.png" width={10} height={10} />
            </span>{" "}
            <span>
              <Image src="/assets/tw.png" width={10} height={10} />
            </span>
            <span>
              <Image src="/assets/In.png" width={10} height={10} />
            </span>
          </li>

          <li className={styles.listItem}>Email Newsletter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
