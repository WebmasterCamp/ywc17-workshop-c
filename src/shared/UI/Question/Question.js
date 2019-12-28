import React from 'react'

import styles from './Question.module.css'
import Button from '../Button/Button';
import Choice from '../Choice/Choice';
import AnswerExplanation from '../AnswerExplanation/AnswerExplanation';

export default function Question(props) {
    return (
        <div className={styles.container}>
            <div className={styles.question}>1. {props.question.question}</div>
            <div className={styles.choices}>
                {
                    props.question.choices && props.question.choices.map(choice => <Choice data={choice}></Choice>)
                }
            </div>
            {!props.isAnswer && <div className={styles.navigation}>
                <Button data="Back"></Button>
                <Button data="Next"></Button>
            </div>}
            {props.isAnswer && <AnswerExplanation {...props}></AnswerExplanation>}
        </div>

    )
}
