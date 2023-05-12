import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const RecipeBookHUDIconStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  bottom: 0;
  right: 0;
  // margin-right: 2rem;
  // margin-bottom: 2rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 10rem;
  height: 10rem;

  .bg {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 10rem;
    height: 10rem;
    background-color: #f65321;
    border-radius: 100%;
    margin-right: -2rem;
    margin-bottom: -2rem;
  }

  img {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 9rem;
    height: 9rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
`;

export default memo(RecipeBookHUDIconStyleContainer);
