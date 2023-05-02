import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { PccServer23GroupsGroupWithNavigationPropertiesDto } from "../../../lib/api/api";
import { formatDate } from "../../../lib/util/formatDate";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import Button from "../../Button";
import { Icon } from "../../Global/Icon";

interface GroupCardProps {
  data: PccServer23GroupsGroupWithNavigationPropertiesDto;
}

export const GroupCard = ({ data }: GroupCardProps) => {
  const [isExpand, setIsExpand] = useState(false);
  const { api } = useAPI();
  const user = useUserStore((state) => state.user);

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
          {/* {data?.group?.members &&
            data.group.members.map((member, index) => (
              <div className="member-container" key={index}>
                <img src={member.img} alt="member" placeholder="image" />
                <p className="bold-text">{member.name}</p>
              </div>
            ))} */}
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
          width: 40px;
          height: 40px;
        }

        p {
          padding-left: 10px;
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
