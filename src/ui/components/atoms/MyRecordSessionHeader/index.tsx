import { styled } from "styled-components";

const MyRecordSessionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
  color: white;

  .title,
  .time {
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.white};
  }

  .title {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.15px;
    white-space: pre-wrap;
  }

  .time {
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.11px;
  }
`;

type MyRecordSessionHeaderProps = {
  title: string;
  time: string;
};

const MyRecordSessionHeaderComponent: React.FC<MyRecordSessionHeaderProps> = ({
  time,
  title,
}) => {
  return (
    <MyRecordSessionHeader>
      <h4 className="title font-inter">{title}</h4>
      <h4 className="time font-inter">{time}</h4>
    </MyRecordSessionHeader>
  );
};

export default MyRecordSessionHeaderComponent;
