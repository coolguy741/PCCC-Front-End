import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const InventoryHUDIconStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 10rem;
  height: 10rem;

  .bg {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 10rem;
    height: 10rem;
    margin-left: -2rem;
    margin-bottom: -2rem;
    background-color: #ffcd00;
    border-radius: 100%;
  }

  img {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 10rem;
    height: 10rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
`;

export default memo(InventoryHUDIconStyleContainer);
