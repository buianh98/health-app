import { cloneDeep } from "lodash";
import { StateType } from "../store/topPage/constants";
import { foodCards } from "../types/constants";
import { FoodData, PayloadType } from "../types/type";

const getFoodData = (
  payload: PayloadType
): { foodList: FoodData[]; totalItems: number } => {
  const foodCardList = cloneDeep(foodCards) as FoodData[];
  let filterData: FoodData[] = [];

  if (payload?.type) {
    filterData = foodCardList.filter((item) => item.type === payload.type);
  }

  const foodList = (
    payload?.type ? cloneDeep(filterData) : foodCardList
  ).splice(0, payload.currentPage * payload.perPage);

  return {
    foodList,
    totalItems: payload?.type ? filterData.length : foodCards.length,
  };
};

const fetchFoodData = (payload: PayloadType): Promise<StateType> =>
  new Promise((resolve, _) =>
    setTimeout(() => {
      const data = getFoodData(payload);

      return resolve({
        foodList: data.foodList,
        pagination: {
          currentPage: payload.currentPage,
          perPage: payload.perPage,
          totalPage: Math.ceil(data.totalItems / payload.perPage),
        },
      });
    }, 300)
  );

const servicer = {
  fetchFoodData,
};
export default servicer;
