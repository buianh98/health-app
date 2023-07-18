import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { StateType } from "./constants";
import { fetchUserRecordData, fetchUserRecordDetailData } from "./thunks";

const extraReducers = (builder: ActionReducerMapBuilder<StateType>): void => {
  builder
    .addCase(fetchUserRecordDetailData.pending, (_state: StateType) => {
      // handle loading
    })
    .addCase(
      fetchUserRecordDetailData.fulfilled,
      (state: StateType, action) => {
        state.userRecordDetail = action.payload;
      }
    )
    .addCase(fetchUserRecordDetailData.rejected, (_state: StateType) => {
      // handle loading
    })

    .addCase(fetchUserRecordData.pending, (_state: StateType) => {
      // handle loading
    })
    .addCase(fetchUserRecordData.fulfilled, (state: StateType, action) => {
      state.userRecordList = action.payload.userRecordList;
      state.pagination = action.payload.pagination;
    })
    .addCase(fetchUserRecordData.rejected, (_state: StateType) => {
      // handle loading
    });
};

export default extraReducers;
