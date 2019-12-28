import React from "react";
import styles from "./Card.module.css";

import Button from "../Button/Button";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.colorBar}
        style={{
          background: `transparent linear-gradient(180deg, ${props.color[0]} 0%, ${props.color[1]} 100%) 0% 0% no-repeat padding-box`
        }}
      />
      <div className={styles.course}>
        <h2>{props.course.name}</h2>
        <p>{props.course.description}</p>
        <div className={styles.bottom}>
          <p>จำนวน {props.course.questionLength} ข้อ</p>
          <Button data="เริ่มแบบทดสอบ"></Button>
        </div>
      </div>
    </div>
  );
}
