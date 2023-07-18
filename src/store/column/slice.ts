import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./constants";
import reducers from "./reducers";
import extraReducers from "./extraReducers";

const slice = createSlice({
  name: "column",
  initialState: initialState(),
  reducers,
  extraReducers,
});

export const { resetData } = slice.actions;

export default slice.reducer;
