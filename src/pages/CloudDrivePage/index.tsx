import styled from 'styled-components';

import { Files } from '../../components/CloudDrive/Files';
import { PageHeader } from '../../components/Global/Header/PageHeader';

export const CloudDrivePage = () => {
  return (
    <Container>
      <PageHeader title="Cloud Drive" />
      <Files />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  gap: 30px;
`;
