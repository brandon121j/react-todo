import { useReducer, useEffect } from 'react';

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
                        ...state, lowPriority: action.payload
                    }
			case 'med':
				return {
                    ...state, medPriority: action.payload
                }
			case 'high':
				return {
                    ...state, highPriority: action.payload
                }
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(todoReducer, todoPriority);

    const { lowPriority: low, medPriority: med, highPriority: high } = state;

    let allTodos = [...high, ...med, ...low];

    // useEffect(() => {
    //     console.log('allTodos: ', allTodos)
    // }, [allTodos])

	return [state, dispatch, allTodos];
};

export default TodoHooks;
