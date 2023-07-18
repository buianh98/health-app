import React from "react";
import { styled } from "styled-components";

import ChallengeIcon from "./../../../assets/icons/icon_challenge.svg";
import InfoIcon from "./../../../assets/icons/icon_info.svg";
import MemoIcon from "./../../../assets/icons/icon_memo.svg";
import NavbarItem from "../../atoms/NavbarItem";
import { routes } from "../../../../types/constants";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

const NavbarItems = [
  {
    icon: MemoIcon,
    title: "自分の記録",
    link: routes.my_record,
  },
  {
    icon: ChallengeIcon,
    title: "チャレンジ",
    link: "#",
  },
  {
    icon: InfoIcon,
    title: "お知らせ",
    link: "#",
  },
];

const Navbar: React.FC = () => (
  <NavbarContainer>
    {NavbarItems.map((item, index) => (
      <NavbarItem
        key={index.toString()}
        icon={item.icon}
        title={item.title}
        link={item.link}
      />
    ))}
  </NavbarContainer>
);

export default Navbar;
