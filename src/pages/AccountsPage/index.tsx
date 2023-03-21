import styled from "styled-components";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {
  return (
    <PageContainer>
      <div>Accounts</div>
      <div>{children}</div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 30px;
`