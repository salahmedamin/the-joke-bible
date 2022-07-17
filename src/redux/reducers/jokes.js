import { createSlice } from "@reduxjs/toolkit";

export const jokesSlice = createSlice({
  name: "jokes",
  initialState: [],
  reducers: {
    addSingleJoke(state, { payload }) {
      state.push(payload.joke);
    },
    addJokes(state, { payload }) {
      state = [...state, payload.jokes];
    },
    deleteJoke(state, { payload }) {
      state = state.filter((j) => j.id !== payload.id);
    },
  },
});
