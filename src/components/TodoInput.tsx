import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/todoSlice";

export const TodoInput: FunctionComponent = () => {
  const [todoName, setTodoName] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setTodoName(value);
  };

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Math.random().toString().slice(2, 11),
        name: todoName,
        done: false,
      })
    );
    setTodoName("");
  };

  return (
    <div style={{ display: "flex" }}>
      <input value={todoName} onChange={handleChange} />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};
