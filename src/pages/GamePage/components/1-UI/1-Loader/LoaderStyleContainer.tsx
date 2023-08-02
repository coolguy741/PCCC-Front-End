import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const LoaderStyleContainer = styled(motion.div)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents}
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .loader-lottie-container {
    width: 10vw;
  }

  .loader-copy {
    margin-top: 2vw;
    margin-left: 0.7vw;
    color: black;
  }
`;

export default memo(LoaderStyleContainer);
