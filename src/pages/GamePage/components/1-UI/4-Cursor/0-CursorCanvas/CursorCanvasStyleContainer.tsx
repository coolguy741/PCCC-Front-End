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
  width: 8rem;
  height: 8rem;
`;

export default memo(CursorCanvasStyleContainer);
