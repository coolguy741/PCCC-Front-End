import styled from "styled-components";

type TypographyProps = {
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
  variant?: "display" | "headline" | "title" | "label" | "body";
  size?: "lg" | "md" | "sm";
  weight?: "regular" | "medium" | "semi-bold" | "bold" | "heavy";
};

export const Typography = styled.div.attrs((props: TypographyProps) => ({
  m: props.m,
  mt: props.mt,
  mb: props.mb,
  my: props.my,
  mx: props.mx,
  ml: props.ml,
  mr: props.mr,
  p: props.p,
  pt: props.pt,
  pb: props.pb,
  py: props.py,
  px: props.px,
  pl: props.pl,
  pr: props.pr,
  variant: props.variant ?? "body",
  size: props.size ?? "md",
  weight: props.weight ?? "regular",
}))`
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
  ${({ weight }) => {
    switch (weight) {
      case "regular":
        return "font-weight: 400; font-family: Noir std";
      case "semi-bold":
        return "font-weight: 600; font-family: Noir std";
      case "bold":
        return "font-weight: 700; font-family: Noir std";
      case "heavy":
        return "font-weight: 900; font-family: Noir std";
      default:
        return "font-weight: 500; font-family: Noir std";
    }
  }}
`;
