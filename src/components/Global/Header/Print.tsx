import styled from "styled-components";

import { PrintLogo } from "../Logo/Print";

export const PrintHeader = () => {
  return (
    <Style.Header>
      <PrintLogo />
      <div>POWER FULL KIDS</div>
    </Style.Header>
  );
};

const Style = {
  Header: styled.header`
    width: 100%;
    padding: 24px 41px 18px 33px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    background: #d9d9d9;
    pointer-events: none;
    box-sizing: border-box;

    & > svg {
      height: 25.77px;
    }
    div {
      color: #ffffff;
      font-weight: 800;
      font-size: 19px;
      font-family: "Open Sans";
    }
  `,
};
