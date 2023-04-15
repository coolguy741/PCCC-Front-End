import styled from "styled-components";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
interface SelectProps extends InputProps {
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
    <Style.Container>
      <Style.Select placeholder={placeholder} onChange={onChange} value={value}>
        {children}
      </Style.Select>
    </Style.Container>
  );
};

const Style = {
  Container: styled.fieldset`
    width: 100%;
    height: 100%;
    position: relative;

    &::after {
      content: url("/public/icons/downSelect.svg");
      position: absolute;
      right: 15px;
      top: calc(21%);
      background-color: white;
      border-radius: 50%;
      padding: 5px;
      pointer-events: none;
    }
  `,
  Select: styled.select`
    appearance: none;
    text-indent: 1px;
    text-overflow: "";
    -webkit-padding-end: 20px;
    -moz-padding-end: 20px;
    -webkit-padding-start: 15px;
    -moz-padding-start: 15px;
    background-color: white;
    height: 100%;
    width: 100%;
    box-shadow: 0px 5.19209px 20.7684px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: inherit;
    margin: 0;
    overflow: hidden;
    font-size: 16px;
    color: rgba(29, 36, 51, 0.8);
    position: relative;
  `,
};
