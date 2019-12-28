import React from 'react'

import styles from './SummaryPage.module.css';
import Chart from '../../shared/UI/Chart/Chart';
import ContentList from '../../shared/UI/ContentList/ContentList';
import Question from '../../shared/UI/Question/Question';
import QuestionNavigation from '../../shared/UI/QuestionNavigation/QuestionNavigation';

import MOCK_QUESTION from '../../shared/data/questions';

export default function SummaryPage() {
    return (
        <div>
            <h1>SummaryPage</h1>
             <Chart />
             <ContentList />
             <QuestionNavigation />
             <Question question={MOCK_QUESTION[0]} />
        </div>
    )
}
