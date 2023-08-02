import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const TestVideoStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  left: 0;

  .alpha,
  .color,
  .text {
    width: 25vw;
    background-color: white;
    h1 {
      color: black;
    }
    button {
      color: white;
      background-color: black;
      margin-left: 1vw;
      padding: 0.5vw;
    }
  }
`;

export default memo(TestVideoStyleContainer);
