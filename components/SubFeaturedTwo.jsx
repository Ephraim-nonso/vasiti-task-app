import React from "react";
import styles from "../styles/SubFeatured.module.css";

const SubFeaturedTwo = () => {
  return (
    <div className={styles.container} style={{ background: "#FFF8F5" }}>
      <div className={styles.subFeaturedImage}></div>
      <div
        className={styles.subFeaturedContent}
        style={{ order: 1, color: "#000" }}
      >
        <h3>Tolu & Joy’s Experience</h3>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
      </div>
    </div>
  );
};

export default SubFeaturedTwo;
