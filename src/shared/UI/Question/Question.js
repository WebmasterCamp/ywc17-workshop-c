import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Question.module.css";

import Button from "../Button/Button";
import Choice from "../Choice/Choice";
import AnswerExplanation from "../AnswerExplanation/AnswerExplanation";

export default function Question(props) {
  const answerQuestionHandler = choiceIndex => {
    props.onAnswer(props.questionNumber, choiceIndex);
  };


  let history = useHistory();

  const submitAnswerHandler = () => {
    if (window.confirm("คุณแน่ใจหรือไม่ที่จะส่งคำตอบ")) {
      history.push("/summary");
    }
  };

  let bookmarkHandler = (() => props.onBookmark(props.questionNumber)) || (() => {});

  return (
    <div className={styles.container}>
      <h2 className={styles.question}>
        {props.questionNumber}. {props.question.question}
      </h2>
      {props.isBookmark ? (
        <FontAwesomeIcon
          icon={solidBookmark}
          onClick={bookmarkHandler}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBookmark}
          onClick={bookmarkHandler}
        />
      )}
      <div className={styles.choices}>
        {props.question.choices &&
          props.question.choices.map((choice, index) => (
            <Choice
              key={index}
              data={choice}
              index={index}
              onChoose={answerQuestionHandler}
              {...props}
            />
          ))}
      </div>
      {!props.isAnswer && (
        <div className={styles.navigation}>
          {!props.isFirst && (
            <Button onClick={props.onPrevQuestion} isBack={true}>ข้อก่อนหน้า</Button>
          )}
          {!props.isLast && (
            <Button onClick={props.onNextQuestion}>ข้อถัดไป</Button>
          )}
          {props.isLast && (
            <Button onClick={submitAnswerHandler}>ส่งคำตอบ</Button>
          )}
        </div>
      )}
      {props.isAnswer && <AnswerExplanation {...props}></AnswerExplanation>}
    </div>
  );
}
