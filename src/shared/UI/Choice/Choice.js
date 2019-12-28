import React from "react";
import styles from "./Choice.module.css";

export default function Choice(props) {
  return (
    <div className={styles.container} onClick={props.onChoose.bind(null, props.index)}>
      <div
        className={styles.colorBar}
      />
      <h3 className={styles.data}>{props.data}</h3>
    </div>
  );
}
