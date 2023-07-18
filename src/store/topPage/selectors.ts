import { createSelector } from "@reduxjs/toolkit";

import { StateType } from "./constants";
import { RootState } from "..";

const appSelector = (state: RootState): StateType => state.topPage;

export const foodListSelector = createSelector(
  [appSelector],
  (state) => state.foodList
);

export const paginationSelector = createSelector(
  [appSelector],
  (state) => state.pagination
);
