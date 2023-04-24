import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const ActiveStateControllerStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  color: white;
  height: 200px;
  overflow: auto;
  position: fixed;
  background-color: black;
  align-items: flex-start;
  justify-content: flex-start;
  bottom: 0;
  width: 100%;
  table {
    width: 100%;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    vertical-align: top;
    border: 1px solid #fff;
  }

  th {
    font-weight: bold;
    background-color: black;
    text-decoration: underline;
  }
`;

export default memo(ActiveStateControllerStyleContainer);
