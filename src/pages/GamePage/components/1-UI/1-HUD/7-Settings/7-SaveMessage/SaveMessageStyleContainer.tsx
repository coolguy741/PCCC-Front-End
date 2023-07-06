import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const SaveMessageStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 80%;
  height: 3vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5vw;
  margin-bottom: 1vw;
  opacity: 0;
  .saved-message-text {
    color: black;
    font-size: 1.25vw;
    font-weight: bold;
  }
`;

export default memo(SaveMessageStyleContainer);
