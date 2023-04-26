import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const AccountsHeader = () => {
  const { pathname } = useLocation();

  return (
    <Style.Container>
      <h1>Accounts</h1>
      <nav className="tags-container">
        <Link
          className={`${pathname.includes("profiles") ? "active" : ""} tag`}
          to="/dashboard/accounts/profiles"
          relative="path"
        >
          Profiles
        </Link>
        <Link
          className={`${pathname.includes("groups") ? "active" : ""} tag`}
          to="/dashboard/accounts/groups"
          relative="path"
        >
          Groups
        </Link>
      </nav>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    padding: 25px 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 600;
      font-size: 48px;
      line-height: 56px;
      color: var(--orange-500);
      margin-bottom: 20px;
    }

    .tags-container {
      border-bottom: 2px solid var(--blue-500);
      height: 62px;
      width: 100%;
      display: flex;

      .tag {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 28px;
        line-height: 32px;
        color: var(--blue-500);
        border-bottom: 2px solid transparent;
        transition: border 0.3s linear;
      }

      .active {
        border-bottom: 2px solid var(--blue-500);
      }
    }
  `,
};
