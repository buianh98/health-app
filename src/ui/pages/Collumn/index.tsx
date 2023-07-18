/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components";
import { useEffect } from "react";

import {
  DEFAULT_PER_PAGE,
  columnRecommendCards,
} from "../../../types/constants";
import ColumnRecommendCard from "../../components/molecules/ColumnRecommendCard";
import ColumnThumnailCard from "../../components/molecules/ColumnThumnailCard";
import Breakfast from "./../../assets/images/d02.jpg";
import { formatCalendarCardTime } from "../../../utils/format/timeFormat";
import ButtonComponent from "../../components/atoms/Button";
import { useTranslation } from "react-i18next";
import { resetData } from "../../../store/column/slice";
import { fetchUserColumnData } from "../../../store/column/thunks";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  userColumnListSelector,
  paginationSelector,
} from "../../../store/column/selectors";
import { PayloadType } from "../../../types/type";

const Column = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .gird {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    &.recommend-card-gird {
      grid-gap: 16px 32px;
    }

    &.thumnail-card {
      grid-gap: 18px 8px;
    }
  }

  .group-button {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
`;

const CollumnPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const userRecordList = useAppSelector(userColumnListSelector);
  const pagination = useAppSelector(paginationSelector);

  const getUserColumn = (data?: PayloadType) => {
    const payload = {
      currentPage: data?.currentPage || 1,
      perPage: data?.perPage || DEFAULT_PER_PAGE,
    };

    dispatch(fetchUserColumnData(payload));
  };

  useEffect(() => {
    getUserColumn();

    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <Column>
      <div className="container">
        <section className="section recommend-section">
          <div className="gird recommend-card-gird">
            {columnRecommendCards.map((item, index) => (
              <ColumnRecommendCard
                key={index.toString()}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="gird recommend-card-gird">
            {userRecordList.map((item, index) => (
              <ColumnThumnailCard
                title={item.title}
                dateTime={formatCalendarCardTime(item.time).dateData}
                hoursTime={formatCalendarCardTime(item.time).hoursData}
                image={Breakfast}
                tags={item.tags}
              />
            ))}
          </div>

          {pagination.currentPage < pagination.totalPage && (
            <div className="group-button">
              <ButtonComponent
                onClick={() =>
                  getUserColumn({
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
    </Column>
  );
};

export default CollumnPage;
