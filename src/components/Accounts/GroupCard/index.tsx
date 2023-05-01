import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { formatDate } from "../../../lib/util/formatDate";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import Button from "../../Button";
import { Icon } from "../../Global/Icon";

interface GroupCardProps {
  data: {
    group: {
      name: string;
      id: string;
      lastModificationTime: string;
      owner: string;
      ownerRole: string;
      creationTime: string;
      members: {
        img: string;
        name: string;
      }[];
    };
    owner: {
      username: string;
      role: string;
    };
  };
}

export const GroupCard = ({ data }: GroupCardProps) => {
  const [isExpand, setIsExpand] = useState(false);
  const { api } = useAPI();
  const [cookies] = useCookies([STORAGE_KEY_JWT]);
  const user = useUserStore((state) => state.user);

  const handleExpand = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsExpand(!isExpand);
  };

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (data.group.id) {
      const response = await api.appCustomGroupsDelete(data.group.id, {
        headers: {
          Authorization: `Bearer ${cookies.PCCC_TOKEN}`,
        },
      });
    }
  };

  const handleJoin = async () => {
    if (user) {
      const response = await api.appCustomGroupsJoinCreate(
        {
          groupId: data.group.id,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.PCCC_TOKEN}`,
          },
        },
      );
    }
  };

  return (
    <Style.Container>
      <div className="row">
        <div className="group-name-container">
          <div className="icon-container">
            <Icon name="group" />
          </div>
          <Link to={`${data.group.id}`}>
            <p className="bold-big-text">{data.group.name}</p>
          </Link>
        </div>
        <p className="date">
          Last modified:{" "}
          {formatDate(
            data.group.lastModificationTime || data.group.creationTime,
          )}
        </p>
        <Link to={`${data.group.id}/edit`}>
          <button>
            <img src="/images/icons/edit.svg" />
          </button>
        </Link>
      </div>
      <div>
        <p className="text">Group ID: {data.group.id}</p>
      </div>
      <p className="text">
        Owner: {data.owner.username} {"(" + data.owner.role + ")"}
      </p>
      <div
        className={`members-container ${isExpand === true ? "show" : "hide"}`}
      >
        {data.group.members &&
          data.group.members.map((member, index) => (
            <div className="member-container" key={index}>
              <img src={member.img} alt="member" placeholder="image" />
              <p className="bold-text">{member.name}</p>
            </div>
          ))}
      </div>
      <div className="row">
        <button className="expand-button" onClick={handleExpand}>
          {isExpand === false ? "Expand" : "Collapse"}
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
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    padding: 1.4rem;
    border-radius: 16px;

    .text {
      color: var(--neutral-600);
    }

    .row {
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      .date {
        font-size: 0.75rem;
      }

      .group-name-container {
        display: flex;
        align-items: center;

        p {
          padding-left: 5px;
          font-size: 1.5rem;
          color: var(--neutral-800);
        }
      }

      .icon-container {
        width: 30px;
        height: 30px;
      }

      p {
        margin: 0px;
        padding: 0px;
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
