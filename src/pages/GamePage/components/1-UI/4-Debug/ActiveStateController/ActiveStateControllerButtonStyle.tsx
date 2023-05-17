import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const ActiveStateControllerButtonStyle = styled.button`
  ${UserSelectNone};
  ${MarginPaddingNone};
  color: black;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0.75rem;
  border-radius: 1rem;
  margin-bottom: 4rem;
  background-color: white;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  :active {
    transform: scale(0.85);
  }
`;

export default memo(ActiveStateControllerButtonStyle);
