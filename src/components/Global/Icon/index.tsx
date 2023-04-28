import React from "react";
import styled from "styled-components";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  return (
    <Style.Icon
      src={`/images/icons/${name}.svg`}
      alt={name + "-icon"}
      {...props}
    />
  );
};

const Style = {
  Icon: styled.img``,
};
