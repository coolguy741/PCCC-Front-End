import styled from "styled-components";

interface ModalContainerProps {
  children: JSX.Element;
}

export const ModalContainer = ({ children }: ModalContainerProps) => {
  return <Style.Container>{children}</Style.Container>;
};

const Style = {
  Container: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
