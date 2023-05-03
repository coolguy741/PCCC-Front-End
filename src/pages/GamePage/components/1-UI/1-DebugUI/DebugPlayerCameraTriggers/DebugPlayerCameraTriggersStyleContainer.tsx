import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const DebugPlayerCameraTriggersStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default memo(DebugPlayerCameraTriggersStyleContainer);
