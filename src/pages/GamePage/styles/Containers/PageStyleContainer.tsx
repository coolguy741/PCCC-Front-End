import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../Snippets/MarginPaddingNone";
import { UserSelectNone } from "../Snippets/UserSelectNone";

const PageStyleContainer = styled.div`
  ${UserSelectNone}
  ${MarginPaddingNone}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export default memo(PageStyleContainer);
