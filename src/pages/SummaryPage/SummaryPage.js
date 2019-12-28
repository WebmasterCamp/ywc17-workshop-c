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
      <div className={styles.header}>
        <h1>ผลวิเคราะห์การทำแบบทดสอบ</h1>
        <h2>รายวิชา ส21102 สังคมศึกษา 3</h2>
        <h3>เรื่อง เศรษฐศาสตร์</h3>
      </div>
      <Chart />
      <div className={styles.contentListContainer}>
        {/* <ContentList />
        <ContentList /> */}
        <div>
          <h2>จุดแข็ง</h2>
          <ul class={styles.contentList}>
            <li>กลไกราคา</li>
          </ul>
        </div>
        <div>
          <h2>จุดอ่อน</h2>
          <ul class={styles.contentList}>
            <li>พื้นฐานเศรษฐศาสตร์</li>
            <li>ปัจจัยการผลิต</li>
          </ul>
        </div>
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
