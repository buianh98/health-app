import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { styled } from "styled-components";
import { myRecordTimeFilter } from "../../../../types/constants";
import MyRecordSessionHeader from "../../atoms/MyRecordSessionHeader";
import { useTranslation } from "react-i18next";
import MyRecordTimeTag from "../../atoms/MyRecordTimeTag";
import LineChart from "../../atoms/LineChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyRecordLineChart = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.drak500};
  padding: 16px 24px;

  .my-record-line-chart__filter {
    margin-top: 8px;
    display: flex;
    gap: 0 16px;
  }
`;

type MyRecordLineChartProps = {
  className?: string;
  time: string;
};

const MyRecordLineChartComponent: React.FC<MyRecordLineChartProps> = ({
  className = "",
  time,
}) => {
  const { t } = useTranslation();

  return (
    <MyRecordLineChart className={`my-record-line-chart ${className}`}>
      <MyRecordSessionHeader time={time} title={t("bodyRecord")} />
      <LineChart />
      <div className="my-record-line-chart__filter">
        {myRecordTimeFilter.map((item) => (
          <MyRecordTimeTag
            title={item}
            className={item === "年" ? "active" : ""}
          />
        ))}
      </div>
    </MyRecordLineChart>
  );
};

export default MyRecordLineChartComponent;
