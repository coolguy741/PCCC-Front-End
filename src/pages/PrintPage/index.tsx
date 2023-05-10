import styled, { createGlobalStyle } from "styled-components";

import { PrintHeader } from "../../components/Global/Header/Print";

interface PrintPageProps {
  children: JSX.Element;
}

export const PrintPage = ({ children }: PrintPageProps) => {
  return (
    <>
      <PrintStyle />
      <Style.Container>
        <PrintHeader />
        <Style.Content>{children}</Style.Content>
      </Style.Container>
    </>
  );
};

const Style = {
  Container: styled.div`
    margin: auto;
    @media screen {
      margin: 24px;
    }
    @media print {
      margin: 0px;
    }
  `,
  Content: styled.div`
    padding: 0px;
    @media screen {
      padding-top: 40px;
    }
    @media print {
      padding-top: 30px;
    }
  `,
};

const PrintStyle = createGlobalStyle`
  @media print {
    @page {
      size: letter;
      margin-left: 24px;
      margin-top: 18px;
      margin-right: 24px;
    }
  }
`;
