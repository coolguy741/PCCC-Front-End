import styled from "styled-components";

import { PrintLogo } from "../Logo/Print";

export const PrintHeader = () => {
  return (
    <Style.Header>
      <PrintLogo type="white" width={144} />
      <Style.Img src="/images/powerfullkids-white.svg" alt="power full kids" />
    </Style.Header>
  );
};

const Style = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(177.73deg, #4cde96 1.85%, #20ad67 98.05%);

    @media screen {
      border-radius: 18px;
      height: 120px;
      padding: 0px 72px;
    }
    @media print {
      border-radius: 6px;
      height: 40px;
      padding: 0px 24px;
    }
  `,
  Img: styled.img`
    @media screen {
      width: 318px;
    }
    @media print {
      width: 106px;
    }
  `,
};
