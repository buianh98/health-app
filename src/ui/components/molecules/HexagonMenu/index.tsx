import { styled } from "styled-components";
import SVG from "react-inlinesvg";

import HexagonIcon from "./../../../assets/icons/hexagon_icon.svg";

const HexagonMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 134px;
  height: 116px;
  cursor: pointer;
  position: relative;

  color: ${(props) => props.theme.colors.white};
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

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
    <div className="text">{hexagonContent}</div>
  </HexagonMenu>
);

export default HexagonMenuComponent;
