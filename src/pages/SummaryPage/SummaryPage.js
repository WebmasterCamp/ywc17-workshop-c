import React from "react";
import { Link } from 'react-router-dom';

import styles from "./SummaryPage.module.css";
import Chart from "../../shared/UI/Chart/Chart";
import ContentList from "../../shared/UI/ContentList/ContentList";
import Question from "../../shared/UI/Question/Question";
import QuestionNavigation from "../../shared/UI/QuestionNavigation/QuestionNavigation";

import MOCK_QUESTION from "../../shared/data/questions";
import MOCK_STUDENTANSWER from "../../shared/data/studentAnswers";
import MOCK_BOOKMARK from '../../shared/data/studentBookmark'

export default function SummaryPage() {
  return (
    <div style={{marginBottom: '3rem'}}>
      <div className={styles.header}>
        <h1>ผลวิเคราะห์การทำแบบทดสอบ</h1>
        <h2>รายวิชา ส21102 สังคมศึกษา 3</h2>
        <h3>เรื่อง เศรษฐศาสตร์</h3>
      </div>
      <Chart />
      <h2 style={{marginTop: '3rem', textAlign: 'center'}}>คะแนนรวม 3/5</h2>
      <div className={styles.contentListContainer}>
        {/* <ContentList />
        <ContentList /> */}
        <div classname={styles.contentWrapper}>
          <h2>เนื้อหาที่ทำได้ดี</h2>
          <ul class={styles.contentList}>
            <li><Link to="/content1">ปัจจัยการผลิต</Link></li>
          </ul>
        </div>
        <div classname={styles.contentWrapper}>
          <h2>เนื้อหาที่ควรศึกษาเพิ่มเติม</h2>
          <ul class={styles.contentList}>
            <li><Link to="/content1">พื้นฐานเศรษฐศาสตร์</Link></li>
          </ul>
        </div>
      </div>
      {MOCK_QUESTION.map((question, index) => <Question
        question={MOCK_QUESTION[index]}
        questionNumber={index + 1}
        isAnswer={true}
        isBookmark={MOCK_BOOKMARK[index]}
        studentAnswer={MOCK_STUDENTANSWER[index]}
      />)}
    </div>
  );
}
