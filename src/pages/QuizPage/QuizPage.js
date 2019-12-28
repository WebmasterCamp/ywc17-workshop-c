import React, { useState } from 'react'

import styles from './QuizPage.module.css';

import QuestionNavigation from '../../shared/UI/QuestionNavigation/QuestionNavigation';

import MOCK_QUESTIONS from '../../shared/data/questions';

export default function QuizPage() {
    const [questions, setQuestions] = useState(MOCK_QUESTIONS);
    return (
        <div>
            {/* <Question /> */}
            <QuestionNavigation numberofQuestion={questions.length} />
        </div>
    )
}
