import Image from "next/image";
import React from "react";
import styles from "../styles/SubFeatured.module.css";

const SubFeatured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.subFeaturedContent}>
          <h3>Josiah’s Experience</h3>
          <p>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
        </div>
        <div className={styles.subFeaturedImage}>
          <div className={styles.subCircle}></div>
          <div>
            <Image
              src="/assets/ladies.png"
              alt="ladies"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFeatured;
