import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const SettingsTitleTabStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10vw;
  left: -5vw;
  .settings-svg-container {
    position: absolute;
    width: 70%;
  }
  .settings-tab-text-eng {
    position: absolute;
    color: black;
    transform: rotate(-90deg);
    font-size: 1.75vw;
    font-weight: bold;
  }
  .settings-tab-text-fr {
    position: relative;
    color: black;
    transform: rotate(-90deg);
    font-size: 1.75vw;
    font-weight: bold;
    opacity: 0;
  }
`;

export default memo(SettingsTitleTabStyleContainer);
