import React, {useState} from 'react';

const TodoHooks = () => {
	const [low, setLow] = useState([]);
	const [med, setMed] = useState([]);
	const [high, setHigh] = useState([]);
	let allTodos = [...high, ...med, ...low];

	return [setLow, setMed, setHigh, allTodos];
};

export default TodoHooks;
