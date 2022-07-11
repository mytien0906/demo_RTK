import { createSelector } from "@reduxjs/toolkit";
export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

export const todoSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList,searchText) => {
    return todoList.filter((todo) =>
        todo.name.toLowerCase().includes(searchText)
      );
  }
);

// export const todoListSelector = (state) => {
//   const newTodoList = state.todoList.filter((todo) =>
//     todo.name.toLowerCase().includes(state.filters.search)
//   );
//   return newTodoList;
// };
