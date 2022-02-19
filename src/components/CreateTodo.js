import React from 'react';

function CreateTodo({dispatch}) {
    
	const onSubmitHandler = (e) => {
		e.preventDefault();
		let priority = e.target[1].value;
		let todo = e.target[0].value;
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
