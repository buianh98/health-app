/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

import ButtonComponent from "../../components/atoms/Button";
import FoodCagegoryCard from "../../components/molecules/FoodCagegoryCard";
import HexagonMenu from "../../components/molecules/HexagonMenu";
import { filterTypeList, DEFAULT_PER_PAGE } from "../../../types/constants";
import Banner from "./../../assets/images/d01.jpg";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchFoodData } from "../../../store/topPage/thunks";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  foodListSelector,
  paginationSelector,
} from "../../../store/topPage/selectors";
import { resetData } from "../../../store/topPage/slice";
import { PayloadType } from "../../../types/type";
import LineChart from "../../components/atoms/LineChart";

const Top = styled.div`
  width: 100%;
  height: 100%;

  .section.section--custom:first-child {
    padding-top: 24px;
    padding-bottom: 0;
  }

  .top-page-header {
    display: flex;

    &__avatar {
      width: 40%;
      background-size: cover !important;
    }

    &__chart {
      flex: 1;
    }
  }

  .food-gird {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .hexagon-menu-gird {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .food-gird {
    grid-gap: 8px;
  }

  .group-button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .line-chart-container {
    padding: 12px 53px;
    background: ${(props) => props.theme.colors.drak600};
  }
`;

const TopPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const foodList = useAppSelector(foodListSelector);
  const pagination = useAppSelector(paginationSelector);
  const [type, setType] = useState<string>("");

  const getFoodData = (data?: PayloadType) => {
    const payload = {
      currentPage: data?.currentPage || 1,
      perPage: data?.perPage || DEFAULT_PER_PAGE,
      type: data?.type || "",
    };

    if (type !== (data?.type || "")) {
      setType(data?.type || "");
    }

    dispatch(fetchFoodData(payload));
  };

  useEffect(() => {
    getFoodData();

    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <Top>
      <div className="top-page-header">
        <div
          className="top-page-header__avatar"
          style={{
            background: `url(${Banner}) center center no-repeat`,
            backgroundImage: Banner,
          }}
        />
        <div className="top-page-header__chart">
          <LineChart className="line-chart-container" />
        </div>
      </div>

      <div className="container">
        <section className="section section--custom">
          <div className="hexagon-menu-gird">
            {filterTypeList.map((item, index) => (
              <HexagonMenu
                key={index.toString()}
                hexagonContent={item.title}
                icon={item.icon}
                onClick={() =>
                  getFoodData({
                    currentPage: 1,
                    perPage: DEFAULT_PER_PAGE,
                    type: item.type,
                  })
                }
              />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="food-gird">
            {foodList.map((item, index) => (
              <FoodCagegoryCard
                key={index.toString()}
                hexagonContent={item.title}
                image={item.image}
              />
            ))}
          </div>
          {pagination.currentPage < pagination.totalPage && (
            <div className="group-button">
              <ButtonComponent
                onClick={() =>
                  getFoodData({
                    currentPage: pagination.currentPage + 1,
                    perPage: DEFAULT_PER_PAGE,
                    type,
                  })
                }
                buttonContent={t("readMore")}
              />
            </div>
          )}
        </section>
      </div>
    </Top>
  );
};

export default TopPage;
