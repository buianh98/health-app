import { styled } from "styled-components";
import theme from "../../../../utils/styles/theme";
import Typography from "../../atoms/Typography";

const CalendarCard = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 16px;
  padding-bottom: 24px;
  border: 2px solid #707070;

  .content {
    width: 100%;
    height: 100%;
  }

  .time-text {
    margin-bottom: 8px;
    white-space: pre-wrap;
  }

  .description,
  .text {
    margin-bottom: 0;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

type CalendarCardProps = {
  time: string;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
};

const CalendarCardComponent: React.FC<CalendarCardProps> = ({
  title,
  description,
  time,
  className = "",
  onClick = () => null,
}) => {
  return (
    <CalendarCard className={className} onClick={onClick}>
      <div className="content">
        <div className="content-box">
          <Typography
            fontSize="18px"
            lineHeight="22px"
            fontWeight={400}
            letterSpacing="0.09px"
            component="h4"
            color={theme.colors.drak500}
            className="time-text font-inter"
          >
            {time}
          </Typography>
          <Typography
            fontSize="12px"
            lineHeight="17px"
            letterSpacing="0.06px"
            component="p"
            color={theme.colors.drak500}
            className="text"
          >
            {title}
          </Typography>
          <Typography
            fontSize="12px"
            lineHeight="17px"
            letterSpacing="0.06px"
            component="p"
            color={theme.colors.drak500}
            className="description"
          >
            {description}
          </Typography>
        </div>
      </div>
    </CalendarCard>
  );
};

export default CalendarCardComponent;
