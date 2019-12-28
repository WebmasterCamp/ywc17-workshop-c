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
    if (!props.isAnswer) props.onAnswer(props.questionNumber, choiceIndex);
  };

  let history = useHistory();

  const submitAnswerHandler = () => {
    if (window.confirm("คุณแน่ใจหรือไม่ที่จะส่งคำตอบ")) {
      history.push("/summary");
    }
  };

  let bookmarkHandler = props.onBookmark
    ? () => props.onBookmark(props.questionNumber)
    : () => {};

    let isCorrect = props.question.answer == props.studentAnswer;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.question}>
          {props.questionNumber}. {props.question.question}
        </h2>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>{props.isAnswer && props.question.topics.map(topic => <div style={{border: '1px solid black', borderRadius: '1rem', padding: '.5rem', margin: '0 1rem'}}>{topic}</div>)}</div>
        {props.isBookmark ? (
          <FontAwesomeIcon icon={solidBookmark} color="#E08322" size="2x" onClick={bookmarkHandler} />
        ) : (
          <FontAwesomeIcon icon={faBookmark} color="#E08322" size="2x" onClick={bookmarkHandler} />
        )}
      </div>

      <div className={styles.choices}>
        {props.question.choices &&
          props.question.choices.map((choice, index) => (
            <Choice
              key={index}
              data={choice}
              index={index}
              onChoose={answerQuestionHandler}
              isSelect={index == props.studentAnswer}
              isCorrect={isCorrect}
              {...props}
            />
          ))}
      </div>
      {!props.isAnswer && (
        <div className={styles.navigation}>
          {!props.isFirst && (
            <Button
              onClick={props.onPrevQuestion}
              isBack={true}
              className={styles.back}
            >
              ข้อก่อนหน้า
            </Button>
          )}
          {!props.isLast && (
            <Button onClick={props.onNextQuestion} className={styles.next}>
              ข้อถัดไป
            </Button>
          )}
          {props.isLast && (
            <Button onClick={submitAnswerHandler} className={styles.next}>
              ส่งคำตอบ
            </Button>
          )}
        </div>
      )}
      {props.isAnswer && <AnswerExplanation {...props}></AnswerExplanation>}
      {props.isAnswer && (
        <>
        {isCorrect && <p>คุณตอบคำถามได้ถูกต้อง {props.question.answerExplanation[props.question.answer]}</p>}
      {!isCorrect && <p>คุณเลือก {props.question.choices[props.studentAnswer]} ซึ่ง {props.question.answerExplanation[props.studentAnswer]} ดังนั้น {props.question.choices[props.question.answer]} เป็นคำตอบที่ถูกต้อง เนื่องจาก {props.question.answerExplanation[props.answer]}</p>}
        </>
      )}
    </div>
  );
}
