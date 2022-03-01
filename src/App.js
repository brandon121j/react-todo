import CreateTodo from './components/CreateTodo';
import Nav from './components/Nav';
import ShowTodos from './components/ShowTodos';
import { TodoHooks } from './context/TodoContext';
// import Sidebar from './components/Sidebar'
import './App.css';

function App() {

	return (
		<div className="App">
			<TodoHooks>
				<Nav />
				<CreateTodo />
				<ShowTodos />
			</TodoHooks>
		</div>
	);
}

export default App;
