import { cloneDeep } from "lodash";
import { PayloadType, UserColumn } from "../types/type";
import { userColumnCards } from "../types/constants";
import { StateType } from "../store/column/constants";

const getUserColumnData = (payload: PayloadType): UserColumn[] => {
  const filterData = cloneDeep(userColumnCards) as UserColumn[];
  const data = filterData.splice(0, payload.currentPage * payload.perPage);

  return data;
};

const fetchUserColumnData = (payload: PayloadType): Promise<StateType> =>
  new Promise((resolve, _) =>
    setTimeout(() => {
      const userColumns = getUserColumnData(payload);

      return resolve({
        userColumnList: userColumns,
        pagination: {
          currentPage: payload.currentPage,
          perPage: payload.perPage,
          totalPage: Math.floor(userColumnCards.length / payload.perPage),
        },
      });
    }, 300)
  );

const servicer = {
  fetchUserColumnData,
};
export default servicer;
