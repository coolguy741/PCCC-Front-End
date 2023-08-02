import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const EyeStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
  pointer-events: none;
  border: none;
  background: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  .eye-button {
    width: 5vw;
    margin-top: 1vw;
    cursor: none;
    pointer-events: auto;
  }
`;

export default memo(EyeStyleContainer);
