import React from "react";
import styles from "./Choice.module.css";

import Button from "../Button/Button";

export default function Choice(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.colorBar}
      />
    </div>
  );
}
