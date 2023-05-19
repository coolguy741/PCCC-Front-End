import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const ToolTipStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents}
  opacity: 0;
  color: white;
  position: fixed;
  font-weight: bold;
  font-size: 1.25rem;
  transform-origin: center center;
  -webkit-text-stroke: 1.5px black;
  -o-transform-origin: center center;
  -ms-transform-origin: center center;
  -moz-transform-origin: center center;
  -webkit-transform-origin: center center;
`;

export default memo(ToolTipStyleContainer);
