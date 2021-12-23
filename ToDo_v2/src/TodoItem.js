import React from "react";

const TodoItem = (props) => {
	return (
		<div className='todo-item' onClick={()=> props.setCheckedTodo(props.todo.id)}>
			<input type='checkbox' checked={props.todo.completed}/>
			<p>{props.todo.text}</p>
		</div>
	);
};

export default TodoItem;
