import { styled } from "styled-components";
import Typography from "../../atoms/Typography";
import theme from "../../../../utils/styles/theme";

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
      <Typography
        fontSize="15px"
        lineHeight="18px"
        fontWeight={400}
        component="div"
        color={theme.colors.white}
        className="text font-inter"
      >
        {hexagonContent}
      </Typography>
    </FoodCagegoryCard>
  );
};

export default FoodCagegoryCardComponent;
