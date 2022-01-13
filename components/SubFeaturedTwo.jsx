import Image from "next/image";
import React from "react";
import out from "../styles/SubFeatured.module.css";
import styles from "../styles/SubFeaturedTwo.module.css";

const SubFeaturedTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subFeaturedImageTwo} style={{ order: 2 }}>
        <Image src="/assets/woman.png" alt="women" width={600} height={600} />
      </div>
      <div className={styles.subFeaturedContentTwo}>
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
