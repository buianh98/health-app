import { cloneDeep } from "lodash";
import { StateType } from "../store/myRecord/constants";
import { calendarCards, userRecordDetails } from "../types/constants";
import { PayloadType, UserRecord, UserRecordDetail } from "../types/type";

const getUserRecord = (payload: PayloadType): UserRecord[] => {
  const filterData = cloneDeep(calendarCards) as UserRecord[];
  const data = filterData.splice(0, payload.currentPage * payload.perPage);

  return data;
};

const fetchUserRecordDetailData = (): Promise<UserRecordDetail[]> =>
  new Promise((resolve, _) =>
    setTimeout(() => resolve(userRecordDetails), 300)
  );

const fetchUserRecordData = (
  payload: PayloadType
): Promise<Pick<StateType, "userRecordList" | "pagination">> =>
  new Promise((resolve, _) =>
    setTimeout(() => {
      const userRecords = getUserRecord(payload);

      return resolve({
        userRecordList: userRecords,
        pagination: {
          currentPage: payload.currentPage,
          perPage: payload.perPage,
          totalPage: Math.floor(calendarCards.length / payload.perPage),
        },
      });
    }, 300)
  );

const servicer = {
  fetchUserRecordData,
  fetchUserRecordDetailData,
};
export default servicer;
