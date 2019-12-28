import React from "react";
import styles from "./Choice.module.css";

export default function Choice(props) {
  return (
    <div
      className={styles.container}
      onClick={props.onChoose.bind(null, props.index)}
    >
      {props.isSelect && (
        <div className={styles.colorBarSelected}>
          <div className={styles.circleSelected}></div>
        </div>
      )}
      {!props.isSelect && (
        <div className={styles.colorBar}>
          <div className={styles.circle}></div>
        </div>
      )}
      <h3 className={styles.data}>{props.data}</h3>
    </div>
  );
}
