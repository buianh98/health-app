import { UserColumn, Pagination } from "../../types/type";

export type StateType = {
  userColumnList: UserColumn[];
  pagination: Pagination;
};

export const initialState = (): StateType => ({
  userColumnList: [],
  pagination: {} as Pagination,
});
