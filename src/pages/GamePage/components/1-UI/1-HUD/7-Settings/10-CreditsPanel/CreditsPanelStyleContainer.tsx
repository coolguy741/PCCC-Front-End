import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const CreditsPanelStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  right: 15vw;
  width: 20vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;

  .credits-panel-bg {
    position: relative;
    width: 30vw;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .credits-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 25vw;
    height: 20vw;
    color: black;
    position: absolute;
    font-weight: bold;
    font-size: 1.75vw;
  }

  .credits-exit-button {
    position: absolute;
    width: 5vw;
    margin-bottom: 23vw;
    margin-left: 28vw;
  }
`;

export default memo(CreditsPanelStyleContainer);
