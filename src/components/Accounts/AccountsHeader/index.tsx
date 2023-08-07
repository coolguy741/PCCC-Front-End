import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Account } from "../../Icons";

export const AccountsHeader = () => {
  const { pathname } = useLocation();

  return (
    <Style.Container className="accounts-header">
      <h1>
        <Account /> Accounts
      </h1>
      <nav className="tags-container">
        <Link
          className={`${pathname.includes("profiles") ? "active" : ""} tag`}
          to="/accounts/profiles"
          relative="path"
        >
          Users
        </Link>
        <Link
          className={`${pathname.includes("groups") ? "active" : ""} tag`}
          to="/accounts/groups"
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0.5vh;

    h1 {
      font-weight: 600;
      font-size: 4vh;
      color: var(--orange-500);
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5vw;
        height: 2.75vh;
      }
    }

    .tags-container {
      border-bottom: 2px solid var(--blue-500);
      width: 100%;
      display: flex;
      height: 5vh;

      .tag {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        color: var(--blue-500);
        border-bottom: 2px solid transparent;
        transition: border 0.3s linear;
        font-size: 2.4vh;
      }

      .active {
        border-bottom: 4px solid var(--blue-500);
      }
    }
  `,
};
