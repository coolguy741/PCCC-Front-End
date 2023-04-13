import React from "react";
import styled, { css } from "styled-components";

export type TypographyVariant =
  | "display"
  | "headline"
  | "title"
  | "label"
  | "body";

export type TypographyWeight =
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "heavy";

export type TypographySize = "small" | "medium" | "large";

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
  size?: TypographySize;
  weight?: TypographyWeight;
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

const displayVSStyles = (size: TypographySize) => css`
  font-size: ${size === "large" ? 57 : size === "small" ? 36 : 45}px;
  line-height: ${size === "large" ? 64 : size === "small" ? 44 : 52}px;
`;
const headlineVSStyles = (size: TypographySize) => css`
  font-size: ${size === "large" ? 32 : size === "small" ? 24 : 28}px;
  line-height: ${size === "large" ? 40 : size === "small" ? 32 : 36}px;
`;
const titleVSStyles = (size: TypographySize) => css`
  font-size: ${size === "large" ? 22 : size === "small" ? 14 : 16}px;
  line-height: ${size === "large" ? 28 : size === "small" ? 20 : 24}px;
`;
const labelVSStyles = (size: TypographySize) => css`
  font-size: ${size === "large" ? 14 : size === "small" ? 11 : 12}px;
  line-height: ${size === "large" ? 20 : size === "small" ? 16 : 16}px;
`;
const bodyVSStyles = (size: TypographySize) => css`
  font-size: ${size === "large" ? 16 : size === "small" ? 12 : 14}px;
  line-height: ${size === "large" ? 24 : size === "small" ? 16 : 20}px;
`;

function getTypographyVariantAndSize(props: TypographyProps) {
  const { variant, size = "medium" } = props;

  switch (variant) {
    case "display":
      return displayVSStyles(size);
    case "headline":
      return headlineVSStyles(size);
    case "title":
      return titleVSStyles(size);
    case "label":
      return labelVSStyles(size);
    default:
      return bodyVSStyles(size);
  }
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
    ${getTypographyWeight}
    ${getTypographyVariantAndSize}
  `,
};
