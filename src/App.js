import CreateTodo from './components/CreateTodo';
import Nav from './components/Nav';
import ShowTodos from './components/ShowTodos';
import TodoHooks from './hooks/TodoHooks';
// import Sidebar from './components/Sidebar'
import './App.css';


function App() {
  const [todos, dispatch, low, med, high] = TodoHooks();



  return (
    <div className="App">
      <Nav />
      <CreateTodo dispatch={dispatch}/>
      <ShowTodos />
    </div>
  );
}

export default App;
