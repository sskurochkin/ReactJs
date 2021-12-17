import React from "react";
import AnswerList from "./AmswersList/AnswersList";
import './ActiveQuiz.css'

const ActiveQuiz = (props) =>{

    return(

        <div className="ActiveQuiz">

            <p className='Question'>
                <span>
                    <strong>{props.answerNumber}.&nbsp;</strong>
                    {props.question}
                </span>
                <small>{props.answerNumber} / {props.quizLength}</small>
            </p>

            <AnswerList
                answers = {props.answers}
                onAnswerClick = {props.onAnswerClick}
               state = {props.state}
            />
            <span>{props.answerRight}</span>
        </div>
    )
}

export default ActiveQuiz