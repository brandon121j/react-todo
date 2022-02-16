import React, { useState } from 'react';
import TodoHooks from '../hooks/TodoHooks';

function CreateTodo() {
	const [todo, setTodo] = useState("");
	const [state, dispatch, allTodos] = TodoHooks();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const selectValue = (`'${e.target[1].value}'`);
		dispatch({ type: selectValue });
		console.log(selectValue);
		// console.log(allTodos);
	}

	return (
		<div id="createTodoContainer">
			<form id="createTodoForm" onSubmit={(e) => onSubmitHandler(e)}>
				<input
					type="text"
					placeholder="Input Todo"
					className="createTodoInput"
					onChange={(e) => setTodo(e.target.value)}
				/>
				<select
					className="createTodoInput"
					// onChange={(e) => console.log(e.target.value)}
					defaultValue={null}
				>
					<option>Priority Level</option>
					<option value="high">High</option>
					<option value="med">Medium</option>
					<option value="low">Low</option>
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
