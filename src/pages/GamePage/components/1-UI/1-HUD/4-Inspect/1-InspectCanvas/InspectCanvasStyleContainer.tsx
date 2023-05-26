import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const InspectCanvasStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents}
  width: 100%;
  height: 100%;
  cursor: none !important;
`;

export default memo(InspectCanvasStyleContainer);
