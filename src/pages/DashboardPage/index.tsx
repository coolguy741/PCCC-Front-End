import styled from "styled-components";
import { DashboardMenu } from "../../components/DashboardMenu";

interface DashboardPageProps {
  children: JSX.Element;
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <PageContainer>
      <DashboardMenu />
      <div className="main-container">{children}</div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  .main-container {
    padding: 30px;
  }
`;
