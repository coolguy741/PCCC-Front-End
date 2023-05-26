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
  lineHeight?: React.CSSProperties["lineHeight"];
  textTransform?: React.CSSProperties["textTransform"];
  margin?: string;
  mb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
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

function getMargin(
  margin: string,
  mt: string,
  mb: string,
  mr: string,
  ml: string,
) {
  return margin ? `${margin}` : `${mt} ${mr} ${mb} ${ml}`;
}

export const DynamicTypography = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children),
)`
  color: ${({ color }) => `var(--${color})`};
  margin: ${({ margin, mt, mb, mr, ml }) => getMargin(margin, mt, mr, mb, ml)};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}`};
  font-weight: ${({ weight }) => weight};
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ align }) => align};
  line-height: ${({ lineHeight }) => lineHeight};
`;
