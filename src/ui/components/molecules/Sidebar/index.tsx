import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import SVG from "react-inlinesvg";

import SidebarItem from "../../atoms/SidebarItem";
import MenuIcon from "./../../../assets/icons/icon_menu.svg";
import CloseIcon from "./../../../assets/icons/icon_close.svg";
import { SidebarItems } from "../../../../types/constants";

const Sidebar = styled.div`
  width: 100%;
  display: block;
  line-height: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  &.height-full {
    height: ${71 * SidebarItems.length}px;
  }
`;

const SidebarWrapper = styled.div`
  cursor: pointer;
  position: relative;

  .menu__icon {
    width: 32px;
    height: 32px;

    .menu-icon {
      transition: 0.4s ease-out;
    }
  }
`;

type SidebarProps = {
  className?: string;
};

const SidebarComponent: React.FC<SidebarProps> = ({ className = "" }) => {
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
    <SidebarWrapper>
      <div
        ref={menuIconRef}
        className="menu__icon"
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        <SVG className="menu-icon" src={isShowSidebar ? CloseIcon : MenuIcon} />
      </div>

      <Sidebar
        className={`sidebar--custom ${isShowSidebar ? "height-full" : ""}`}
      >
        {SidebarItems.map((item, index) => (
          <SidebarItem
            key={index.toString()}
            title={item.title}
            link={item.link}
          />
        ))}
      </Sidebar>
    </SidebarWrapper>
  );
};

export default SidebarComponent;
