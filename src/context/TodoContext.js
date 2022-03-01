import React, { useReducer } from 'react';

export const TodoContext = React.createContext();

export const TodoHooks = (props) => {
    const { children } = props;

	let todoPriority = {
		lowPriority: [],
		medPriority: [],
		highPriority: []
	};


	const todoReducer = (state, action) => {
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

	return (
        <TodoContext.Provider
            value={{todos, dispatch}}
        >
            {children}
        </TodoContext.Provider>
    )
};

