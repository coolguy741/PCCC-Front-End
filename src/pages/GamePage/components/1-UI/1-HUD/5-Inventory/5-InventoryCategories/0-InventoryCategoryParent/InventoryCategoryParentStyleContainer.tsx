import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const InventoryCategoryParentStyleContainer = styled.div`
  width: 83%;
  height: 80%;
  margin-right: 2%;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .inventory-title {
    ${UserSelectNone};
    ${MarginPaddingNone};
    width: 100%;
    font-size: 2vw;
    color: black;
    padding-bottom: 1vh;
    font-weight: bold;
    padding-left: 1vw;
  }

  .inventory-categories {
    ${UserSelectNone};
    ${MarginPaddingNone};
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    ::-webkit-scrollbar-thumb {
      background: #3b2200;
      border-radius: 1vw;
      height: 1rem;
    }

    ::-webkit-scrollbar-track {
      border-radius: 1vw;
    }

    ::-webkit-scrollbar {
      background: #d6c6b9;
      border-radius: 1vw;
      width: 0.5vw;
    }
  }
`;

export default memo(InventoryCategoryParentStyleContainer);
