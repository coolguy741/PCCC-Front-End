import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../Snippets/MarginPaddingNone";
import { UserSelectNone } from "../Snippets/UserSelectNone";

const ScreenCanvasStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default memo(ScreenCanvasStyleContainer);
