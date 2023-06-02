import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const InspectExitColliderStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  top: 0;
  left: 0;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  visibility: hidden;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.25);
`;

export default memo(InspectExitColliderStyleContainer);
