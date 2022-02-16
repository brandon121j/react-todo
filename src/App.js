import CreateTodo from './components/CreateTodo';
import Nav from './components/Nav';
import ShowTodos from './components/ShowTodos';
// import Sidebar from './components/Sidebar'
import { useReducer, useState } from 'react';
import './App.css';


function App() {
  
  const todoReducer = (state, action) => {
    switch(action.type) {
      case 'high':
        return state.push(action);
      case 'medium': 
        return state.push(action);
      case 'low':
        return state.push(action)
      default: 
        return state
    }
  }

  const [state, dispatch] = useReducer(todoReducer, []);

  


  return (
    <div className="App">
      <Nav />
      <CreateTodo />
      <ShowTodos />
    </div>
  );
}

export default App;
