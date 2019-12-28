import React from 'react'
import styles from './QuestionStatus.module.css'

export default function QuestionStatus(props) {
    return (
        <div className={`${styles.questionStatusContainer} ${props.isMarked ? styles.marked : ''} ${props.status === 'done' ? styles.doneStatus : ''}`}>
            <p className={styles.questionNumber}>{props.questionNumber}</p>
        </div>
    )
}
