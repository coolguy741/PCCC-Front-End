import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const RecipeItemStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: 90%;
  margin-bottom: 0.75vw;

  .check-container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 0.1vw;
    margin-right: 1vw;

    .check-box {
      position: relative;
      width: 1.5vw;
    }
    .check-mark {
      position: absolute;
      width: 2vw;
      margin-bottom: 0.5vw;
      margin-left: 0.5vw;
    }
  }

  .recipe-item-content {
    ${MarginPaddingNone};
    font-size: 1vw;
    position: relative;
  }
`;

export default memo(RecipeItemStyleContainer);
