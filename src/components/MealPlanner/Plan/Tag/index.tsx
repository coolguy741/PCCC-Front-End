import styled from "styled-components";
import { Typography } from "../../../Global/Typography";

export interface TagProps {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  translateX?: string;
  translateY?: string;
  variant?: "blue" | "red";
  onClick?: () => void;
  title: string;
}

export const Tag: React.FC<TagProps> = ({ title, ...props }) => {
  return (
    <Style.Container {...props}>
      <Typography variant="paragraph3" as="p" weight="semi-bold" color="white">
        {title}
      </Typography>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div.attrs(
    ({
      top,
      bottom,
      left,
      translateX,
      translateY,
      right,
      variant,
    }: {
      top: string;
      bottom: string;
      right: string;
      translateX: string;
      translateY: string;
      left: string;
      variant: string;
    }) => ({
      top,
      bottom,
      right,
      left,
      translateX: translateX ?? 0,
      translateY: translateY ?? 0,
      variant: variant ?? "blue",
    }),
  )`
    width: fit-content;
    position: absolute;
    text-transform: uppercase;
    padding: 1% 1%;
    z-index: 2;
    cursor: pointer;
    &:before {
      width: 90%;
      height: 100%;
      content: "";
      position: absolute;
      top: 0;
      z-index: -1;
      left: calc(-10%);
      transform: skew(-20deg);
      border-top-left-radius: 5px;
    }
    &:after {
      width: 90%;
      height: 100%;
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      right: calc(-10%);
      transform: skew(20deg);
      border-top-right-radius: 5px;
    }

    transform: translate(
      ${({ translateX, translateY }) => `${translateX}, ${translateY}`}
    );
    ${({ top }) => !!top && `top: ${top};`}
    ${({ left }) => !!left && `left: ${left};`}
    ${({ right }) => !!right && `right: ${right};`}
    ${({ bottom }) => !!bottom && `bottom: ${bottom};`}
    ${({ variant }) =>
      variant === "blue"
        ? "&:before, &:after {background-image: linear-gradient(#0075BD, #004976);} &:hover {&:before, &:after{ {background-image: linear-gradient(#11A5FF, #0075BD);}}}"
        : "&:before, &:after { background-image: linear-gradient(#F65321, #B62217);} &:hover {&:before, &:after{{background-image: linear-gradient(#F87C56, #F65321);}}}"}
  `,
};
