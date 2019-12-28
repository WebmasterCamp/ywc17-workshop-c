import React from "react";

import styles from "./SummaryPage.module.css";
import Chart from "../../shared/UI/Chart/Chart";
import ContentList from "../../shared/UI/ContentList/ContentList";
import Question from "../../shared/UI/Question/Question";
import QuestionNavigation from "../../shared/UI/QuestionNavigation/QuestionNavigation";

import MOCK_QUESTION from "../../shared/data/questions";
import MOCK_STUDENTANSWER from "../../shared/data/studentAnswers";

export default function SummaryPage() {
  return (
    <>
      <Chart />
      <div className={styles.contentListContainer}>
        <ContentList />
        <ContentList />
      </div>
      <Question
        question={MOCK_QUESTION[0]}
        isAnswer={true}
        studentAnswer={MOCK_STUDENTANSWER[0]}
      />
      <QuestionNavigation />
    </>
  );
}
