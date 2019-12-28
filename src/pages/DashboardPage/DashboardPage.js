import React from 'react'

import styles from './DashboardPage.module.css';

import Button from '../../shared/UI/Button/Button';
import Question from '../../shared/UI/Question/Question';

import questions from '../../shared/data/questions';


export default function DashboardPage() {
    return (
        <div>
            DashboardPage
            <Button />
            {questions && questions.map(question => <Question question={question} isAnswer={false} />)}
        </div>
    )

}
