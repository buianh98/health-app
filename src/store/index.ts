import { configureStore } from "@reduxjs/toolkit";
import topPageReducer from "./topPage/slice";
import myRecordReducer from "./myRecord/slice";
import columnReducer from "./column/slice";

export const store = configureStore({
  reducer: {
    topPage: topPageReducer,
    myRecord: myRecordReducer,
    column: columnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
