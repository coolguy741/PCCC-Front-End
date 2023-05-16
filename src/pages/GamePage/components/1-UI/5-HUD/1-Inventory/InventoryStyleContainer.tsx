import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const InventoryStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  bottom: -35rem;
  left: 0;
  width: 22rem;
  margin-left: 11rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default memo(InventoryStyleContainer);
