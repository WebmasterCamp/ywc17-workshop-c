import React from "react";
import styles from "./Choice.module.css";

import Button from "../Button/Button";

export default function Choice(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.colorBar}
        style={{
          background: `transparent linear-gradient(180deg, #32529D 0%, , #C5AACD 100%) 0% 0% no-repeat padding-box`
        }}
      />
    </div>
  );
}
