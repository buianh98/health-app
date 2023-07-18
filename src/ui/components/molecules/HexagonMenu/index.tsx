import { styled } from "styled-components";
import SVG from "react-inlinesvg";

import HexagonIcon from "./../../../assets/icons/hexagon_icon.svg";
import Typography from "../../atoms/Typography";
import theme from "../../../../utils/styles/theme";

const HexagonMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 134px;
  height: 116px;
  cursor: pointer;
  position: relative;

  .hexagon-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

type HexagonMenuProps = {
  hexagonContent: string | React.ReactNode;
  icon: string;
  onClick?: () => void;
  className?: string;
};

const HexagonMenuComponent: React.FC<HexagonMenuProps> = ({
  hexagonContent,
  icon,
  className = "",
  onClick = () => null,
}) => (
  <HexagonMenu className={className} onClick={onClick}>
    <SVG className="hexagon-icon" src={HexagonIcon} />

    <div className="icon">
      <SVG src={icon} />
    </div>

    <Typography
      fontSize="20px"
      lineHeight="24px"
      fontWeight={400}
      component="div"
      color={theme.colors.white}
      className="font-inter"
    >
      {hexagonContent}
    </Typography>
  </HexagonMenu>
);

export default HexagonMenuComponent;
