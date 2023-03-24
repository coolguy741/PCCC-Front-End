import styled from "styled-components";

interface SmallButtonProps {
  children: string;
  onClick ?: () => void;
}

export const SmallButton = ({ children, onClick }: SmallButtonProps) => {
  return <StyledSmallButton onClick={onClick}>{children}</StyledSmallButton>;
};

const StyledSmallButton = styled.button`
  background-color: var(--yellow);
  border: none;
  border-radius: 1.5rem;
  color: #3d3d3d;
  cursor: pointer;
  font-size: 1rem;
  min-width: 4rem;
  line-height: 110%;
  padding: 0.5rem;
`;