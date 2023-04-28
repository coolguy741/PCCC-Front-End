import React from "react";
import styled, { css } from "styled-components";

export type TypographyVariant =
  | "display1"
  | "display2"
  | "display3"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "paragraph1"
  | "paragraph2"
  | "paragraph3"
  | "paragraph4";

export type TypographyWeight =
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "heavy";

export type TypographyProps = {
  className?: string;
  children: React.ReactNode;
  m?: number;
  mt?: number;
  mb?: number;
  my?: number;
  mx?: number;
  ml?: number;
  mr?: number;
  p?: number;
  pt?: number;
  pb?: number;
  py?: number;
  px?: number;
  pl?: number;
  pr?: number;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return <Style.Container {...props}>{children}</Style.Container>;
};

const mediumWStyles = css`
  font-weight: 500;
`;
const semiBoldWStyles = css`
  font-weight: 600;
`;
const boldWStyles = css`
  font-weight: 700;
`;
const heavyWStyles = css`
  font-weight: 900;
`;
const regularStyles = css`
  font-weight: 400;
`;

function getTypographyWeight(props: TypographyProps) {
  const { weight } = props;

  switch (weight) {
    case "medium":
      return mediumWStyles;
    case "semi-bold":
      return semiBoldWStyles;
    case "bold":
      return boldWStyles;
    case "heavy":
      return heavyWStyles;
    default:
      return regularStyles;
  }
}

const variantVStyles = (variant: TypographyVariant) => {
  switch (variant) {
    case "display1":
      return css`
        font-size: 120px;
        line-height: 144px;
      `;
    case "display2":
      return css`
        font-size: 72px;
        line-height: 86px;
      `;
    case "display3":
      return css`
        font-size: 60px;
        line-height: 72px;
      `;
    case "h1":
      return css`
        font-size: 48px;
        line-height: 56px;
      `;
    case "h2":
      return css`
        font-size: 40px;
        line-height: 48px;
      `;
    case "h3":
      return css`
        font-size: 33px;
        line-height: 40px;
      `;
    case "h4":
      return css`
        font-size: 28px;
        line-height: 32px;
      `;
    case "h5":
      return css`
        font-size: 23px;
        line-height: 28px;
      `;
    case "h6":
      return css`
        font-size: 19px;
        line-height: 24px;
      `;
    case "paragraph1":
      return css`
        font-size: 12px;
        line-height: 14px;
      `;
    case "paragraph2":
      return css`
        font-size: 14px;
        line-height: 16px;
      `;
    case "paragraph3":
      return css`
        font-size: 16px;
        line-height: 20px;
      `;

    default:
      return css`
        font-size: 18px;
        line-height: 24px;
      `;
  }
};

function getTypographyVariant(props: TypographyProps) {
  const { variant = "paragraph1" } = props;

  return variantVStyles(variant);
}

export const Style = {
  Container: styled.div`
    font-family: "Noir Std";
    ${({ m }) => m && `margin: calc(${m} * var(--gutter-spacing));`}
    ${({ mt }) => mt && `margin-top: calc(${mt} * var(--gutter-spacing));`}
    ${({ mb }) => mb && `margin-bottom: calc(${mb} * var(--gutter-spacing));`}
    ${({ mr }) => mr && `margin-right: calc(${mr} * var(--gutter-spacing));`}
    ${({ ml }) => ml && `margin-left: calc(${ml} * var(--gutter-spacing));`}
    ${({ mx }) => mx && `margin: 0 calc(${mx} * var(--gutter-spacing));`}
    ${({ my }) => my && `margin: calc(${my} * var(--gutter-spacing)) 0;`}
    ${({ p }) => p && `padding: calc(${p} * var(--gutter-spacing));`}
    ${({ pt }) => pt && `padding-top: calc(${pt} * var(--gutter-spacing));`}
    ${({ pb }) => pb && `padding-bottom: calc(${pb} * var(--gutter-spacing));`}
    ${({ pr }) => pr && `padding-right: calc(${pr} * var(--gutter-spacing));`}
    ${({ pl }) => pl && `padding-left: calc(${pl} * var(--gutter-spacing));`}
    ${({ px }) => px && `padding: 0 calc(${px} * var(--gutter-spacing));`}
    ${({ py }) => py && `padding: calc(${py} * var(--gutter-spacing)) 0;`}
    ${({ color = "neutral-800" }) => `color: var(--${color});`}
    ${getTypographyWeight}
    ${getTypographyVariant}
  `,
};
