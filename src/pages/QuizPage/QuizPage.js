import React from 'react'

import styles from './QuizPage.module.css';

import Question from '../../shared/UI/Question/Question';
import MOCK_QUESTION from '../../shared/data/questions';

export default function QuizPage() {
    return (
        <div>
            <Question question={MOCK_QUESTION[0]} isAnswer={false} />)
        </div>

    )
}
