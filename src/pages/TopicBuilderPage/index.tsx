import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { PageHeader } from '../../components/Global/Header/PageHeader';

export const TopicBuilderPage = () => {
  return (
    <PageContainer>
      <PageHeader title="Topics" />
      <div className="topics-container">
        <Outlet />
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .topics-container {
    height: 100%;
    overflow: hidden;
  }

  & *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
`;
