import styled from "styled-components";

interface ModalContainerProps {
  children: JSX.Element;
  close?: () => void;
}

export const ModalContainer = ({ children, close }: ModalContainerProps) => {
  return <Style.Container onClick={close}>{children}</Style.Container>;
};

const Style = {
  Container: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
