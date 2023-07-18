import { styled } from "styled-components";

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
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.11px;
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
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.11px;
    color: ${(props) => props.theme.colors.white};
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
        <h3 className="title font-inter">{title}</h3>
        <div className="line" /> <p className="description">{description}</p>
      </div>
    </ColumnThumnailCard>
  );
};

export default ColumnThumnailCardComponent;
