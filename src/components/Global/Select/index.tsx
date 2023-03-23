import styled from "styled-components";

interface SelectProps {
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: any;
}

export const Select = ({ placeholder, onChange, value }: SelectProps) => {
  return (
    <StyledSelect placeholder={placeholder} onChange={onChange} value={value} />
  );
};

const StyledSelect = styled.select`
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;
  width: 300px;
`;
