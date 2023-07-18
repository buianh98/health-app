import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { fetchUserColumnData } from "./thunks";
import { StateType } from "./constants";

const extraReducers = (builder: ActionReducerMapBuilder<StateType>): void => {
  builder
    .addCase(fetchUserColumnData.pending, (_state: StateType) => {
      // handle loading
    })
    .addCase(fetchUserColumnData.fulfilled, (state: StateType, action) => {
      state.userColumnList = action.payload.userColumnList;
      state.pagination = action.payload.pagination;
    })
    .addCase(fetchUserColumnData.rejected, (_state: StateType) => {
      // handle loading
    });
};

export default extraReducers;
