import React from "react";
import { styled } from "styled-components";

const footerItems = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.colors.drak500};
  height: 128px;

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 44px;
  }

  .footer-text {
    color: ${(props) => props.theme.colors.white};
    font-size: 11px;
    line-height: 16px;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.primary400};
    }
  }
`;

const FooterComponent: React.FC = () => (
  <Footer className="footer">
    <div className="container">
      <div className="footer-content">
        {footerItems.map((item) => (
          <p key={item} className="footer-text">
            {item}
          </p>
        ))}
      </div>
    </div>
  </Footer>
);

export default FooterComponent;
