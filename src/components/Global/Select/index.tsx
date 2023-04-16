import styled from "styled-components";

interface SelectProps {
  children: any;
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: any;
}

export const Select = ({
  children,
  placeholder,
  onChange,
  value,
}: SelectProps) => {
  return (
    <Style.Select placeholder={placeholder} onChange={onChange} value={value}>
      {children}
    </Style.Select>
  );
};

const Style = {
  Select: styled.select`
    padding: 1rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #fff;
  `,
};
