import React from 'react'

import styles from './QuizPage.module.css';

import Question from '../../shared/UI/Question/Question';
import questions from '../../shared/data/questions';

export default function QuizPage() {
    return (
        <div>
            {questions && questions.map(question => <Question question={question} isAnswer={false} />)}
        </div>
    )
}
