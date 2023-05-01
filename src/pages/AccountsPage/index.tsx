import styled from "styled-components";
import { AccountsHeader } from "../../components/Accounts/AccountsHeader";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {
  return (
    <Style.PageContainer>
      <AccountsHeader />
      <section className="content">{children}</section>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 10vh 32px 0 64px;
    display: flex;
    flex-direction: column;
    position: relative;
  `,
};
