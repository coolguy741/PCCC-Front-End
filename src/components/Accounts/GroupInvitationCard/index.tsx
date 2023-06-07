import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { PccServer23GroupsCustomGroupUserJoinRequestDto } from "../../../lib/api/api";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Button from "../../Button";
import { Group } from "../../Icons";
import { Typography } from "../../Typography";

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
      <Typography
        color="neutral-600"
        size={convertToRelativeUnit(18, "vh")}
        weight={500}
      >
        <Group /> Group: {group.groupName}
      </Typography>
      <Typography
        color="neutral-600"
        size={convertToRelativeUnit(16, "vh")}
        mb="3vh"
      >
        Creator: {group.userName ?? "dummy-text"}
      </Typography>
      <div className="status-container">
        <Button size="small" variant="yellow" onClick={acceptHandler}>
          Accept
        </Button>
        <Button size="small" onClick={denyHandler}>
          Decline
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
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    padding: 2.5vh 0.5vh;
    border-bottom: 1px solid #d9d9d9;
    p {
      display: flex;
      align-items: center;

      svg {
        margin-right: ${convertToRelativeUnit(8, "vw")};
      }
    }

    .status-container {
      display: flex;
      justify-content: space-between;
    }

    &:first-of-type {
      padding-top: 0;
      padding-bottom: 2.5vh;
    }

    &:last-of-type {
      border-bottom: unset;
    }
  `,
};
