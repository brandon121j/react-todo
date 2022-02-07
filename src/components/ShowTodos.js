import React from 'react';

function ShowTodos(todos) {
	const todoShower = (todo) => {
		for (let i = 0; i < todo.length; i++) {
			return <div>{todo[i]}</div>;
		}
	};
	return <div></div>;
}

export default ShowTodos;
