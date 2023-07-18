import { createSelector } from "@reduxjs/toolkit";

import { StateType } from "./constants";
import { RootState } from "..";

const appSelector = (state: RootState): StateType => state.myRecord;

export const userRecordListSelector = createSelector(
  [appSelector],
  (state) => state.userRecordList
);

export const userRecordDetailListSelector = createSelector(
  [appSelector],
  (state) => state.userRecordDetail
);

export const paginationSelector = createSelector(
  [appSelector],
  (state) => state.pagination
);
