import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GroupCard } from "../../../components/Accounts/GroupCard";
import { GroupInvitationCard } from "../../../components/Accounts/GroupInvitationCard";
import { JoinGroupModal } from "../../../components/Accounts/JoinGroupModal";
import Button from "../../../components/Button";
import { Input } from "../../../components/Global/Input";
import { default as Scrollable } from "../../../components/Global/Scrollable";
import Modal from "../../../components/Modal";
import { Typography } from "../../../components/Typography";
import useModal from "../../../hooks/useModal";
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
  const { modal, toggle, setModalFalse } = useModal();
  const navigate = useNavigate();
  const { groups, invitations } = useLoaderData() as IGroup;

  const handleCreate = () => {
    navigate("/accounts/groups/create");
  };

  const handleJoinGroup = () => {
    toggle();
  };

  const handleClose = () => {
    setModalFalse();
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
          <Button onClick={toggle}>Join Group</Button>
        </div>
      </div>
      <Scrollable className="row manage-users-content" height="65vh">
        <div className="groups-container">
          {groups.map((group, index) => (
            <GroupCard key={index} data={group} invitations={invitations} />
          ))}
        </div>
        <div className="group-invitations-container">
          <Typography
            color="neutral-800"
            weight={600}
            size="2vh"
            tag="p"
            mb="1.75vh"
          >
            {`Group Invitations (${invitations?.length})`}
          </Typography>
          <Scrollable
            height="auto"
            thumbWidth="thin"
            className="group-invitations"
          >
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
          </Scrollable>
        </div>
      </Scrollable>
      {modal && (
        <Modal modal={modal} toggle={toggle}>
          <JoinGroupModal
            role="Standard"
            groupID={2334}
            groupName="Group A"
            creator="Vane Jones"
            onJoin={handleJoinGroup}
            onClose={handleClose}
          />
        </Modal>
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
      position: relative;

      .groups-container {
        width: 78.5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .group-invitations-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        width: 17.5%;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        max-height: 62vh;
        right: 2.5%;
        padding-top: ${convertToRelativeUnit(16, "vh")};
        padding-bottom: 40px;

        .group-invitations {
          width: 90%;

          .bold-big-text {
            font-size: ${convertToRelativeUnit(18, "vh")};
            font-weight: 700;
          }
        }
      }
    }
  `,
};
