import React from "react";

import styles from "./DashboardPage.module.css";

import MOCK_USER_DATA from "../../shared/data/user";

import Card from "../../shared/UI/Card/Card";

export default function DashboardPage() {
  return (
    <div>
      {MOCK_USER_DATA.subjects.map(subject => (
        <>
          <h1>{subject.name}</h1>
          <div className={styles.courseContainer}>
             {subject.courses.map(course => <Card course={course} color={subject.colors} />)}
          </div>
        </>
      ))}
    </div>
  );
}
