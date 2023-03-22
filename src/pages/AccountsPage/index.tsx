import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface AccountsPageProps {
  children: JSX.Element;
}

export const AccountsPage = ({ children }: AccountsPageProps) => {
  const { pathname } = useLocation();
  
  return (
    <PageContainer>
      <h1>Accounts</h1>
      <div className="tags-container">
        <Link className={`${pathname.includes('profiles') ? 'active' : ''} tag`} to="../profiles" relative="path">Profiles</Link>
        <Link className={`${pathname.includes('groups') ? 'active' : ''} tag`} to="../groups" relative="path">Groups</Link>
      </div>
      <div className="content">{children}</div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  display: flex-column;
  .tags-container {
    border-bottom: 2px black solid;
    display: flex;
    flex-direction: row;
    width: 100%;

    .tag {
      flex: 50%;
      text-align: center;
      font-family: 'Noir Std';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 103.68%;
      letter-spacing: 0.02em;
      color: #797979;
      padding: 18px;
    }

    .active {
      background-color: #a8a8a8;
    }

    .content {
      padding: 11px 0px;
    }
  }
`