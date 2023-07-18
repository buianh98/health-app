import { UserRecord, Pagination, UserRecordDetail } from "../../types/type";

export type StateType = {
  userRecordList: UserRecord[];
  userRecordDetail: UserRecordDetail[];
  pagination: Pagination;
};

export const initialState = (): StateType => ({
  userRecordList: [],
  userRecordDetail: [],
  pagination: {} as Pagination,
});
