import { createElement } from "react";
import styled from "styled-components";

export type TagVariants =
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "label"
  | "p";

export interface BaseTypographyProps {
  align?: React.CSSProperties["textAlign"];
  letterSpacing?: React.CSSProperties["letterSpacing"];
  textTransform?: React.CSSProperties["textTransform"];
  margin?: React.CSSProperties["margin"];
  mb?: React.CSSProperties["margin"];
  mt?: React.CSSProperties["margin"];
  ml?: React.CSSProperties["margin"];
  mr?: React.CSSProperties["margin"];
  weight?: React.CSSProperties["fontWeight"];
  color?: string;
  tag?: TagVariants;
  children?: React.ReactNode;
}

export const Typography = ({
  tag = "p",
  children,
  ...props
}: BaseTypographyProps) => (
  <DynamicTypography tag={tag} {...props}>
    {children}
  </DynamicTypography>
);

export const DynamicTypography = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children),
)``;
