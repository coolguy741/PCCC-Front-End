import styled from "styled-components";

import { DashboardLayout } from "../../layouts/DashboardLayout/dashboardLayout";

interface DashboardPageProps {
  children: JSX.Element;
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <DashboardLayout>
      <div className="dashboard-content">{children}</div>
    </DashboardLayout>
  );
};

const Style = {
  PageContainer: styled.div`
    border: 10px solid blue;
  `,
};
