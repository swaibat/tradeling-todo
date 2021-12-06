import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { TodoTile } from "./TodoTile";

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todosList.todos);
  return (
    <ul style={{ paddingLeft: 0 }}>
      {todos?.length
        ? todos.map((todo) => <TodoTile key={todo.id} todo={todo} />)
        : "no todos"}
    </ul>
  );
};
