import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkButtonProps {
  children: string | JSX.Element | string[];
  to: string;
  disabled?: boolean;
}

export const LinkButton = ({
  children,
  to,
  disabled = false,
}: LinkButtonProps) => {
  return (
    <StyledButton to={to} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Link).attrs((props: { disabled: boolean }) => ({
  disabled: props.disabled || false,
}))`
  background-color: var(--yellow);
  border: none;
  border-radius: 2rem;
  color: #3d3d3d;
  cursor: pointer;
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.75rem 1.125rem;
  vertical-align: top;
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
  `}
`;
