import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  width: 100%;
  height: 71px;

  font-size: 18px;
  line-height: 26px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.gray400};

  border-bottom: 1px solid rgba(255, 255, 255, 1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;

  &:hover {
    color: ${(props) => props.theme.colors.primary400};
  }

  &.active {
    color: ${(props) => props.theme.colors.primary400};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

type SidebarItemProps = {
  title: string;
  link: string;
};

const SidebarItemComponent: React.FC<SidebarItemProps> = ({ title, link }) => {
  const location = useLocation();

  return (
    <SidebarItem className={location.pathname === link ? "active" : ""}>
      <Link className="navbar-link" to={link}>
        <span>{title}</span>
      </Link>
    </SidebarItem>
  );
};

export default React.memo(SidebarItemComponent);
