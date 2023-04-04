import styled from "styled-components";

interface IconProps {
  name: string;
  width?: string;
}

export const Icon = ({name, width = "100%"}: IconProps) => {
  return (
    <StyledIcon src={`/images/${name}-icon.svg`} className={name} placeholder="icon" width={width}/>
  );
};

const StyledIcon = styled.img`
`;
