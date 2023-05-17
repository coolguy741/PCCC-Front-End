import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const CursorCanvasStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
  position: fixed;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
`;

export default memo(CursorCanvasStyleContainer);
