import React from "react";
import styles from "./Choice.module.css";

export default function Choice(props) {
  let selected;
  if (
    !props.isAnswer &&
    props.currentAnswers[props.questionNumber - 1] == props.index
  ) {
    selected = styles.colorBarSelected;
  }
  let chooseAnswerHandler = props.onChoose
    ? () => {
        props.onChoose(props.index);
      }
    : () => {};
  return (
    <div
      className={`${styles.container} ${selected}`}
      onClick={chooseAnswerHandler}
    >
{/* <div>isAnswer:{props.isAnswer ? 'true' : 'false'}</div>
<div>isCorrect:{props.isCorrect  ? 'true' : 'false'}</div>
<div>isSelect:{props.isselect  ? 'true' : 'false'}</div> */}
      {props.isAnswer && props.isCorrect && (
        <div className={styles.colorBarGreen}>
          <div className={styles.circleWhite}></div>
        </div>
      )}
      {props.isAnswer && !props.isCorrect && props.isSelect && (
        <div className={styles.colorBarRed}>
          <div className={styles.circleWhite}></div>
        </div>
      )}
      {!props.isAnswer && props.isSelect && (
        <div className={styles.colorBarSelected}>
          <div className={styles.circleWhite}></div>
        </div>
      )}
      {!props.isAnswer && !props.isSelect && (
        <div className={styles.colorBar}>
          <div className={styles.circle}></div>
        </div>
      )}
      <h3 className={styles.data}>{props.data}</h3>
    </div>
  );
}
