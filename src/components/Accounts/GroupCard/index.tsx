import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import {
  PccServer23GroupsCustomGetJoinedGroupUsersDto,
  PccServer23GroupsCustomGroupUserJoinRequestDto,
  PccServer23GroupsGroupWithNavigationPropertiesDto,
} from "../../../lib/api/api";
import { capitalize } from "../../../lib/util/capitalize";
import { formatDate } from "../../../lib/util/formatDate";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import Button from "../../Button";
import { Icon } from "../../Global/Icon";

interface GroupCardProps {
  data: PccServer23GroupsGroupWithNavigationPropertiesDto;
  invitations: PccServer23GroupsCustomGroupUserJoinRequestDto[];
}

export const GroupCard = ({ data, invitations }: GroupCardProps) => {
  const [isExpand, setIsExpand] = useState(false);
  const { api } = useAPI();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [joinedUsers, setJoinedUsers] = useState<
    PccServer23GroupsCustomGetJoinedGroupUsersDto[] | null | undefined
  >([]);

  const handleExpand = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsExpand(!isExpand);
  };

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (data?.group?.id) {
      const response = await api.appCustomGroupsDelete(data.group.id, {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      });

      if (response.status === 204) navigate("/dashboard/accounts/groups");
    }
  };

  const handleJoin = async () => {
    if (user) {
      const response = await api.appCustomGroupsJoinCreate(
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

  useEffect(() => {
    const getJoinedUsers = async (groupId: string) => {
      const response = await api.appCustomGroupsJoinedGroupUsersList(
        { GroupId: groupId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.status === 200) {
        console.log(response);
        setJoinedUsers(response.data.items);
      }
    };

    if (data?.group?.id) getJoinedUsers(data?.group?.id);
  }, [invitations]);

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
              <img src="/images/icons/edit.svg" />
            </button>
          </Link>
        </div>
        <div className="body">
          <p className="text">Group ID: {data?.group?.id}</p>
          <p className="text">
            Owner: {data?.owner?.username} {"(" + data?.owner?.role + ")"}
          </p>
        </div>
        <div
          className={`members-container ${isExpand === true ? "show" : "hide"}`}
        >
          {joinedUsers &&
            joinedUsers.map((member, index) => (
              <div className="member-container" key={index}>
                <img
                  src="/images/avatars/avatar.svg"
                  alt="member"
                  placeholder="image"
                  width="50"
                />
                <div>
                  <span className="user">{member.userName || "UserName"}</span>
                  <span className="role">{capitalize(member.userRole)}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="row">
          <button className="expand-button" onClick={handleExpand}>
            {isExpand === false ? "Expand" : "Collapse"}
            <img src="/images/icons/arrow-down-black.svg" />
          </button>
          <div className="buttons-group">
            <button onClick={handleDelete}>
              <img src="/images/icons/delete.svg" />
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
    padding: 1.4rem;
    border-radius: 16px;

    .card-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 1.5rem;

      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .group-name {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 1.6rem;
        }

        .date {
          font-size: 0.75rem;
          color: var(--neutral-600);
        }
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        color: var(--neutral-600);
      }

      .icon-container {
        width: 30px;
        height: 30px;
      }
    }

    .members-container {
      display: flex;
      flex-wrap: wrap;

      .member-container {
        display: flex;
        width: 50%;
        align-items: center;

        img {
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }

        div {
          display: flex;
          flex-direction: column;

          .user {
            font-weight: 600;
            font-size: 1.1rem;
            color: var(--neutral-800);
          }

          .role {
            font-size: 0.8rem;
            color: var(--neutral-700);
          }
        }
      }
    }

    .row {
      display: flex;
      justify-content: space-between;

      .expand-button {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .buttons-group {
        display: flex;
        gap: 10px;
      }
    }

    .hide {
      display: none;
    }
  `,
};
