import { memo } from "react";
import styled from "styled-components";
import { DisableTouchPointerEvents } from "../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const VideoControllerStyleContainer = styled.video`
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents}
  display: none;
  user-select: none;
  visibility: hidden;
`;

export default memo(VideoControllerStyleContainer);
