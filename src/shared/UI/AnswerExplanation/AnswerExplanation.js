import React from 'react'

export default function AnswerExplanation(props) {
    return (
        <div>
            <div>ตอบข้อนี้ เพราะ </div>
                {/* {props.question.AnswerExplanation[props.question.answer]}</div> */}
            {props.studentAnswer !== props.question.answer &&
                <div>ข้อนี้ผิด เพราะ </div>
                //{props.question.AnswerExplanation[props.studentAnswer]}</div>
            }
        </div>
    )
}
