import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GroupCard } from "../../../components/Accounts/GroupCard";
import { GroupInvitationCard } from "../../../components/Accounts/GroupInvitationCard";
import { JoinGroupModal } from "../../../components/Accounts/JoinGroupModal";
import { Button } from "../../../components/Global/Button";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import mockData from "../../../lib/mockData/accounts/groups.json";

export const AccountsGroupsPage = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/dashboard/accounts/groups/create");
  };

  const handleJoinGroup = () => {
    setVisibleModal(false);
  };

  const handleClose = () => {
    setVisibleModal(false);
  };

  return (
    <Style.PageContainer>
      <div className="header-container">
        <div className="group-container">
          <div className="label">
            <p>Group</p>
            <input className=""></input>
          </div>
          <div className="label">
            <p>Group ID</p>
            <input className=""></input>
          </div>
          <div className="label">
            <p>School</p>
            <input className=""></input>
          </div>
        </div>
        <div className="button-container">
          <Button onClick={handleCreate}>Create Group</Button>
          <Button onClick={() => setVisibleModal(true)}>Join Group</Button>
        </div>
      </div>
      <div className="row">
        <div className="groups-container">
          {mockData.groups.map((group, index) => (
            <div className="group-card-container" key={index}>
              <Link to="./group">
                <GroupCard data={group} />
              </Link>
            </div>
          ))}
        </div>
        <div className="group-invitations-container">
          <p className="title-text">
            {"Group Invitations ( " + mockData.groupInvitations.length + " )"}
          </p>
          <div className="group-invitations">
            {mockData.groupInvitations.map((group, index) => (
              <GroupInvitationCard data={group} key={index} />
            ))}
          </div>
        </div>
      </div>
      {visibleModal && (
        <ModalContainer>
          <JoinGroupModal
            role="Standard"
            groupID={2334}
            groupName="Group A"
            creator="Vane Jones"
            onJoin={handleJoinGroup}
            onClose={handleClose}
          />
        </ModalContainer>
      )}
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;

    .header-container {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      .group-container {
        display: flex;

        .label {
          margin-right: 10px;
        }
      }

      .button-container {
        display: flex;
        align-items: center;

        Button {
          margin-right: 10px;
        }
      }
    }

    .row {
      display: flex;

      .groups-container {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 0px;
        margin-top: 80px;
        padding: 0px;

        .group-card-container {
          width: 45%;

          a {
            &:hover,
            &:visited {
              text-decoration: none;
            }
          }
        }
      }

      .group-invitations-container {
        display: flex;
        flex-direction: column;
        margin: 10px;
        width: 20%;

        .title-text {
          font-size: 1.2rem;
        }

        .group-invitations {
          border: 1px black solid;
          padding: 10px;

          .bold-big-text {
            font-size: 1.1 rem;
            font-weight: 700;
          }
        }
      }
    }
  `,
};
