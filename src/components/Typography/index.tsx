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

export interface BaseTypographyProps extends React.HTMLAttributes<"div"> {
  align?: React.CSSProperties["textAlign"];
  letterSpacing?: React.CSSProperties["letterSpacing"];
  lineheight?: React.CSSProperties["lineHeight"];
  texttransform?: React.CSSProperties["textTransform"];
  margin?: string;
  mb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  weight?: React.CSSProperties["fontWeight"];
  color?: string;
  tag?: TagVariants;
  children?: React.ReactNode;
  size?: React.CSSProperties["fontSize"];
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

function getMargin(margin = "0", mt = "0", mr = "0", mb = "0", ml = "0") {
  return !margin ? `${margin}` : `${mt} ${mr} ${mb} ${ml}`;
}

export const DynamicTypography = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children),
)`
  color: ${({ color }) => `var(--${color})`};
  margin: ${({ margin, mt, mr, mb, ml }) => getMargin(margin, mt, mr, mb, ml)};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}`};
  font-weight: ${({ weight }) => weight};
  text-transform: ${({ texttransform }) => texttransform};
  text-align: ${({ align }) => align};
  line-height: ${({ lineheight }) => lineheight};
  font-size: ${({ size }) => size};
`;
