import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder?: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

const StyledInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;
  width: 300px;
`;
