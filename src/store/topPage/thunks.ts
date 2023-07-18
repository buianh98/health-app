import { createAsyncThunk } from "@reduxjs/toolkit";
import servicer from "./../../services/topPage";
import { PayloadType } from "../../types/type";

export const fetchFoodData = createAsyncThunk(
  "topPage/fetchFoodData",
  async (payload: PayloadType, thunkAPI) => {
    try {
      const data = await servicer.fetchFoodData(payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({});
    }
  }
);
