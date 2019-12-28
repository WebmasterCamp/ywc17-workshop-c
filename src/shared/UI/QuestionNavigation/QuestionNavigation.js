import React from 'react'
import styles from './QuestionNavigation.module.css'
import QuestionStatus from './QuestionStatus/QuestionStatus';

export default function QuestionNavigation(props) {
    let QuestionStatusList = [];
    for (let i=1; i <= props.numberofQuestion; i++) {
        QuestionStatusList.push(<QuestionStatus questionNumber={i} status="done" isMarked={true} />)
    }
    return (
        <div className={styles.questionNavigationContainer}>
            {QuestionStatusList}
        </div>
    )
}
