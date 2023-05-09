import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BackButton } from "../../Global/BackButton";
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
          Users
        </Link>
        <Link
          className={`${pathname.includes("groups") ? "active" : ""} tag`}
          to="/dashboard/accounts/groups"
          relative="path"
        >
          Groups
        </Link>
      </nav>
      <BackButton />
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: space-between;

    h1 {
      font-weight: 600;
      font-size: 2.5vh;
      color: var(--orange-500);
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5vw;
        height: 2vh;
      }
    }

    .tags-container {
      border-bottom: 1px solid var(--blue-500);
      width: 100%;
      display: flex;
      /* flex-grow: 1; */
      height: 4vh;

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
        font-size: 2vh;
      }

      .active {
        border-bottom: 1px solid var(--blue-500);
      }
    }

    // TODO: ask about global back button
    button {
      margin: 1vh 0;
      background: rgba(255, 255, 255, 0.65);
      width: 100px;
      padding: 7.5px 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      border-radius: 80px;
      font-size: 1.5vh;
    }
  `,
};
