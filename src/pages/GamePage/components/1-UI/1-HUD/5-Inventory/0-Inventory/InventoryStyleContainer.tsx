import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const InventoryStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  top: 50%;
  left: 50%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: red;

  .inventory-book {
    width: 35vw;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;

    .inventory-wood {
      ${UserSelectNone};
      ${MarginPaddingNone};
    }

    .inventory-pages-shadow {
      ${UserSelectNone};
      ${MarginPaddingNone};
      width: 90%;
      height: 90%;
      position: absolute;
      border-radius: 2rem;
      box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.65);
    }

    .inventory-pages {
      ${UserSelectNone};
      ${MarginPaddingNone};
      width: 32vw;
      position: absolute;
    }
  }
`;

export default memo(InventoryStyleContainer);
