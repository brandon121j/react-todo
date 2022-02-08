import React from 'react';

function CreateTodo() {
  return (
  <div id="createTodoContainer">
    <div className="submitTodoContainer">
        <input type='text' />
        <select></select>
        <input class="btn btn-outline-primary" type='submit' />
    </div>
  </div>
  );
}

export default CreateTodo;
