import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const CursorStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
`;

export default memo(CursorStyleContainer);
