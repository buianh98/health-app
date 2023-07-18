/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

import MyRecordTable from "../../components/molecules/MyRecordTable";
import { formatCalendarCardTime } from "../../../utils/format/timeFormat";
import { DEFAULT_PER_PAGE, myRecordCards } from "../../../types/constants";
import ColumnRecommendCard from "./../../components/molecules/MyRecordCard";
import CalendarCard from "../../components/molecules/CalendarCard";
import ButtonComponent from "../../components/atoms/Button";
import MyRecordLineChart from "../../components/molecules/MyRecordLineChart";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
  userRecordListSelector,
  paginationSelector,
  userRecordDetailListSelector,
} from "../../../store/myRecord/selectors";
import { PayloadType } from "../../../types/type";
import { resetData } from "../../../store/myRecord/slice";
import { useEffect } from "react";
import {
  fetchUserRecordData,
  fetchUserRecordDetailData,
} from "../../../store/myRecord/thunks";

const MyRecord = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .my-record-gird {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px 48px;
  }

  .calendar {
    &__title {
      color: ${(props) => props.theme.colors.drak500};
      font-size: 22px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0.11px;
      margin-bottom: 0;
    }

    &__card-gird {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 12px;
    }
  }

  .group-button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

const MyRecordPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const userRecordList = useAppSelector(userRecordListSelector);
  const pagination = useAppSelector(paginationSelector);
  const useRecordDetailList = useAppSelector(userRecordDetailListSelector);
  const newUseRecordDetailList = useRecordDetailList.map((item) => ({
    title: item.title,
    description: t("kcal", { kcal: item.kcal }),
    time: t("minutes", {
      time: item.time.getMinutes().toString(),
    }),
  }));

  const getUserRecord = (data?: PayloadType) => {
    const payload = {
      currentPage: data?.currentPage || 1,
      perPage: data?.perPage || DEFAULT_PER_PAGE,
    };

    dispatch(fetchUserRecordData(payload));
  };

  const getUserRecordDetail = () => dispatch(fetchUserRecordDetailData());

  useEffect(() => {
    getUserRecord();
    getUserRecordDetail();

    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <MyRecord>
      <div className="container">
        <section className="section">
          <div className="my-record-gird">
            {myRecordCards.map((item, index) => (
              <ColumnRecommendCard
                key={index.toString()}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <MyRecordLineChart
            time={formatCalendarCardTime(new Date()).dateData}
          />
        </section>

        <section className="section">
          <MyRecordTable
            time={formatCalendarCardTime(new Date()).dateData}
            myRecordData={newUseRecordDetailList}
          />
        </section>

        <section className="section">
          <div className="calendar__title">{t("myDiary")}</div>
          <div className="calendar__card-gird">
            {userRecordList.map((item, index) => (
              <CalendarCard
                key={index.toString()}
                title={item.title}
                time={t("calendarCardTime", {
                  dateData: formatCalendarCardTime(item.time).dateData,
                  hoursData: formatCalendarCardTime(item.time).hoursData,
                })}
                description={item.description}
              />
            ))}
          </div>

          {pagination.currentPage < pagination.totalPage && (
            <div className="group-button">
              <ButtonComponent
                onClick={() =>
                  getUserRecord({
                    currentPage: pagination.currentPage + 1,
                    perPage: DEFAULT_PER_PAGE,
                  })
                }
                buttonContent={t("readMore")}
              />
            </div>
          )}
        </section>
      </div>
    </MyRecord>
  );
};

export default MyRecordPage;
