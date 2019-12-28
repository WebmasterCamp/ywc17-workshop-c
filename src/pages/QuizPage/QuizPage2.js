import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import styles from "./QuizPage2.module.css";

import MOCK_QUESTIONS from "../../shared/data/questions";

import Question from "../../shared/UI/Question/Question";
import QuestionNavigation from "../../shared/UI/QuestionNavigation/QuestionNavigation";

export default function QuizPage(props) {
  const [questions, setQuestions] = useState(MOCK_QUESTIONS);
  const [answers, setAnswers] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const { currentQuestionNumber } = useParams();
  const history = useHistory();

  const nextQuestionHandler = () => {
    if (currentQuestionNumber < questions.length)
      return history.push(`/quiz/${parseInt(currentQuestionNumber) + 1}`);
  };

  const prevQuestionHandler = () => {
    if (currentQuestionNumber > 1)
      return history.push(`/quiz/${parseInt(currentQuestionNumber) - 1}`);
  };

  const setQuestionHandler = questionNumber => {
    return history.push(`/quiz/${parseInt(questionNumber) - 1}`);
  };

  const answerHandler = (questionNumber, choiceIndex) => {
    setAnswers(prevAnswers => {
      let copied = [...prevAnswers];
      copied[questionNumber - 1] = choiceIndex;
      return copied;
    });
  };

  const bookmarkHandler = (questionNumber) => {
    setBookmarks(prevBookmark => {
      let copied = [...prevBookmark];
      copied[questionNumber - 1] = !copied[questionNumber - 1];
      return copied;
    })
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>คณิตศาสตร์พื้นฐาน 2 เรื่อง สมการเชิงเส้น</h1>
        <p className={styles.description}>แบบทดสอบก่อนเรียน พื้นฐานบทเรียน</p>
      </div>
      <Question
        isFirst={parseInt(currentQuestionNumber) === 1}
        isLast={parseInt(currentQuestionNumber) === questions.length}
        questionNumber={currentQuestionNumber}
        question={questions[currentQuestionNumber - 1]}
        isBookmark={!!bookmarks[currentQuestionNumber - 1]}
        isAnswer={false}
        onNextQuestion={nextQuestionHandler}
        onPrevQuestion={prevQuestionHandler}
        onAnswer={answerHandler}
        onBookmark={bookmarkHandler}
        currentAnswers={answers}
      />
      <QuestionNavigation
        numberofQuestion={questions.length}
        currentQuestionNumber={currentQuestionNumber}
        onChangeQuestion={setQuestionHandler}
        currentAnswers={answers}
        currentBookmarks={bookmarks}
      />
    </div>
  );
}
