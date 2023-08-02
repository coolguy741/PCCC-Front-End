import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../Snippets/MarginPaddingNone";
import { UserSelectNone } from "../Snippets/UserSelectNone";

const ScreenCanvasStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${DisableTouchPointerEvents};
  visibility: hidden;
`;

export default memo(ScreenCanvasStyleContainer);
