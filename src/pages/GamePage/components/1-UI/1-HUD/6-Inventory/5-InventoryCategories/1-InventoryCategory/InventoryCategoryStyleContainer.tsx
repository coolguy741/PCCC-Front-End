import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const InventoryCategoryStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 100%;
  padding-left: 1vw;
  padding-right: 1.5vw;
  padding-bottom: 1vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  .inventory-category-title {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    .inventory-category-title-spacer {
      width: 0.75vw;
      height: 2vw;
      margin-right: 0.75vw;
      background-color: var(--inventory-category-highlight-color, #4cde96);
    }
    .inventory-category-title-text {
      ${UserSelectNone};
      ${MarginPaddingNone};
      color: black;
      width: 100%;
      font-weight: bold;
      font-size: 1.25vw;
      line-height: 2vw;
      /* background-color: green; */
    }
  }

  .inventory-category-items-container {
    width: 100%;
    .inventory-category-items {
      position: relative;
      .item-wrapper {
        position: absolute;
        touch-action: none;
        padding: 0.3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        .item {
          ${UserSelectNone};
          ${MarginPaddingNone};
          /* touch-action: none; */
          /* width: 100%; */
          height: 100%;
          border-radius: 0.5vw;
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(255, 255, 255, 1) 0%,
            rgba(199, 172, 146, 1) 175%,
            rgba(182, 144, 105, 1) 175%
          );
          border: 2px solid var(--inventory-category-highlight-color, #4cde96);

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

export default memo(InventoryCategoryStyleContainer);
