import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const SkinTonePickerStyleContainer = styled(motion.div)`
  ${UserSelectNone};
  ${MarginPaddingNone};
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
  background-color: rgba(0, 0, 0, 0.5);

  .skin-tone-board {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .skin-tone-board-bg {
      position: relative;
    }
    .skin-tone-copy {
      position: absolute;
      color: black;
      font-size: 2vw;
      font-weight: bold;
      text-align: center;
      width: 100%;
    }
  }

  .skin-tone-choices {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 40%;
    margin-top: 3vw;
    margin-bottom: 7vw;

    .skin-tone-one-btn,
    .skin-tone-three-btn {
      align-self: flex-end;
    }

    .skin-tone-one-btn {
      cursor: none;
      width: 12vw;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .skin-tone-two-btn {
      cursor: none;
      width: 12vw;
      margin-right: 2vw;
      margin-left: 2vw;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .skin-tone-three-btn {
      cursor: none;
      width: 12vw;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default memo(SkinTonePickerStyleContainer);
