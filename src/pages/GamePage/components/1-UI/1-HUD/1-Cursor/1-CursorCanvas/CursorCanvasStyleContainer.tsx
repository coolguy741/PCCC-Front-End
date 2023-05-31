import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const CursorCanvasStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
  position: fixed;
  width: 11.11122071516646vw;
  height: 11.11122071516646vw;
  max-width: 160px;
  max-height: 160px;
  border-radius: 100%;
`;

export default memo(CursorCanvasStyleContainer);
