import styled from "styled-components";
import { PageTitleLayout } from "../../components/Global/PageTitleLayout";

export const AchievementsPage = () => {
  return <PageTitleLayout title="Your profile" />;
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  SubContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  AchievementsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `,
};
