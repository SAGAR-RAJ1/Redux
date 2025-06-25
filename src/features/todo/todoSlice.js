//reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //action state
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todo.push(newTodo);
    },
    deleteTodo: (state, action) => {
      // action.payload
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    marksAsDone: (state, action) => {
      //action.payload
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

export const { addTodo ,deleteTodo ,marksAsDone}=todoSlice.actions;
export default todoSlice.reducer ;