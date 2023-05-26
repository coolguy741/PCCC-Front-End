import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const DebugButtonStyleContainer = styled.button`
  ${UserSelectNone};
  ${MarginPaddingNone};
  color: white;
  width: 7rem;
  height: 3rem;
  text-align: center;
  background-color: black;
  border: solid white 1px;
  cursor: pointer;
  top: var(--debug-button-top, auto);
  left: var(--debug-button-left, auto);
  right: var(--debug-button-right, auto);
  bottom: var(--debug-button-bottom, auto);
  position: var(--debug-button-position, auto);
  margin-top: var(--debug-button-margin-top, auto);
  margin-left: var(--debug-button-margin-left, auto);
  margin-right: var(--debug-button-margin-right, auto);
  margin-bottom: var(--debug-button-margin-bottom, auto);
`;

export default memo(DebugButtonStyleContainer);
