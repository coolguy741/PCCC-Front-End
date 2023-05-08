import styled from "styled-components";
import { Icon } from "../Icon";

export const TrashButton = ({ ...props }) => {
  return (
    <Style.Button {...props}>
      <Icon name="trash" />
    </Style.Button>
  );
};

const Style = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transition: box-shadow 0.3s ease-out 0s, color 0.3s ease-in 0s,
      background 0.3s linear 0s;

    &:hover {
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    }
  `,
};
