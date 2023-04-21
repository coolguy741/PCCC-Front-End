import styled from "styled-components";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <Style.Button onClick={onClick}>{children}</Style.Button>;
};

const Style = {
  Button: styled.button`
    background-color: var(--yellow-500);
    border: none;
    border-radius: 2rem;
    color: var(--neutral-800);
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    min-width: 8rem;
  `,
};
