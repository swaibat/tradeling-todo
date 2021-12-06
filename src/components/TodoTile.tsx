import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, Todo, completeTodo } from "../app/todoSlice";

export const TodoTile = (props: { todo: Todo }) => {
  const dispatch = useDispatch();
  const { name, id, done } = props.todo;

  return (
    <li id={id} className="todo-item" key={id}>
      <span className="todo-name" onClick={() => dispatch(completeTodo(id))}>
        {name}
      </span>
      <span>
        {done && <button className="done">&#x2713;</button>}
        <button onClick={() => dispatch(removeTodo(id))}>x</button>
      </span>
    </li>
  );
};
