import { createAsyncThunk } from "@reduxjs/toolkit";
import servicer from "../../services/myRecord";
import { PayloadType } from "../../types/type";

export const fetchUserRecordData = createAsyncThunk(
  "myRecord/fetchUserRecordData",
  async (payload: PayloadType, thunkAPI) => {
    try {
      const data = await servicer.fetchUserRecordData(payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({});
    }
  }
);

export const fetchUserRecordDetailData = createAsyncThunk(
  "myRecord/fetchUserRecordDetailData",
  async (_, thunkAPI) => {
    try {
      const data = await servicer.fetchUserRecordDetailData();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({});
    }
  }
);
