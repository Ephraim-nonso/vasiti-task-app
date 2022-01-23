import React from "react";
import Featured from "../Featured";
import Navbar from "../Navbar";
import styles from "../../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <Featured />
    </div>
  );
};

export default Main;
