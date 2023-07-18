import { styled } from "styled-components";

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
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.09px;
    color: ${(props) => props.theme.colors.dark500};
    margin-bottom: 8px;
    white-space: pre-wrap;
  }

  .description,
  .text {
    color: ${(props) => props.theme.colors.dark500};
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.06px;
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
          <h3 className="time-text font-inter">{time}</h3>
          <p className="text">{title}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </CalendarCard>
  );
};

export default CalendarCardComponent;
