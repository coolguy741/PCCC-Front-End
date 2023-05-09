import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const CursorMenuOptionStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .icon {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 100%;
    border: 0.65rem solid #30d5c8;
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

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #30d5c8;
      border-top-left-radius: 1.25rem;
      border-top-right-radius: 1.25rem;
    }
  }
`;

export default memo(CursorMenuOptionStyleContainer);
