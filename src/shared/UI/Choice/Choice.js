import React from "react";
import styles from "./Choice.module.css";

export default function Choice(props) {
  return (
    <div className={styles.container} onClick={props.onChoose.bind(null, props.index)}>
      <div
        className={styles.colorBar}
        style={{
          background: `transparent linear-gradient(180deg, #32529D 0%, , #C5AACD 100%) 0% 0% no-repeat padding-box`
        }}
      />
    </div>
  );
}
