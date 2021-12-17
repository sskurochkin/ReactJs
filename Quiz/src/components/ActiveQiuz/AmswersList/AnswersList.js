import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import './AnswersList.css';

const AnswerList = (props) =>{
    return(
        <ul className='AnswerList'>
            {props.answers.map((answer, index)=>{
                return(
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick = {props.onAnswerClick}
                        answerState={props.state ? props.state[answer.id] : null }/>
                )
            })}
        </ul>
    )
}

export default AnswerList
