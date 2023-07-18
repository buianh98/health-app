import { FoodData, Pagination } from "../../types/type";

export type StateType = {
  foodList: FoodData[];
  pagination: Pagination;
};

export const initialState = (): StateType => ({
  foodList: [],
  pagination: {} as Pagination,
});
