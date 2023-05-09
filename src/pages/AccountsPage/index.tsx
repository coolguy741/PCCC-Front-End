import styled from "styled-components";
import { AccountsHeader } from "../../components/Accounts/AccountsHeader";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {
  return (
    <Style.PageContainer>
      <AccountsHeader />
      <section className="accounts-content">{children}</section>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 9vh 32px 2.5vh 64px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    justify-content: space-between;
    overflow: hidden;

    .accounts-header {
      height: 11vh;
    }

    section.accounts-content {
      width: 100%;
      height: 77vh;
    }

    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
};
