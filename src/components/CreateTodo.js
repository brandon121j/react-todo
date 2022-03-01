import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function CreateTodo() {
	const {dispatch} = useContext(TodoContext)

	const onSubmitHandler = (e) => {
		e.preventDefault();
		let priority = e.target[1].value;
		let todo = e.target[0].value;

		// todo.length === 0 || priority === false ? 
		dispatch({ type: priority, payload: todo });
	}


	return (
		<div id="createTodoContainer">
			<form id="createTodoForm" onSubmit={(e) => onSubmitHandler(e)}>
				<input
					type="text"
					placeholder="Input Todo"
					className="createTodoInput"
				/>
				<select
					className="createTodoInput"
				>
					<option value="high">High Priority</option>
					<option value="med">Medium Priority</option>
					<option value="low">Low Priority</option>
				</select>
				<button
					className="btn btn-outline-primary createTodoInput"
					type="submit"
				>
					Create Todo
				</button>
			</form>
		</div>
	);
}

export default CreateTodo;
