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
    margin-top: 5rem;
    padding: 0 2rem;
  `,
};
