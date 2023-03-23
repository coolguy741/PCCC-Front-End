import styled from "styled-components";

interface IconProps {
  name: string;
}

export const Icon = ({name}: IconProps) => {
  return (
    <StyledIcon src={`/images/${name}-icon.svg`} className={name} placeholder="icon"/>
  );
};

const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
`;
