import { useReducer } from 'react';

function TodoHooks() {
	let todoPriority = {
		lowPriority: [],
		medPriority: [],
		highPriority: []
	};


	function todoReducer(state, action) {
		switch (action.type) {
            case 'low': 
                    return {
                        ...state, lowPriority: [...state.lowPriority, action.payload]
                    }
			case 'med':
				return {
                    ...state, medPriority: [...state.medPriority, action.payload]
                }
			case 'high':
				return {
                    ...state, highPriority: [...state.highPriority, action.payload]
                }
			default:
				return state;
		}
	};

	const [todos, dispatch] = useReducer(todoReducer, todoPriority);

	return [todos, dispatch];
};

export default TodoHooks;
