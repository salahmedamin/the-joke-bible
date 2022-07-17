import { createSlice } from "@reduxjs/toolkit";

export const topJokesSlice = createSlice({
  name: "topJokes",
  initialState: [],
  reducers: {
    setTopJokes(state, { payload }) {
      return [...state, ...payload.jokes];
    },
  },
});
