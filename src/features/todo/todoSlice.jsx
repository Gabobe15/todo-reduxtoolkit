import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    editTodos: null
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.editTodos = action.payload;
    },
    updateTodo: (state, action) => {
      let updateTodo = state.todos.filter((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
      state.todos = updateTodo;
      state.editTodos = null;
    },
  },
});

export const {addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer