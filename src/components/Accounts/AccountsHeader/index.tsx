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
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 10%;

    h1 {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      color: var(--orange-500);
      /* margin-bottom: 10px; */
    }

    .tags-container {
      border-bottom: 1px solid var(--blue-500);
      /* height: 62px; */
      width: 100%;
      display: flex;
      margin-bottom: 25px;

      .tag {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--blue-500);
        border-bottom: 0px solid transparent;
        transition: border 0.3s linear;
        padding: 10px;
      }

      .active {
        border-bottom: 2px solid var(--blue-500);
      }
    }
  `,
};
