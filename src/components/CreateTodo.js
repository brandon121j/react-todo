import React from 'react';
import TodoHooks from '../hooks/TodoHooks';

function CreateTodo() {
	const [state, dispatch, allTodos] = TodoHooks();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		let selectValue = e.target[1].value;
		let todo = e.target[0].value;
		dispatch({ type: selectValue, payload: [...state.lowPriority, todo] });
		// console.log(allTodos)
		// console.log(selectValue);
		// console.log(allTodos);
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
