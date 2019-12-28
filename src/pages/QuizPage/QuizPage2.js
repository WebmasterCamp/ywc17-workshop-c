import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import styles from "./QuizPage2.module.css";

import MOCK_QUESTIONS from "../../shared/data/questions";

import Question from "../../shared/UI/Question/Question";
import QuestionNavigation from "../../shared/UI/QuestionNavigation/QuestionNavigation";

export default function QuizPage() {
  const [questions, setQuestions] = useState(MOCK_QUESTIONS);
  const [answers, setAnswers] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const { currentQuestionNumber } = useParams();
  const history = useHistory();

  const nextQuestionHandler = () => {
    if (currentQuestionNumber < questions.length) return history.push(`/quiz/${parseInt(currentQuestionNumber) + 1}`);
  }

  const prevQuestionHandler = () => {
    if (currentQuestionNumber > 1) return history.push(`/quiz/${parseInt(currentQuestionNumber) - 1}`);
  }

  const setQuestionHandler = (questionNumber) => {
    return history.push(`/quiz/${parseInt(questionNumber) - 1}`);
  }

  return (
    <div>
      <QuestionNavigation numberofQuestion={questions.length} currentQuestionNumber={currentQuestionNumber} onChangeQuestion={setQuestionHandler} />
      <Question isFirst={parseInt(currentQuestionNumber) === 1} isLast={parseInt(currentQuestionNumber) === questions.length} questionNumber={currentQuestionNumber} question={questions[currentQuestionNumber - 1]} isAnswer={false} onNextQuestion={nextQuestionHandler} onPrevQuestion={prevQuestionHandler} />
    </div>
  );
}
