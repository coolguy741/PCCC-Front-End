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
    padding: 10vh 32px 2.5vh 64px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    justify-content: space-between;
    overflow: hidden;

    section.accounts-content {
      height: 85%;
      width: 100%;
      border: 1px solid red;
      border-radius: 8px;
    }

    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
};
