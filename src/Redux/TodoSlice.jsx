import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all", 
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) task.description = action.payload.newDescription;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
