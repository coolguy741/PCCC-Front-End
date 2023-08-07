import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../../styles/Snippets/UserSelectNone";

const SlotOptionProgressStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .title {
    color: black;
    font-size: 1vw;
    line-height: 1.5vw;
  }

  .progress-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    img {
      width: 65%;
    }

    .progress-text {
      color: black;
      line-height: 0;
      position: absolute;
      line-height: 0;
      ${MarginPaddingNone};
    }
  }
`;

export default memo(SlotOptionProgressStyleContainer);
