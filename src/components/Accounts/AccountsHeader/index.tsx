import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Account } from "../../Icons";

export const AccountsHeader = () => {
  const { pathname } = useLocation();

  return (
    <Style.Container>
      <h1>
        <Account /> Accounts
      </h1>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 15%;

    h1 {
      font-weight: 600;
      font-size: 4vh;
      color: var(--orange-500);
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.4vw;
        height: 4vh;
      }
    }

    .tags-container {
      border-bottom: 1px solid var(--blue-500);
      width: 100%;
      display: flex;
      flex-grow: 1;

      .tag {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        color: var(--blue-500);
        border-bottom: 1px solid transparent;
        transition: border 0.3s linear;
        font-size: 2.5vh;
      }

      .active {
        border-bottom: 1px solid var(--blue-500);
      }
    }
  `,
};
