import { combineReducers } from "@reduxjs/toolkit";
import { categoriesSlice } from "redux/reducers/categories";
import { jokesSlice } from "redux/reducers/jokes";
import { topJokesSlice } from "redux/reducers/topJokes";
export const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
  jokes: jokesSlice.reducer,
  topJokes: topJokesSlice.reducer,
});
