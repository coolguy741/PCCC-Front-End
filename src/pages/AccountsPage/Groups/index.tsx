import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GroupCard } from "../../../components/Accounts/GroupCard";
import { GroupInvitationCard } from "../../../components/Accounts/GroupInvitationCard";
import { JoinGroupModal } from "../../../components/Accounts/JoinGroupModal";
import Button from "../../../components/Button";
import { Input } from "../../../components/Global/Input";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import Scrollbar from "../../../components/Global/Scrollbar";
import {
  PccServer23GroupsCustomGroupUserJoinRequestDto,
  PccServer23GroupsGroupWithNavigationPropertiesDto,
} from "../../../lib/api/api";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

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
      <div className="header-container manage-users-options">
        <div className="group-container">
          <fieldset className="label">
            <label>Group</label>
            <Input type="text" placeholder="Name" />
          </fieldset>
          <fieldset className="label">
            <label>Group ID</label>
            <Input type="text" placeholder="0000" />
          </fieldset>
          <fieldset className="label">
            <label>School</label>
            <Input type="text" placeholder="Name" />
          </fieldset>
        </div>
        <div className="button-container">
          <Button variant="yellow" onClick={handleCreate}>
            Create Group
          </Button>
          <Button onClick={() => setVisibleModal(true)}>Join Group</Button>
        </div>
      </div>
      <div className="row manage-users-content">
        <div className="groups-container">
          {groups.map((group, index) => (
            <div className="group-card-container" key={index}>
              <GroupCard data={group} invitations={invitations} />
            </div>
          ))}
        </div>
        <div className="group-invitations-container">
          <p className="title-text">
            {`Group Invitations (${invitations?.length})`}
          </p>
          <div className="group-invitations">
            <Scrollbar>
              {invitations &&
                invitations.map((invitation, index) => {
                  return (
                    <GroupInvitationCard
                      key={index}
                      groupName={invitation.groupName}
                      userName={invitation.userName}
                      groupUserId={invitation.groupUserId}
                      userRole={invitation.userRole}
                    />
                  );
                })}
            </Scrollbar>
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

    div.manage-users-options {
      padding-bottom: ${convertToRelativeUnit(16, "vh")};
      height: calc(10vh + ${convertToRelativeUnit(32, "vh")});
    }

    .header-container {
      padding-top: ${convertToRelativeUnit(32, "vh")};
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .group-container {
        display: flex;
        gap: ${convertToRelativeUnit(24, "vh")};

        .label {
          display: flex;
          flex-direction: column;
          gap: ${convertToRelativeUnit(8, "vh")};
          color: var(--neutral-600);
        }
      }

      .button-container {
        display: flex;
        align-items: center;

        button {
          margin-left: ${convertToRelativeUnit(10, "vw")};
        }
      }
    }

    .row {
      display: flex;
      gap: ${convertToRelativeUnit(20, "vw")};

      .groups-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: ${convertToRelativeUnit(20, "vw")};

        .group-card-container {
          width: 100%;

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
        min-width: 22vh;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        max-height: 50vh;
        padding-top: ${convertToRelativeUnit(16, "vh")};
        position: sticky;

        .title-text {
          font-size: ${convertToRelativeUnit(19, "vh")};
          font-weight: 600;
          color: var(--neutral-800);
        }

        .group-invitations {
          padding: ${convertToRelativeUnit(22, "vh")};
          width: 100%;

          .bold-big-text {
            font-size: ${convertToRelativeUnit(18, "vh")};
            font-weight: 700;
          }
        }
      }
    }
  `,
};
