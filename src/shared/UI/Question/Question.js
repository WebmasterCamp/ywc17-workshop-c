import React from 'react'

import styles from './Question.module.css'
import Button from '../Button/Button';
import Choice from '../Choice/Choice';
import AnswerExplanation from '../AnswerExplanation/AnswerExplanation';

export default function Question(props) {
    const answerQuestionHandler = (choiceIndex) => {
        props.onAnswer(props.questionNumber, choiceIndex);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.question}>{props.questionNumber} {props.question.question}</h2>
            <div className={styles.choices}>
                {
                    props.question.choices && props.question.choices.map((choice, index) => <Choice key={index} data={choice} index={index} onChoose={answerQuestionHandler} />)
                }
            </div>
            {!props.isAnswer && <div className={styles.navigation}>
                {!props.isFirst && <Button data="Back" onClick={props.onPrevQuestion} ></Button>}
                {!props.isLast && <Button data="Next" onClick={props.onNextQuestion}></Button>}
            </div>}
            {props.isAnswer && <AnswerExplanation {...props}></AnswerExplanation>}
        </div>

    )
}
