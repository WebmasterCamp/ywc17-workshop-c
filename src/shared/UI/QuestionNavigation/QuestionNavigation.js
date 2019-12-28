import React from 'react'
import styles from './QuestionNavigation.module.css'
import QuestionStatus from './QuestionStatus/QuestionStatus';

export default function QuestionNavigation(props) {
    let QuestionStatusList = [];
    for (let i=1; i <= props.numberofQuestion; i++) {
        QuestionStatusList.push(<QuestionStatus key={i} questionNumber={i} status="done" isMarked={true} onClick={props.onChangeQuestion.bind(null, i + 1)} disabled={parseInt(currentQuestionNumber) === i} />)
    }

    return (
        <div className={styles.questionNavigationContainer}>
            {QuestionStatusList}
        </div>
    )
}
