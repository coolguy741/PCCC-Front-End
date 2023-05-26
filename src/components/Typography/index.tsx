import { createElement } from "react";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

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
  margin?: number;
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
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

function convertMargin(margin: number) {
  return margin ? convertToRelativeUnit(margin, "vw") : 0;
}

function getMargin(
  margin: number,
  mt: number,
  mb: number,
  mr: number,
  ml: number,
) {
  const convertedMargin = convertMargin(margin);
  const convertedMarginTop = convertMargin(mt);
  const convertedMarginBottom = convertMargin(mb);
  const convertedMarginRight = convertMargin(mr);
  const convertedMarginLeft = convertMargin(ml);

  return margin
    ? `${convertedMargin}`
    : `${convertedMarginTop} ${convertedMarginRight} ${convertedMarginBottom} ${convertedMarginLeft}`;
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
