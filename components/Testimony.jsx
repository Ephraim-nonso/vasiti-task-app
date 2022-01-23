import React from "react";
import styles from "../styles/Testimony.module.css";

const Testimony = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Testimony;
