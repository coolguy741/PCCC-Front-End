import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const RecipeContentStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  overflow-y: scroll;
  width: 100%;
  height: 83%;
  position: relative;

  .ingredients-container {
    position: relative;
  }

  .instructions-container {
    position: absolute;
  }
`;

export default memo(RecipeContentStyleContainer);
