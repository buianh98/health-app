import { styled } from "styled-components";

const FoodCagegoryCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: calc(100% - 34px);
  cursor: pointer;

  .text {
    padding: 8px;
    background: ${(props) => props.theme.colors.primary300};
    color: ${(props) => props.theme.colors.white};
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
  }
`;

type FoodCagegoryCardProps = {
  hexagonContent: string | React.ReactNode;
  image: string;
  onClick?: () => void;
  className?: string;
};

const FoodCagegoryCardComponent: React.FC<FoodCagegoryCardProps> = ({
  hexagonContent,
  image,
  className = "",
  onClick = () => null,
}) => {
  return (
    <FoodCagegoryCard
      className={className}
      onClick={onClick}
      style={{
        background: `url(${image}) center center no-repeat`,
        backgroundImage: image,
      }}
    >
      <div className="text">{hexagonContent}</div>
    </FoodCagegoryCard>
  );
};

export default FoodCagegoryCardComponent;
