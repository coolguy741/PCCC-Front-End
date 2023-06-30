import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const LoadStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  position: relative;

  .load-button-bg {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .load-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    .static {
      width: 94%;
      height: 100%;
      margin-top: 0.25vw;
      margin-left: 0.15vw;
      position: relative;
    }

    .pressed {
      opacity: 0;
      position: absolute;
      width: 94%;
      margin-top: 0.25vw;
      margin-left: 0.15vw;
    }

    .pressed:active {
      opacity: 1;
    }
  }

  .load-btn:active {
    transform: scale(0.9);
  }
`;

export default memo(LoadStyleContainer);
