import "./Quiz.css";
import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQiuz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";



class Qiuz extends Component {
	state = {
		results : {},// id: 
		isFinished: false,
		activeQuestion: 0,
		answerState: null,
		answerRight: 0,
		quiz: [
			{
				question: "Какого цвета апельсин?",
				id: 1,
				rightAnswer: 3,
				answers: [
					{ text: "Желтый", id: 1 },
					{ text: "Голубой", id: 2 },
					{ text: "Оранжевый", id: 3 },
					{ text: "Красный", id: 4 },
				],
			},
			{
				question: "Сколько секунд в одном часе?",
				id: 2,
				rightAnswer: 1,
				answers: [
					{ text: 3600, id: 1 },
					{ text: 12000, id: 2 },
					{ text: 84000, id: 3 },
					{ text: 600, id: 4 },
				],
			},
		],
	};

	onAnswerClickHandler = (answerId) => {
		if (this.state.answerState) {
			const key = Object.keys(this.state.answerState)[0];
			if (this.state.answerState[key] === "sucsess") {
				return;
			}
		}

		const question = this.state.quiz[this.state.activeQuestion];
		const results = this.state.results;

		if (question.rightAnswer === answerId) {
			if(!results[question.id]){
				results[question.id] = 'sucsess'
			}

			this.setState({
				answerState: { [answerId]: "sucsess" },
				results
			});

			const timeout = window.setTimeout(() => {
				if (this.isQuizFinished()) {
					this.setState({
						isFinished: true,
					})
				} else {
					this.setState({
						answerState: null,
						activeQuestion: this.state.activeQuestion + 1,
					});
				}
				window.clearTimeout(timeout);
			}, 1000);
		} else {
			results[question.id] = 'error'
			this.setState({
				results,
				answerState: { [answerId]: "error" },
			});
		}
	};

	isQuizFinished = () => {
		return this.state.activeQuestion + 1 === this.state.quiz.length;
	};

	retryHandler = () =>{
		this.setState({
			activeQuestion: 0,
			answerState: null,
			isFinished: false,
			results: {}
		})
	}

	render() {
		const { activeQuestion, quiz, answerState, results } = this.state;

		return (
			<div className='Quiz'>
				<div className='QuizWrapper'>
					<h1>Ответьте на все вопросы</h1>

					{this.state.isFinished 
					?(
						<FinishedQuiz
							results={results}
							quiz = {quiz}
							onRetry = {this.retryHandler}
						/>) 
					:(<ActiveQuiz
							quizLength={quiz.length}
							answerNumber={activeQuestion + 1}
							answers={quiz[activeQuestion].answers}
							question={quiz[activeQuestion].question}
							onAnswerClick={this.onAnswerClickHandler}
							state={answerState}
							
						/>
					)}
				</div>
			</div>
		);
	}
}

export default Qiuz;
