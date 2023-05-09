import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Account } from "../../Icons";

export const AccountsHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Style.Container className="accounts-header">
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
      {/* <BackButton onClick={handleBack} /> */}
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

    // TODO: ask about global back button
    button {
      margin: 1.2vh 0;
      background: rgba(255, 255, 255, 0.65);
      width: 110px;
      padding: 10px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      border-radius: 80px;
      font-size: 1.5vh;

      svg {
        margin-right: 0.5vw;
        height: 1.5vh;
      }
    }
  `,
};
