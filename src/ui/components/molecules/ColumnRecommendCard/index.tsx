import { styled } from "styled-components";
import Typography from "../../atoms/Typography";
import theme from "../../../../utils/styles/theme";

const ColumnThumnailCard = styled.div`
  width: 100%;
  padding: 24px 8px 22px;
  background: ${(props) => props.theme.colors.drak600};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content {
    width: 100%;
    height: 100%;
  }

  .title,
  .description {
    text-align: center;
  }

  .title {
    color: ${(props) => props.theme.colors.primary300};
  }

  .line {
    height: 1px;
    width: 56px;
    background: ${(props) => props.theme.colors.white};
    text-align: center;
    margin: 0 auto;
  }

  .description {
    margin-top: 8px;
    margin-bottom: 0;
  }
`;

type ColumnThumnailCardProps = {
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
};

const ColumnThumnailCardComponent: React.FC<ColumnThumnailCardProps> = ({
  title,
  description,
  className = "",
  onClick = () => null,
}) => {
  return (
    <ColumnThumnailCard className={className} onClick={onClick}>
      <div className="content">
        <Typography
          fontSize="22px"
          lineHeight="27px"
          letterSpacing="0.11px"
          fontWeight={400}
          component="h3"
          color={theme.colors.primary300}
          className="title font-inter"
        >
          {title}
        </Typography>
        <div className="line" />
        <Typography
          fontSize="18px"
          lineHeight="26px"
          letterSpacing="0.11px"
          fontWeight={400}
          component="p"
          color={theme.colors.white}
          className="description"
        >
          {title}
        </Typography>
      </div>
    </ColumnThumnailCard>
  );
};

export default ColumnThumnailCardComponent;
