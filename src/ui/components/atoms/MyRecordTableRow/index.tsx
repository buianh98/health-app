import { styled } from "styled-components";
import { MyRecordData } from "../../../../types/type";
import Typography from "../Typography";
import theme from "../../../../utils/styles/theme";

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
`;

type MyRecordRowProps = {
  myRecordData: MyRecordData;
};

const MyRecordRowComponent: React.FC<MyRecordRowProps> = ({ myRecordData }) => {
  return (
    <MyRecordRow>
      <div>
        <Typography
          fontSize="15px"
          lineHeight="22px"
          fontWeight={400}
          letterSpacing="0.075px"
          component="h4"
          color={theme.colors.white}
          className="title"
        >
          {myRecordData.title}
        </Typography>
        <Typography
          fontSize="15px"
          lineHeight="18px"
          fontWeight={400}
          letterSpacing="0.075px"
          component="p"
          color={theme.colors.primary300}
          className="description"
        >
          {myRecordData.description}
        </Typography>
        {/* <h4 className="title">{myRecordData.title}</h4> */}
      </div>
      <Typography
        fontSize="18px"
        lineHeight="22px"
        fontWeight={400}
        letterSpacing="0.09px"
        component="h4"
        color={theme.colors.primary300}
        className="time"
      >
        {myRecordData.time}
      </Typography>
    </MyRecordRow>
  );
};

export default MyRecordRowComponent;
