import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const InspectStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none !important;

  .inspect-modal {
    ${MarginPaddingNone};
    position: relative;
    width: 40%;
    height: 40%;

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
      justify-content: center;

      .item-title {
        ${MarginPaddingNone};
        font-weight: bold;
        font-size: 1.75rem;
        color: black;
      }
    }
  }
`;

export default memo(InspectStyleContainer);
