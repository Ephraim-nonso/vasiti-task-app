import Image from "next/image";
import React from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.featuredContent}>
        <h1>Amazing Experiences from Our Wonderful Customers.</h1>
        <p>
          Here is what customers and vendors are saying about us, you can share
          your stories with us.
        </p>
      </div>
      <div className={styles.featuredImage}>
        <div className={styles.circle}></div>
        <div className={styles.img}>
          <Image src="/assets/test1.png" alt="test" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
