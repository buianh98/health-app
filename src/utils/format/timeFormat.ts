import { monthDatas } from "../../types/constants";

export const formatCalendarCardTime = (time: Date) => {
  const stringTime = time.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  });
  const dateData = stringTime.split(" ")[0].replace(/[/]/g, ".");
  const hoursData = stringTime.split(" ")[1];

  return { dateData, hoursData };
};

export const getMonthData = () => {
  const newMonthDatas = [...monthDatas];
  const totalMonthOfCurrentYear = newMonthDatas.splice(
    0,
    new Date().getMonth() + 1
  );

  return [...newMonthDatas, ...totalMonthOfCurrentYear];
};
