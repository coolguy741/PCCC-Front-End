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
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 100%;
    background: linear-gradient(to right, #d4c1b0, #ebd6c3 25%, #ebd6c3);
    border: 0.75rem solid var(--icon-border-color, #30d5c8);
  }

  .exit-body-bg {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    background: linear-gradient(to right, #d4c1b0, #ebd6c3 25%, #ebd6c3);
    border: 0.5rem solid var(--icon-border-color, #30d5c8);
    display: flex;
    align-items: center;
    justify-content: center;
    .exit-label {
      color: black;
      font-weight: bold;
      font-size: 1.15rem;
    }
  }

  .icon {
    position: absolute;
    width: 6.5rem;
    height: 6.5rem;
  }

  .label {
    position: absolute;
    min-width: 4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 7.9rem;
    padding: 0.25rem 0.5rem;
    border-top-left-radius: 1.1rem;
    border-top-right-radius: 1.1rem;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--label-background-color, #30d5c8);
      border-top-left-radius: 1.25rem;
      border-top-right-radius: 1.25rem;
    }
  }
`;

export default memo(CursorMenuOptionStyleContainer);
