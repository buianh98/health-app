import { createSelector } from "@reduxjs/toolkit";

import { StateType } from "./constants";
import { RootState } from "..";

const appSelector = (state: RootState): StateType => state.column;

export const userColumnListSelector = createSelector(
  [appSelector],
  (state) => state.userColumnList
);

export const paginationSelector = createSelector(
  [appSelector],
  (state) => state.pagination
);
