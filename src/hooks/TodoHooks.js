import { useReducer, useEffect } from 'react';

function TodoHooks() {
	const todoPriority = {
		low: [],
		med: [],
		high: [],
	};

	const { low, med, high } = todoPriority;

	const todoReducer = (state, action) => {
		switch (state.type) {
			case 'low':
				return console.log('Working!!!!');
			case 'med':
				return console.log('MEDIUM');
			case 'high':
				return console.log('HIGH');
			// return {
			//     ...state,
			//     low: [...state.low, action.payload],
			// }
			default:
				return console.log('default');
		}
	};

	const [state, dispatch] = useReducer(todoReducer, todoPriority);

	useEffect(() => {
		  console.log('!!!!!!!!')
	}, [state]);

	let allTodos = [...high, ...med, ...low];

	return [state, dispatch, allTodos];
};

export default TodoHooks;
