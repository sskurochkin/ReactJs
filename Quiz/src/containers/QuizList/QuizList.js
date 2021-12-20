import React from "react";
import { Link } from "react-router-dom";
import './QuizList.css'

class QuizList extends React.Component {
	renderQuizes() {
		return [1, 2, 3].map((quiz, index) => {
			return (
				<li key={index}>
					<Link to={"/quiz/" + quiz}>{quiz}</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div className='QuizList'>
				<h1>Список тестов</h1>

				<ul>{this.renderQuizes()}</ul>
			</div>
		);
	}
}

export default QuizList;
