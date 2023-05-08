import styled from "styled-components";
import { AccountsHeader } from "../../components/Accounts/AccountsHeader";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {
  return (
    <Style.PageContainer>
      <AccountsHeader />
      <div className="content">{children}</div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 118px 40px 0 40px;
    display: flex;
    flex-direction: column;
    position: relative;

    .content {
      overflow: visible;
      margin-right: -24px;
      padding-right: 24px;
    }
  `,
};
