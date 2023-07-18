import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

import HeaderLogo from "./../../../assets/icons/logo.svg";
import Navbar from "../../molecules/Navbar";
import Sidebar from "../../molecules/Sidebar";
import { routes } from "../../../../types/constants";

const Header = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.drak500};
  padding: 0 16px;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-right-content {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 42px;
  }

  .sidebar--custom {
    right: 0;
    top: 30px;
    position: absolute;
    width: 280px;
    z-index: 100;
  }
`;

const HeaderComponent: React.FC = () => {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);
  const menuIconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuIconRef.current &&
        event.target &&
        !menuIconRef.current.contains(event.target as Node) &&
        isShowSidebar
      ) {
        setIsShowSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuIconRef, isShowSidebar]);

  return (
    <Header>
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <Link to={routes.top_page}>
              <SVG src={HeaderLogo} />
            </Link>
          </div>
          <div className="header-right-content">
            <Navbar />
            <Sidebar />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
