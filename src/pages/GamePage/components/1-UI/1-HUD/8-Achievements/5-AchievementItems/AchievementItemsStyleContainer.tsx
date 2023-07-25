import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const AchievementItemsStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  right: 1%;
  bottom: 3%;
  height: 67%;
  width: 79.5%;
  display: flex;
  overflow-y: scroll;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;

  .achievement-items {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 99%;
    height: 95%;
    max-height: 97%;

    .achievement-item {
      ${UserSelectNone};
      ${MarginPaddingNone};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: calc(25%);
      position: relative;
      margin-top: 1.5%;
      .item-bg {
        position: absolute;
        width: 75%;
        height: 80%;
        border-radius: 1vw;
        background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(255, 255, 255, 1) 0%,
          rgba(199, 172, 146, 1) 175%,
          rgba(182, 144, 105, 1) 175%
        );
      }

      .item-img {
        z-index: 1;
        width: 90%;
        height: 90%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .badge-bg {
          width: 105%;
          height: 100%;
          border-radius: 1vw;
          position: relative;
        }
        .badge-icon {
          width: 29%;
          height: 29%;
          margin-bottom: 2vw;
          margin-right: 0.1vw;
          position: absolute;
        }
        .badge-title {
          width: 65%;
          /* height: 29%; */
          bottom: 2.2vw;
          position: absolute;
        }
      }
      .test-name {
        text-align: center;
        line-height: 1rem;
        z-index: 2;
        background-color: black;
        margin-top: 4vw;
        color: white;
        position: absolute;
      }
    }
  }
`;

export default memo(AchievementItemsStyleContainer);
