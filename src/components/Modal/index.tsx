import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

interface ModalProps {
  modal: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

// function enter(node) {
//   gsap.from(node, {
//     duration: 0.5,
//     autoAlpha: 0,
//   });
// }

// function exit(node) {
//   gsap.to(node, {
//     duration: 0.5,
//     autoAlpha: 0,
//   });
// }

function Modal({ modal, children, toggle }: ModalProps) {
  const nodeRef = React.useRef(null);

  return (
    document &&
    ReactDOM.createPortal(
      // <Transition
      //   key="modal"
      //   timeout={500}
      //   in={modal}
      //   nodeRef={nodeRef.current}
      //   onEnter={enter}
      //   onExit={exit}
      //   mountOnEnter={true}
      //   unmountOnExit={true}
      // >
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
      // </Transition>,
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
