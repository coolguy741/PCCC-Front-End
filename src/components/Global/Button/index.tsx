import styled from 'styled-components';

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <Style.Button onClick={onClick}>{children}</Style.Button>;
};

const Style = {
  Button: styled.button`
    background-color: var(--yellow);
    border: none;
    border-radius: 2rem;
    color: #3d3d3d;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    min-width: 8rem;
  `,
};
