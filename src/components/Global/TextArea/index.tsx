import styled from "styled-components";

interface TextAreaProps {
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: any;
}

export const TextArea = ({
  placeholder,
  onChange,
  value,
  ...props
}: TextAreaProps) => {
  return (
    <Style.TextArea
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

const Style = {
  TextArea: styled.textarea`
    padding: 1rem;
    border: none;
    border-radius: 0.2rem;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    resize: none;
    color: var(--neutral-600);
    font-size: 0.9rem;
  `,
};
