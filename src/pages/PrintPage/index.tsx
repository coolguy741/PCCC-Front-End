import styled from 'styled-components';

import { PrintHeader } from '../../components/Global/Header/Print';

interface PrintPageProps {
  children: JSX.Element;
}

export const PrintPage = ({ children }: PrintPageProps) => {
  return (
    <Style.Container>
      <PrintHeader />
      {children}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  `,
};
