import styled from "styled-components";
import { AccountsHeader } from "../../components/Accounts/AccountsHeader";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {

  return (
    <PageContainer>
      <AccountsHeader/>
      <div className="content">{children}</div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
    .content {
      padding: 11px 0px;
    }
  }
`;
