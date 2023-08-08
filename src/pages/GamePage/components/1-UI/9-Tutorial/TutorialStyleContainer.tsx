import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const TutorialStyleContainer = styled(motion.div)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents}
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

  .dialogue-box-conatiner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 35vw;
    position: relative;

    .dialogue-box-bg {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .dialogue-content {
      position: absolute;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      width: 75%;
      margin-left: 1.75vw;
      height: 80%;
      overflow-x: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .dialogue-item {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;

        color: white;
        .dialogue-item-content {
          margin-top: 2.5vw;
          text-align: center;
          font-size: calc(0.45vw + 2vmin);
          word-wrap: break-word;
          overflow-wrap: break-word;
          padding-right: 0.5vw;
          padding-left: 0.5vw;
          color: black;
          font-weight: bold;
        }
      }
    }

    .prev-button {
      position: absolute;
      left: 1vw;
      width: 4vw;
      cursor: none;
      pointer-events: auto;
    }

    .next-button {
      position: absolute;
      right: 0;
      width: 4vw;
      cursor: none;
      pointer-events: auto;
    }
  }
`;

export default memo(TutorialStyleContainer);
