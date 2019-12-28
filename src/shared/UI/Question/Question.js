import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Question.module.css';

import Button from '../Button/Button';
import Choice from '../Choice/Choice';
import AnswerExplanation from '../AnswerExplanation/AnswerExplanation';

export default function Question(props) {
    const answerQuestionHandler = (choiceIndex) => {
        props.onAnswer(props.questionNumber, choiceIndex);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.question}>{props.questionNumber}. {props.question.question}</h2>
            {props.isBookmark ? <FontAwesomeIcon icon={solidBookmark} onClick={props.onBookmark.bind(null, props.questionNumber)} /> : <FontAwesomeIcon icon={faBookmark} onClick={props.onBookmark.bind(null, props.questionNumber)} />}
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
