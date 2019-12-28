import React from 'react'

export default function AnswerExplanation(props) {
    return (
        <div>
            <div>ตอบข้อนี้ เพราะ {props.question.answerExplanation[props.question.answer]}</div>
            {props.studentAnswer !== props.question.answer &&
                <div>ข้อนี้ผิด เพราะ {props.question.answerExplanation[props.studentAnswer]}</div>
            }
        </div>
    )
}
