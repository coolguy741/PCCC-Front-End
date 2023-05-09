import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const InspectOptionStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 8rem;
  height: 8rem;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // opacity: 0;

  .circle-bg {
    width: 8rem;
    height: 8rem;
    position: absolute;
    border-radius: 100%;
    background-color: #30d5c8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 80%;
      height: 80%;
      border-radius: 100%;
      z-index: 1;
    }
  }

  .label {
    color: white;
    text-align: center;
    font-weight: bold;
    position: absolute;
    margin-bottom: 8rem;
    background-color: #30d5c8;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    min-width: 4rem;
  }
`;

export default memo(InspectOptionStyleContainer);
