import styled from "styled-components";
import { ReportsHeader } from "../../components/Reports/ReportsHeader";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";

interface ReportsPageProps {
  children: JSX.Element;
}

export const ReportsPage = ({ children }: ReportsPageProps) => {
  return (
    <Style.PageContainer>
      <ReportsHeader />
      <section className="reports-content">{children}</section>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 9vh 32px 2.5vh 64px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    justify-content: space-between;
    overflow: hidden;

    .reports-header {
      height: 11vh;
    }

    section.reports-content {
      width: 100%;
      height: 77vh;
    }

    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
};
