import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const RecipeCheckListStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 2.5vw;

  .recipe-check-list-header {
    color: black;
    font-size: 1.5vw;
    font-weight: bold;
    margin-bottom: 1vw;
  }
  .step-status-header {
    color: black;
    font-size: 1vw;
    font-weight: bold;
    margin-bottom: 0.5vw;
  }
`;

export default memo(RecipeCheckListStyleContainer);
