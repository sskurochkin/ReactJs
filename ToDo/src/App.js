import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./index.css";
import todosData from "./todos";

const App = () => {
	const [task, setTask] = useState(todosData);

	function addTask(e) {
		e.preventDefault();
		let newText = e.target[0].value;
		if (newText.trim() !== "") {
			const newItem = {
				id: todosData.length + 1,
				text: newText,
				completed: false,
			};
			setTask((task) => [...task, newItem]);
			e.target[0].value = "";
		}
		e.target[0].value = "";
	}

	const handleChecked = (id)=>{

		const newTask = task.map(task=>{
			if(task.id === id){
				task.completed = !task.completed
			}
			return task
		})

		setTask(newTask)
	}

	return (
		<div className='todo-list'>
			<TodoItem 
				list={task}
				onChange = {handleChecked} />
			<form onSubmit={addTask}>
				<input type='text' placeholder='task here' />
				<button type='submit'>Add task</button>
			</form>
		</div>
	);
};

export default App;
