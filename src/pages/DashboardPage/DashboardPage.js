import React from "react";
import { Link } from 'react-router-dom';

import styles from "./DashboardPage.module.css";

import MOCK_USER_DATA from "../../shared/data/user";

import Card from "../../shared/UI/Card/Card";

export default function DashboardPage() {
  return (
    <div>
      {MOCK_USER_DATA.subjects.map(subject => (
        <>
<h1>{subject.code} {subject.name}</h1>
          {subject.courses.length > 6 ? <Link /> : ''}
          <div className={styles.courseContainer}>
             {subject.courses.map((course, i) => <Card key={i} course={course} color={subject.colors} />)}
          </div>
        </>
      ))}
    </div>
  );
}
