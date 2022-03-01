import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function ShowTodos() {
	const {todos} = useContext(TodoContext)
	const { lowPriority: low, medPriority: med, highPriority: high } = todos;

	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<div className="card body">
					<ul className='todoUL'>
						{high.map((todo) => {
							return <li className="highPriority">{todo}</li>;
						})}
						<h1>{low}</h1>
						{med.map((todo) => {
							return <li className="medPriority">{todo}</li>;
						})}
						{low.map((todo) => {
							return <li className="lowPriority">{todo}</li>;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ShowTodos;
// max char length 55
