import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const LanguageControllerStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  position: relative;

  .language-button-bg {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .eng-french-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 95%;

    .english {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .eng-inactive {
        width: 29%;
        position: absolute;
        margin-right: 0.25vw;
        opacity: 0;
      }
      .eng-active {
        width: 95%;
        margin-top: 0.2vw;
      }
    }
    .french {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .fr-inactive {
        width: 27%;
        position: absolute;
        margin-bottom: 0vw;
        margin-left: 0.3vw;
      }
      .fr-active {
        width: 95%;
        margin-top: 0.3vw;
        margin-left: 0.5vw;
        opacity: 0;
      }
    }
  }
`;

export default memo(LanguageControllerStyleContainer);
