import { styled } from "styled-components";
import Typography from "../Typography";
import theme from "../../../../utils/styles/theme";

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
    white-space: pre-wrap;
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
      <Typography
        fontSize="15px"
        lineHeight="18px"
        fontWeight={400}
        letterSpacing="0.15px"
        className="title font-inter"
        color={theme.colors.white}
      >
        {title}
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="27px"
        fontWeight={400}
        letterSpacing="0.11px"
        className="title font-inter"
        color={theme.colors.white}
      >
        {time}
      </Typography>
    </MyRecordSessionHeader>
  );
};

export default MyRecordSessionHeaderComponent;
