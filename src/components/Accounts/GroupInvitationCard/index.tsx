import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { PccServer23GroupsCustomGroupUserJoinRequestDto } from "../../../lib/api/api";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import Button from "../../Button";

export const GroupInvitationCard = (
  group: PccServer23GroupsCustomGroupUserJoinRequestDto,
) => {
  const { api } = useAPI();
  const navigate = useNavigate();

  const acceptHandler = async () => {
    const response = await api.appGroupsAcceptCreate(
      {
        groupUserId: group.groupUserId,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 204) navigate("/dashboard/accounts/groups");

    return;
  };

  const denyHandler = async () => {
    const response = await api.appGroupsRejectCreate(
      {
        groupUserId: group.groupUserId,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 204) navigate("/dashboard/accounts/groups");

    return;
  };

  return (
    <Style.Container>
      <div className="invitation-container">
        <div>
          <img src="/images/icons/group.svg" width="20" />
          <p className="bold-big-text">{group.groupName}</p>
        </div>
        <p className="text">Creator: {group.userName}</p>
        <div className="status-container">
          <Button size="small" variant="yellow" onClick={acceptHandler}>
            Accept
          </Button>
          <Button size="small" onClick={denyHandler}>
            Deny
          </Button>
          {/* {group.status === "Accepted" && (
            <>
              <p className="bold-text">Accepted</p>
            </>
          )}
          {group.status === "Denied" && (
            <>
              <p className="bold-text">Denied</p>
            </>
          )} */}
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    border-bottom: 1px solid var(--neutral-200);

    .invitation-container {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(--neutral-600);

      div {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        .bold-big-text {
          padding: 0px;
          margin: 0px;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .text {
          padding: 0px;
          margin: 0px;
          font-size: 1 rem;
          font-weight: 400;
        }
      }

      .status-container {
        display: flex;
        color: var(--neutral-800);
        justify-content: space-between;

        .bold-text {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
        }

        p {
          padding: 0px;
          margin: 0px;
        }
      }
    }
  `,
};
