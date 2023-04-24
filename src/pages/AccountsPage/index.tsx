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

    .breadcrumb {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #777777;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding-bottom: 25px;

      svg {
        margin-right: 15px;
      }
    }
  `,
};
