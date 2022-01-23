import React from "react";
import { testimonyTwo } from "./data/Data";
import Testimony from "./Testimony";
import styles from "../styles/Card.module.css";

const mapTest = testimonyTwo.map(
  (item) => (
    <div key={item.name} className={styles.container}>
      <img src={item.img} alt={item.name} layout="fill" />
      <h4>{item.name}</h4>
      <div className={styles.details}>
        <p>{item.place}</p>
        <div>
          <p className={styles.location}>{item.position}</p>
        </div>
      </div>
      <p> {item.testimony} </p>
    </div>
  )
  // console.log(item)
);

const SecondTest = () => {
  return <Testimony>{mapTest}</Testimony>;
};

export default SecondTest;
