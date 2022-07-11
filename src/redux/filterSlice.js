import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "hihi",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
  },
});
// export const {searchFilterChange} = filterSlice.actions;
export {filterSlice};
