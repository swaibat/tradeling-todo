import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}

export interface GlobalState {
  todos: Todo[];
}

const initialState: GlobalState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state: GlobalState, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state: GlobalState, { payload }) => {
      state.todos = [...state.todos.filter((todo) => todo.id !== payload)];
    },
    completeTodo: (state: GlobalState, { payload }) => {
      state.todos = [
        ...state.todos.filter((todo) => {
          if (todo.id === payload) {
            todo.done = true;
          }
          return todo;
        }),
      ];
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
