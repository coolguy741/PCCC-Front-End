import { memo } from "react";
import styled from "styled-components";
import PageStyleContainer from "../../../../../../styles/Containers/PageStyleContainer";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const RecipePanelStyleContainer = styled(PageStyleContainer)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  background-color: black;

  .recipe-panel-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .recipe-panel-bg-wood {
      position: relative;
      width: 100%;
    }

    .recipe-tab-buttons {
      position: absolute;
      top: 3;
      left: -2vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .recipe-panel-bg-pages {
      position: absolute;
      width: 87%;
      margin-left: 0.5vw;
      z-index: 0;
    }
  }
`;

export default memo(RecipePanelStyleContainer);
