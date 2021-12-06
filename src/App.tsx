import React from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>todo app</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
