import React from "react";
import "./FinishedQuiz.css";
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    const sucsessCount = Object.keys(props.results).reduce((total, key)=>{
        if(props.results[key] === 'sucsess'){
            total++
        }
        return total
    }, 0) 
	return (
		<div className='FinishedQuiz'>
			<ul>
				{props.quiz.map((quizItem, index) => {
					return (
						<li className={props.results[quizItem.id]}
                        key={index}>
							<strong>{index + 1 + '.'}</strong>&nbsp;
							{quizItem.question}
							<span>&nbsp;{props.results[quizItem.id] === 'error' ? '-' : '+'}</span>
						</li>
					);
				})}
				
			</ul>
			<p>Правильно {sucsessCount} из {props.quiz.length}</p>
			<div>
				<Button
					onClick = {props.onRetry}
					type = "primary" 
				>
					Повторить
				</Button>
				<Button
					onClick = {props.onRetry}
					type = "sucsess" 
				>
					Перейти в список тестов
				</Button>

				
			</div>
		</div>
	);
};

export default FinishedQuiz;
