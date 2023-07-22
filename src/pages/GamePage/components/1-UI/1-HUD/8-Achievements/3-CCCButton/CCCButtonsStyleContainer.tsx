import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { Theme } from "../../../../../styles/Snippets/Theme";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const CCCButtonsStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: absolute;
  width: 18%;
  height: 65%;
  left: 0;
  bottom: 3%;
  margin-left: 1.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  /* background-color: red; */

  .ccc-button-all {
    background-color: ${Theme.PCCCRed};
    color: white;
    font-weight: bold;
    font-size: 1vw;
    padding-top: 0.15vw;
    padding-bottom: 0.15vw;
    padding-right: 3.1vw;
    padding-left: 3.1vw;
    border-radius: 1.5rem;
    margin-bottom: 0.75vw;
    cursor: none;
    margin-top: 1.5vw;
  }

  .ccc-button-confident {
    background-color: ${Theme.PCCCBlue};
    color: white;
    font-weight: bold;
    font-size: 1vw;
    padding-top: 0.15vw;
    padding-bottom: 0.15vw;
    padding-right: 1.5vw;
    padding-left: 1.5vw;
    border-radius: 1.5rem;
    margin-bottom: 0.75vw;
    cursor: none;
  }

  .ccc-button-clean {
    background-color: ${Theme.PCCCGreen};
    color: white;
    font-weight: bold;
    font-size: 1vw;
    padding-top: 0.15vw;
    padding-bottom: 0.15vw;
    padding-right: 2.5vw;
    padding-left: 2.5vw;
    border-radius: 1.5rem;
    margin-bottom: 0.75vw;
    cursor: none;
  }

  .ccc-button-careful {
    background-color: ${Theme.PCCCOrange};
    color: white;
    font-weight: bold;
    font-size: 1vw;
    padding-top: 0.15vw;
    padding-bottom: 0.15vw;
    padding-right: 2.1vw;
    padding-left: 2.1vw;
    border-radius: 1.5rem;
    margin-bottom: 0.75vw;
    cursor: none;
  }
`;

export default memo(CCCButtonsStyleContainer);
