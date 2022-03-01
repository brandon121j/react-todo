import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function ShowTodos() {
	const {todos} = useContext(TodoContext)
	const { lowPriority: low, medPriority: med, highPriority: high } = todos;

	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<div className="card body">
					<ul className='todoUl'>
						{high.map((todo, index) => {
							return <li className="highPriority" key={index}>{todo}</li>;
						})}
						{med.map((todo, index) => {
							return <li className="medPriority" key={index}>{todo}</li>;
						})}
						{low.map((todo, index) => {
							return <li className="lowPriority" key={index}>{todo}</li>;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ShowTodos;
// max char length 55
