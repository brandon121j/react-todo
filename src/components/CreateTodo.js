import React from 'react';

function CreateTodo() {
	return (
		<div id="createTodoContainer">
			<form id="createTodoForm">
				<input
					type="text"
					placeholder="Input Todo"
					className="createTodoInput"
				/>
				<select
					className="createTodoInput"
					onChange={(e) => console.log(e.target.value)}
					defaultValue={null}
				>
					<option value={null}>Priority Level</option>
					<option value="high">High</option>
					<option value="medium">Medium</option>
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
