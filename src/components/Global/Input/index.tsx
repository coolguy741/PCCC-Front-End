import styled from "styled-components";
import { SetStateAction } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: any;
}

export const Input = ({ type, placeholder, onChange, value }: InputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

const StyledInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;
  width: 300px;
`;
