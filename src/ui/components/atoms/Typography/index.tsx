import React from "react";
import { styled } from "styled-components";

type TypographyStyleProps = {
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  letterSpacing?: string;
  fontWeight?: number;
};

type TypographyProps = {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
  children: React.ReactNode;
  role?: string;
  className?: string;
} & TypographyStyleProps;

const TypographyComponent = ({
  component = "div",
  className = "",
  role = "",
  children,
}: TypographyProps) =>
  React.createElement(
    component,
    {
      className: className,
      role: role,
    },
    children
  );

const Typography = styled(TypographyComponent)<TypographyStyleProps>(
  (props) => ({
    fontSize: props.fontSize || "13px",
    fontWeight: props.fontWeight || 300,
    lineHeight: props.lineHeight || "1.5",
    letterSpacing: props.letterSpacing || "0",
    color: props.color || "#000000",
  })
);

export default Typography;
