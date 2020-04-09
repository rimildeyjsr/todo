import React from 'react';
import './App.css';
import AddItem from './Add-item/add-item';
import ToDoList from "./To-do-list/to-do-list";

function App() {
  return (
    <div className="app">
      <h1 className="app-heading">
        To-Do App
      </h1>

      <AddItem/>

      <ToDoList/>
    </div>
  );
}

export default App;
