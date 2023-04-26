import styled from "styled-components";
import { AccountsHeader } from "../../components/Accounts/AccountsHeader";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {
  return (
    <Style.PageContainer>
      <Style.Background />
      <AccountsHeader />
      <div className="content">{children}</div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 118px 40px 0 40px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    max-height: 100vh;

    .content {
      overflow-y: hidden;
      margin-right: -24px;
      padding-right: 24px;
    }
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    background: linear-gradient(270deg, #c4e8ff, #fff9e0);
    z-index: -1;
  `,
};
