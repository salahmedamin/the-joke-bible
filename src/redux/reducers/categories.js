import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    setCats(state, { payload }) {
      return [...state, ...payload.cats];
    },
  },
});
