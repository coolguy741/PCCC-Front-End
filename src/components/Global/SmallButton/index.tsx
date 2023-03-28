import styled from "styled-components";

interface SmallButtonProps {
  bgColor?: string;
  children: string;
  onClick ?: () => void;
}

export const SmallButton = ({ children, bgColor="yellow", onClick }: SmallButtonProps) => {
  return <StyledSmallButton onClick={onClick} bgColor={bgColor}>{children}</StyledSmallButton>;
};

const StyledSmallButton = styled.button<SmallButtonProps>`
  background-color: ${SmallButtonProps => SmallButtonProps.bgColor ? 'var(--' + SmallButtonProps.bgColor +')' : 'var(--yellow)'};
  border: none;
  border-radius: 1.5rem;
  color: #3d3d3d;
  cursor: pointer;
  font-size: 1rem;
  min-width: 4rem;
  line-height: 110%;
  padding: 0.5rem;
`;