import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const InventoryStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  left: 30vw;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  .inventory-book {
    width: 35vw;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;

    .inventory-wood {
      ${UserSelectNone};
      ${MarginPaddingNone};
      img {
        ${UserSelectNone};
        ${MarginPaddingNone};
        width: 100%;
        height: 100%;
      }
    }

    .inventory-pages-shadow {
      ${UserSelectNone};
      ${MarginPaddingNone};
      width: 87%;
      height: 87%;
      position: absolute;
      border-radius: 2rem;
      box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.65);
    }

    .inventory-pages {
      ${UserSelectNone};
      ${MarginPaddingNone};
      width: 32vw;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;

      .inventory-pages-svg {
        position: absolute;
      }
      .inventory-pages-overlay {
        position: relative;
        margin-top: 0.1rem;
        width: 97%;
        height: 98%;
        border-radius: 3rem;
      }
    }
  }
`;

export default memo(InventoryStyleContainer);
