import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const SettingsHUDIconStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  top: 0;
  right: 0;
  // margin-right: 2rem;
  // margin-top: 2rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 10rem;
  height: 10rem;

  .bg {
    position: fixed;
    top: 0;
    right: 0;
    width: 10rem;
    height: 10rem;
    background-color: #0084d5;
    border-radius: 100%;

    margin-right: -2rem;
    margin-top: -2rem;
  }

  img {
    position: fixed;
    top: 0;
    right: 0;
    width: 9rem;
    height: 9rem;
    margin-right: 2rem;
    margin-top: 2rem;
  }
`;

export default memo(SettingsHUDIconStyleContainer);
