import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../Global/Icon";
import { SmallButton } from "../../Global/SmallButton";

interface GroupCardProps {
  data: {
    group: {
      name: string;
      id: number;
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

  const handleExpand = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsExpand(!isExpand);
  };

  return (
    <Style.Container>
      <div className="row">
        <div className="col-50">
          <div className="group-name-container">
            <div className="icon-container">
              <Icon name="group" />
            </div>
            <p className="bold-big-text">{data.group.name}</p>
          </div>
          <div>
            <p className="text">Group ID: {data.group.id}</p>
          </div>
        </div>
        <div className="col-50">
          <p className="text">
            Last modified:{" "}
            {data.group.lastModificationTime || data.group.creationTime}
          </p>
          <p className="text">Owner: {data.owner.username}</p>
          <p className="text">{"(" + data.owner.role + ")"}</p>
        </div>
      </div>
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
          <SmallButton>Join</SmallButton>
          <SmallButton>Edit</SmallButton>
          <SmallButton>Delete</SmallButton>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    border: 1px black solid;
    padding: 10px;

    .row {
      width: 100%;
      display: flex;
      margin-bottom: 20px;

      .col-50 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;

        .group-name-container {
          display: flex;
          align-items: center;
          p {
            padding-left: 10px;
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

    .hide {
      display: none;
    }
  `,
};
