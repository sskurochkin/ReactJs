import React from "react";

const TodoItem = ({ list, onChange }) => {
	return (
		<>
			{list.map((task) => {
				return (
					<div className='todo-item' key={task.id}>
						<input
							type='checkbox'
							checked={task.completed}
							onChange={() => onChange(task.id)}
						/>
						<p
							style={
								task.completed
									? { textDecoration: "underline" }
									: null
							}>
							{task.text}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default TodoItem;
