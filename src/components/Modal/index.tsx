import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

interface ModalProps {
  modal: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

function Modal({ modal, children, toggle }: ModalProps) {
  const nodeRef = React.useRef(null);

  return (
    document &&
    ReactDOM.createPortal(
      <AnimatePresence>
        <Style.Container
          ref={nodeRef.current}
          initial={{ opacity: 0, y: "15px", scale: 0.99 }}
          animate={{ opacity: 1, y: "0", scale: 1 }}
          exit={{ opacity: 0, y: "15px", scale: 0.99 }}
        >
          <Style.CloseContainer onClick={toggle} />
          <Style.ContentContainer>
            <AnimatePresence>{children}</AnimatePresence>
          </Style.ContentContainer>
        </Style.Container>
      </AnimatePresence>,
      document?.body,
    )
  );
}

export default Modal;

export const Style = {
  Container: styled(motion.div)`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    z-index: 250;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: scroll;
  `,
  CloseContainer: styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 5;
    cursor: pointer;
  `,
  ContentContainer: styled.div`
    display: grid;
    place-items: center;
    z-index: 30;
    width: 100%;
    height: 100%;

    section {
      z-index: 30;
    }
  `,
};
