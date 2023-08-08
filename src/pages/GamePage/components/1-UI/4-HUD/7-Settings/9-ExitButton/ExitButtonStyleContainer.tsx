import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const ExitButtonStyleContainer = styled.button`
  ${UserSelectNone};
  ${MarginPaddingNone};
  border: none;
  background: none;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  :active {
    cursor: none;
    transform: scale(0.9);
  }
  cursor: none;
`;

export default memo(ExitButtonStyleContainer);
