import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { fetchFoodData } from "./thunks";
import { StateType } from "./constants";

const extraReducers = (builder: ActionReducerMapBuilder<StateType>): void => {
  builder
    .addCase(fetchFoodData.pending, (_state: StateType) => {
      // handle loading
    })
    .addCase(fetchFoodData.fulfilled, (state: StateType, action) => {
      state.foodList = action.payload.foodList;
      state.pagination = action.payload.pagination;
    })
    .addCase(fetchFoodData.rejected, (_state: StateType) => {
      // handle loading
    });
};

export default extraReducers;
