import { createAsyncThunk } from "@reduxjs/toolkit";
import servicer from "../../services/column";
import { PayloadType } from "../../types/type";

export const fetchUserColumnData = createAsyncThunk(
  "collumn/fetchUserColumnData",
  async (payload: PayloadType, thunkAPI) => {
    try {
      const data = await servicer.fetchUserColumnData(payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({});
    }
  }
);
