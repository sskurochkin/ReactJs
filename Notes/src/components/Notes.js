import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export function Notes({ notes, onRemove }) {
	return (
		<TransitionGroup component="ul" className='list-group' timeout={700}>
			{notes.map((note) => (
				<CSSTransition
				key={note.id}
				classNames={'note'}
				timeout={700}
				><li className='list-group-item note'>
					<div>
						<strong>{note.title}</strong>
						<small>{note.date}</small>
					</div>

					<button
						type='button'
						className='btn btn-outline-danger btn-sm'
						onClick={()=> onRemove(note.id)}>
						&times;
					</button>
				</li>
				</CSSTransition>
			))}
		</TransitionGroup>
		
	);
}

export default Notes;
