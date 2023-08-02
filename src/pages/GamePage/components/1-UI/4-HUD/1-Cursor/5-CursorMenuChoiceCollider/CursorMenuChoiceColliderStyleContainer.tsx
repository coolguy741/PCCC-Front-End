import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const CursorMenuChoiceColliderStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  visibility: hidden;
  pointer-events: none;
`;

export default memo(CursorMenuChoiceColliderStyleContainer);
