import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const CursorMenuOptionStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: 0;

  .body-bg {
    width: 8.33vw;
    height: 8.33vw;
    border-radius: 100%;
    background: linear-gradient(to right, #d4c1b0, #ebd6c3 25%, #ebd6c3);
    border: 0.833vw solid var(--icon-border-color, #30d5c8);
  }

  .exit-body-bg {
    width: 3.89vw;
    height: 3.89vw;
    border-radius: 100%;
    background: linear-gradient(to right, #d4c1b0, #ebd6c3 25%, #ebd6c3);
    border: 0.556vw solid var(--icon-border-color, #30d5c8);
    display: flex;
    align-items: center;
    justify-content: center;
    .exit-label {
      color: black;
      font-weight: bold;
      font-size: 1.28vw;
    }
  }

  .icon {
    position: absolute;
    width: 7.22vw;
    height: 7.22vw;
  }

  .label {
    position: absolute;
    min-width: 4.44vw;
    font-size: 1.11vw;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8.78vw;
    padding: 0.278vw 0.556vw;
    border-top-left-radius: 1.22vw;
    border-top-right-radius: 1.22vw;
    color: white;
    text-shadow: 0.069vw 0.069vw 0.208vw rgba(0, 0, 0, 0.3);

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--label-background-color, #30d5c8);
      border-top-left-radius: 1.389vw;
      border-top-right-radius: 1.389vw;
    }
  }
`;

export default memo(CursorMenuOptionStyleContainer);
