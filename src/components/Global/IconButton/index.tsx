import styled from "styled-components";
import { Icon } from "../Icon";

interface ButtonProps {
  icon: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const IconButton = ({ icon, width = 32, height = 32, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick} width={width} height={height}><Icon name={icon}/></StyledButton>;
};

const StyledButton = styled.button<{ width?: number; height?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: ${(props) => props.width ?? 32}px;
  height: ${(props) => props.height ?? 32}px;
`;
