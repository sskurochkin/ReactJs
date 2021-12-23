import React, { useState } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todos";

function Todo() {
	const [name, setName] = useState("");
	const [todos, setTodos] = useState(todosData);

	const addTodoHandler = (e) => {
		const value = e.target.value;
		setName(value);
		if (e.key === "Enter") {
			setTodos((prev) => [
				...prev,
				{ id: todos.length + 1, text: value, completed: false },
			]);

			setName("");
		}
	};

	const setCheckedTodo = (id) => {
		const newArr = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo
		});
		setTodos(newArr);
	};

	return (
		<>
		<h1>ToDo App</h1>
			{todos && todos.map((todo) => (
				<TodoItem
					todo={todo}
					key={todo.id}
					setCheckedTodo={setCheckedTodo}
				/>
			))}
			<input
				type='text'
				placeholder='Write new task and press "Enter"'
				value={name}
				onChange={(e) => setName(e.target.value)}
				onKeyPress={(e) => addTodoHandler(e)}
			/>
		</>
	);
}

export default Todo;
