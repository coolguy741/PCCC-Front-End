import styled from "styled-components";

import { DashboardHeader } from "../../components/Dashboard/Header";
import { DashboardMenu } from "../../components/Global/DashboardMenu";

interface DashboardPageProps {
  children: JSX.Element;
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <Style.PageContainer>
      <DashboardMenu />
      <div className="main-container">
        <DashboardHeader />
        <div className="__content">{children}</div>
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;

    .main-container {
      margin-left: 350px;
      width: calc(100% - 350px);
      position: relative;

      @media screen and (max-width: 1920px) {
        margin-left: var(--dashboard-menu-width-medium);
        width: calc(100% - var(--dashboard-menu-width-medium));
      }

      .__content {
        height: 100%;
      }
    }
  `,
};
