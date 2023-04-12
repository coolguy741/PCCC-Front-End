import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: any;
}

export const Input = ({ type, placeholder, onChange, value }: InputProps) => {
  return (
    <Style.Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

const Style = {
  Input: styled.input`
    padding: 1rem;
    border: none;
    border-radius: 0.2rem;
    width: 300px;
  `,
};
