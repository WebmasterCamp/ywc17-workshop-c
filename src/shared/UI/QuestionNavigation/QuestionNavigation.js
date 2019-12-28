import React from 'react'
import styles from './QuestionNavigation.module.css'
import QuestionStatus from './QuestionStatus/QuestionStatus';

export default function QuestionNavigation(props) {
    let QuestionStatusList = [];
    for (let i=1; i <= props.numberofQuestion; i++) {
        QuestionStatusList.push(<QuestionStatus key={i} questionNumber={i} status={typeof props.currentAnswers[i - 1] !== 'undefined' ? "done" : "empty"} isMarked={!!props.currentBookmarks[i - 1]} onClick={props.onChangeQuestion.bind(null, i + 1)} disabled={parseInt(props.currentQuestionNumber) === i} />)
    }

    return (
        <div className={styles.questionNavigationContainer}>
            {QuestionStatusList}
        </div>
    )
}
