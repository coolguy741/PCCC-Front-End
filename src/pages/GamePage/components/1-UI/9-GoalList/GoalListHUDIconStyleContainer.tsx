import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const GoalListHUDIconStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;

  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 10rem;
    height: 10rem;
    background-color: #26d07c;
    border-radius: 100%;
    margin-left: -2rem;
    margin-top: -2rem;
  }

  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 9rem;
    height: 9rem;
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;

export default memo(GoalListHUDIconStyleContainer);
