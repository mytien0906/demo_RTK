import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Study Eng", completed: false, priority: "High" },
    { id: 2, name: "Gym exercise", completed: false, priority: "Medium" },
    { id: 3, name: "Play game", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});
export {todoSlice};

// const { actions, reducer } = todoSlice;

// const { addTodo } = actions;

// export { addTodo };

// export default reducer;
