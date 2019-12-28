import React, { useState } from 'react'

import styles from './QuizPage.module.css';

import QuestionNavigation from '../../shared/UI/QuestionNavigation/QuestionNavigation';

import MOCK_QUESTIONS from '../../shared/data/questions';
import Question from '../../shared/UI/Question/Question';

export default function QuizPage() {
    const [questions, setQuestions] = useState(MOCK_QUESTIONS);
    return (
        <div>
            <QuestionNavigation numberofQuestion={questions.length} />
            {questions && questions.map(question => <Question question={question} isAnswer={false} />)}
        </div>

    )
}
