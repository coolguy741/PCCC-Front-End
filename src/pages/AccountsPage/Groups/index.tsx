import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GroupCard } from "../../../components/Accounts/GroupCard";
import { GroupInvitationCard } from "../../../components/Accounts/GroupInvitationCard";
import { JoinGroupModal } from "../../../components/Accounts/JoinGroupModal";
import Button from "../../../components/Button";
import { Input } from "../../../components/Global/Input";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import {
  PccServer23GroupsCustomGroupUserJoinRequestDto,
  PccServer23GroupsGroupWithNavigationPropertiesDto,
} from "../../../lib/api/api";

interface IGroup {
  groups: PccServer23GroupsGroupWithNavigationPropertiesDto[];
  invitations: PccServer23GroupsCustomGroupUserJoinRequestDto[];
}

export const AccountsGroupsPage = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const navigate = useNavigate();
  const { groups, invitations } = useLoaderData() as IGroup;

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
            <span>Group</span>
            <Input type="text" height="3.5rem" />
          </div>
          <div className="label">
            <span>Group ID</span>
            <Input type="text" height="3.5rem" />
          </div>
          <div className="label">
            <span>School</span>
            <Input type="text" height="3.5rem" />
          </div>
        </div>
        <div className="button-container">
          <Button variant="yellow" onClick={handleCreate}>
            Create Group
          </Button>
          <Button onClick={() => setVisibleModal(true)}>Join Group</Button>
        </div>
      </div>
      <div className="row">
        <div className="groups-container">
          {groups.map((group, index) => (
            <div className="group-card-container" key={index}>
              <GroupCard data={group} />
            </div>
          ))}
        </div>
        <div className="group-invitations-container">
          <p className="title-text">
            {`Group Invitations (${invitations?.length})`}
          </p>
          <div className="group-invitations">
            {invitations &&
              invitations.map((invitation, index) => {
                return (
                  <GroupInvitationCard
                    key={index}
                    groupName={invitation.groupName}
                    userName={invitation.userName}
                  />
                );
              })}
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
    gap: 3rem;

    .header-container {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .group-container {
        display: flex;
        gap: 1.5rem;

        .label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          color: var(--neutral-600);
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
        align-items: center;
        width: 20%;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        max-height: 50vh;
        padding-top: 1rem;

        .title-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--neutral-800);
        }

        .group-invitations {
          padding: 1.4rem;
          overflow-y: scroll;
          width: 100%;

          .bold-big-text {
            font-size: 1.1 rem;
            font-weight: 700;
          }
        }
      }
    }
  `,
};
