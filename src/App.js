import CreateTodo from './components/CreateTodo';
import Nav from './components/Nav';
import ShowTodos from './components/ShowTodos';
// import Sidebar from './components/Sidebar'
import { useState } from 'react';
import './App.css';


function App() {


  return (
    <div className="App">
      <Nav />
      <CreateTodo />
      <ShowTodos />
    </div>
  );
}

export default App;
