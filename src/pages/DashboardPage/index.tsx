import styled from "styled-components";
import { DashboardMenu } from "../../components/Global/DashboardMenu";

interface DashboardPageProps {
  children: JSX.Element;
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <PageContainer>
      <DashboardMenu />
      <div className="main-container">
        <div className="main-container__header">
          <img
            src="/images/powerfullkids.svg"
            alt="Powerfull Kids"
            width="320"
          />
          <div className="search">
            <input type="text" placeholder="Search" />
            <img
              src="/images/notifications.svg"
              alt="Notifications"
              width="25"
            />
          </div>
          <img src="/images/mock-avatar.svg" alt="Avatar" width="50" />
        </div>
        <div className="__content">{children}</div>
      </div>
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
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 350px;

    &__header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;

      .search {
        width: 100%;
        display: flex;
        gap: 20px;

        input {
          width: 100%;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          height: 20px;
        }
      }
    }
  }
`;
