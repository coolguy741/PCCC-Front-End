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
    .content {
      padding: 11px 0px;
    }
  `,
};
