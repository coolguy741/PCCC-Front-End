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
    width: 32vw;
    .recipe-panel-bg-wood {
      position: relative;
      width: 100%;
    }

    .recipe-tab-buttons {
      position: absolute;
      top: 9vw;
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

  /* .recipe-content {
    position: absolute;
    width: 75%;
    height: 80%;
    overflow-y: scroll;
    margin-left: 3vw;
  } */

  .recipe-content-header {
    ${MarginPaddingNone};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 85%;
    height: 90%;
    margin-left: 0.5vw;
    margin-bottom: 0.5vw;
    flex-direction: column;
    .recipe-header {
      ${MarginPaddingNone};
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 17%;
    }
  }
`;

export default memo(RecipePanelStyleContainer);
