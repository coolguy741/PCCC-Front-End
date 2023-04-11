import styled from 'styled-components';

interface TextAreaProps {
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: any;
}

export const TextArea = ({ placeholder, onChange, value }: TextAreaProps) => {
  return (
    <Style.TextArea
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

const Style = {
  TextArea: styled.textarea`
    padding: 1rem;
    border: none;
    border-radius: 0.2rem;
    width: 300px;
  `,
};
