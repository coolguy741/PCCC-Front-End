import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const AccountsHeader = () => {
  const { pathname } = useLocation();

  return (
    <Style.Container>
      <h1>Accounts</h1>
      <div className="tags-container">
        <Link
          className={`${pathname.includes('profiles') ? 'active' : ''} tag`}
          to="/dashboard/accounts/profiles"
          relative="path"
        >
          Profiles
        </Link>
        <Link
          className={`${pathname.includes('groups') ? 'active' : ''} tag`}
          to="/dashboard/accounts/groups"
          relative="path"
        >
          Groups
        </Link>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
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
    }
  `,
};
