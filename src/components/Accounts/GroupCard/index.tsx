import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import {
  PccServer23GroupsCustomGroupUserJoinRequestDto,
  PccServer23GroupsGroupWithNavigationPropertiesDto,
} from "../../../lib/api/api";
import { formatDate } from "../../../lib/util/formatDate";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import Button from "../../Button";
import { Icon } from "../../Global/Icon";

interface GroupCardProps {
  data: PccServer23GroupsGroupWithNavigationPropertiesDto;
  invitations: PccServer23GroupsCustomGroupUserJoinRequestDto[];
}

export const GroupCard = ({ data, invitations }: GroupCardProps) => {
  const { api } = useAPI();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (data?.group?.id) {
      const response = await api.appGroupsDelete2(data.group.id, {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      });

      if (response.status === 204) navigate("/dashboard/accounts/groups");
    }
  };

  const handleJoin = async () => {
    if (user) {
      const response = await api.appGroupsJoinCreate(
        {
          groupId: data?.group?.id,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.status === 204) {
        navigate("/dashboard/accounts/groups");
      }
    }
  };

  return (
    <Style.Container>
      <div className="card-content">
        <div className="header">
          <div className="group-name">
            <div className="icon-container">
              <Icon name="group" />
            </div>
            <Link to={`${data?.group?.id}`}>
              <p className="bold-big-text">{data?.group?.name}</p>
            </Link>
          </div>
          <p className="date">
            Last modified:{" "}
            {formatDate(
              data?.group?.lastModificationTime || data?.group?.creationTime,
            )}
          </p>
          <Link to={`${data?.group?.id}/edit`}>
            <button>
              <img src="/images/icons/edit.svg" alt="edit" />
            </button>
          </Link>
        </div>
        <div className="body">
          <p className="text">Group ID: {data?.group?.id}</p>
          <p className="text">
            Owner: {data?.owner?.username} {"(" + data?.owner?.role + ")"}
          </p>
        </div>
        <div className="row">
          <div className="buttons-group">
            <button onClick={handleDelete}>
              <img src="/images/icons/delete.svg" alt="delete" />
            </button>
            <Button size="small" onClick={handleJoin}>
              Join
            </Button>
          </div>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    padding: ${convertToRelativeUnit(24, "vh")};
    border-radius: 16px;
    width: 49%;
    margin-bottom: ${convertToRelativeUnit(24, "vh")};

    .card-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: ${convertToRelativeUnit(24, "vh")};

      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .group-name {
          display: flex;
          align-items: center;
          gap: ${convertToRelativeUnit(5, "vh")};
          font-size: ${convertToRelativeUnit(28, "vh")};
        }

        .date {
          font-size: ${convertToRelativeUnit(12, "vh")};
          color: var(--neutral-600);
        }
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: ${convertToRelativeUnit(12, "vh")};
        color: var(--neutral-600);
      }

      .icon-container {
        height: ${convertToRelativeUnit(30, "vh")};
        aspect-ratio: 1 / 1;
      }
    }

    .row {
      display: flex;
      justify-content: flex-end;

      .expand-button {
        display: flex;
        align-items: center;
        gap: ${convertToRelativeUnit(5, "vh")};
      }

      .buttons-group {
        display: flex;
        gap: ${convertToRelativeUnit(10, "vh")};
      }
    }

    .hide {
      display: none;
    }
  `,
};
