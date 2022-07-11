// const initState = {
//   filters: {
//     search: "",
//     status: "All",
//     priority: [],
//   },
//   todoList: [
//     { id: 1, name: "Study Eng", completed: false, priority: "High" },
//     { id: 2, name: "Gym exercise", completed: false, priority: "Medium" },
//     { id: 3, name: "Play game", completed: false, priority: "Low" },
//   ],
// };
// const rootReducer = (state = initState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [
//           ...state.todoList,
//           action.payload
//         ],
//       };
//       case "filter/searchFilterChange":
//         return{
//           ...state,
//           filters:{
//             ...state.filters,
//             search: action.payload
//           }
//         }
//     default:
//       return state;
//   }
// };
// export { rootReducer };
import { filterSlice } from "./filterSlice";
import { todoSlice } from "./todoSlice";
const rootReducer = {
  hihi: filterSlice.reducer,
  todoList: todoSlice.reducer,
};
export { rootReducer };
