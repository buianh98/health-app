import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";

const NavbarItem = styled.div`
  .navbar-link {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  line-height: 23px;

  &:hover {
    color: ${(props) => props.theme.colors.primary400};
  }

  &.active {
    color: ${(props) => props.theme.colors.primary400};
  }
`;

type NavbarItemProps = {
  icon: string;
  title: string;
  link: string;
};

const NavbarItemComponent: React.FC<NavbarItemProps> = ({
  icon,
  title,
  link,
}) => {
  const location = useLocation();

  return (
    <NavbarItem className={location.pathname === link ? "active" : ""}>
      <Link className="navbar-link" to={link}>
        <span>
          <SVG src={icon} />
        </span>
        <span>{title}</span>
      </Link>
    </NavbarItem>
  );
};

export default NavbarItemComponent;
