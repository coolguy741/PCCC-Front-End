import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const RecipeTabButtonStyleContainer = styled.button`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 6.5vw;
  cursor: none !important;
  border: none;
  background: none;

  .recipe-inactive-tab {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .recipe-active-tab {
    position: absolute;
    width: 100%;
    height: 98%;
    margin-top: 0.26vw;
    opacity: 1;
    z-index: 1;
  }

  .recipe-tab-title {
    position: absolute;
    transform: rotate(-90deg) translate(0.25vw, -0.25vw);
    font-size: 1.75vw;
    font-weight: bold;
    color: black;
    z-index: 2;
  }
`;

export default memo(RecipeTabButtonStyleContainer);
