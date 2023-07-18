import { useTranslation } from "react-i18next";
import { styled } from "styled-components";
import { MyRecordData } from "../../../../types/type";
import MyRecordRowComponent from "../../atoms/MyRecordTableRow";
import MyRecordSessionHeader from "../../atoms/MyRecordSessionHeader";

const MyRecordTable = styled.div`
  background: ${(props) => props.theme.colors.drak500};
  padding: 16px 24px;
  width: 100%;

  .table {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px 40px;
    margin-top: 4px;
    max-height: 192px;
    overflow-y: auto;
    padding-right: 32px;

    &::-webkit-scrollbar {
      width: 6px;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${(props) => props.theme.colors.gray400};
      border-radius: 4px;
      cursor: pointer;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.primary300};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.primary300};
    }
  }
`;

type MyRecordTableProps = {
  time: string;
  myRecordData: MyRecordData[];
};

const MyRecordTableComponent: React.FC<MyRecordTableProps> = ({
  time,
  myRecordData,
}) => {
  const { t } = useTranslation();

  return (
    <MyRecordTable>
      <MyRecordSessionHeader time={time} title={t("myExcercise")} />
      <div className="table">
        {myRecordData.map((item, index) => (
          <MyRecordRowComponent key={index.toString()} myRecordData={item} />
        ))}
      </div>
    </MyRecordTable>
  );
};

export default MyRecordTableComponent;
