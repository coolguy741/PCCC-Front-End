import styled from "styled-components";
import { AccountsHeader } from "../../components/Accounts/AccountsHeader";
import { AltGrapeBG } from "../../components/Icons";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {
  return (
    <Style.PageContainer>
      <AccountsHeader />
      <div className="content">{children}</div>
      <div className="accounts-bg">
        <AltGrapeBG />
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 118px 40px 0 40px;
    display: flex;
    flex-direction: column;
    position: relative;

    .accounts-bg {
      position: fixed;
      z-index: 0;
      bottom: -10px;
      right: 0;
    }

    .content {
      overflow-y: hidden;
      margin-right: -24px;
      padding-right: 24px;
      z-index: 1;
    }
  `,
};
