import React from 'react';
import './App.css';
import ToDoList from "./To-do-list/to-do-list";

function App() {
  return (
    <div className="app">
      <h1 className="app-heading">
        To-Do App
      </h1>
      <ToDoList/>
    </div>
  );
}

export default App;
