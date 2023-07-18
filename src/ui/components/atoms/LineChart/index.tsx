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
import { Line } from "react-chartjs-2";
import { styled } from "styled-components";
import { getMonthData } from "../../../../utils/format/timeFormat";
import { chartOptions } from "../../../../types/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = styled.div`
  width: 100%;
`;

const labels = getMonthData();

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [100, 200, 500, 300, 800, 1000, 1001, 100, 200, 500, 300, 800, 200],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      label: "",
      data: [400, 200, 500, 300, 600, 1000, 901, 400, 200, 500, 300, 600, 1000],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};
type LineChartProps = {
  className?: string;
};

const LineChart: React.FC<LineChartProps> = ({ className = "" }) => {
  return (
    <ChartComponent className={className}>
      <Line options={chartOptions} data={data} />
    </ChartComponent>
  );
};

export default LineChart;
