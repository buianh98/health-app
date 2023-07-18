import { StateType } from "./constants";
import { Pagination } from "../../types/type";

const reducer = {
  resetData(state: StateType): void {
    state.foodList = [];
    state.pagination = {} as Pagination;
  },
};

export default reducer;
