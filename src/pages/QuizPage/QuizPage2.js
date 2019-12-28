import React, { useState } from 'react'

import styles from './QuizPage2.module.css';

import MOCK_QUESTIONS from '../../shared/data/questions';

import Question from '../../shared/UI/Question/Question';
import QuestionNavigation from '../../shared/UI/QuestionNavigation/QuestionNavigation';

export default function QuizPage() {
    const [questions, setQuestions] = useState(MOCK_QUESTIONS);
    return (
        <div>
            <Question question={MOCK_QUESTIONS[0]} isAnswer={false} />
        </div>

    )
}
