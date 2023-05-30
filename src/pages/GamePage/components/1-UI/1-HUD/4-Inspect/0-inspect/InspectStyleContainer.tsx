import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { Theme } from "../../../../../styles/Snippets/Theme";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const InspectStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
  position: fixed;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none !important;

  .inspect-modal {
    ${MarginPaddingNone};
    position: relative;
    width: 40vw;
    height: 40vh;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 3rem;
    background-color: #fff6ee;

    .inspect-modal-bg {
      ${MarginPaddingNone};
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3rem;
    }

    .item-display {
      ${MarginPaddingNone};
      position: relative;
      width: 35%;
      height: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      .item-display-view {
        ${MarginPaddingNone};
        position: relative;
        width: 110%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .item-display-bg {
          position: absolute;
          width: 70%;
        }
      }

      .item-display-count {
        ${MarginPaddingNone};
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        transform: translateY(-3rem);

        .item-display-count-current {
          ${MarginPaddingNone};
          color: black;
          font-weight: bold;
          font-size: 1.25rem;
        }

        .item-display-count-of {
          ${MarginPaddingNone};
          color: black;
          font-size: 1rem;
          font-weight: bold;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .item-display-count-total {
          ${MarginPaddingNone};
          color: black;
          font-weight: bold;
          font-size: 1.25rem;
        }
      }
    }

    .item-info {
      ${MarginPaddingNone};
      position: relative;
      width: 60%;
      height: 100%;

      padding-right: 1.25rem;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 4rem;

      .item-title {
        ${MarginPaddingNone};
        font-weight: bold;
        font-size: 1.75rem;
        color: black;
      }

      .item-text {
        color: black;
        font-size: 1.25rem;
        height: 100%;
        margin-bottom: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .exit-inspect {
      background: none;
      border: none;
      border-radius: 0.5rem;
      background-color: ${Theme.PCCCRed};
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      font-size: 1.75rem;
      font-weight: bold;
      padding: 1rem;
      position: absolute;
      top: 0;
      right: 0;
      cursor: none !important;
    }
  }
`;

export default memo(InspectStyleContainer);
