import { styled } from "styled-components";
import { MyRecordData } from "../../../../types/type";

const MyRecordRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray400};

  .time,
  .description,
  .title {
    margin-bottom: 0;
  }

  .title {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.075px;
    color: ${(props) => props.theme.colors.white};
  }

  .description {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.075px;
    color: ${(props) => props.theme.colors.primary300};
  }

  .time {
    color: ${(props) => props.theme.colors.primary300};
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.09px;
  }
`;

type MyRecordRowProps = {
  myRecordData: MyRecordData;
};

const MyRecordRowComponent: React.FC<MyRecordRowProps> = ({ myRecordData }) => {
  return (
    <MyRecordRow>
      <div>
        <h4 className="title">{myRecordData.title}</h4>
        <p className="description">{myRecordData.description}</p>
      </div>
      <h4 className="time">{myRecordData.time}</h4>
    </MyRecordRow>
  );
};

export default MyRecordRowComponent;
