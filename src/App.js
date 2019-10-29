import React from 'react';
import TodoInput  from './components/Todoinput';
import TodoList  from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'uuid';

function App() {
  return (
   <div className="container">
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
      <h3 className="text-capitalize text-center"></h3>
        <TodoInput />
        <TodoList />
      </div>
    </div>
    </div>
    
  );
}

export default App;
